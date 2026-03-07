import React, { useMemo, useState } from "react";

type TransactionStatus = "succeeded" | "pending" | "failed";

type Transaction = {
  id: string;
  customerName: string;
  amountCents: number;
  currency: string;
  status: TransactionStatus;
  createdAt: string; // ISO string
};

type SortKey = "customerName" | "amountCents" | "status" | "createdAt";
type SortDirection = "asc" | "desc";

type TransactionListProps = {
  transactions: Transaction[];
  loading?: boolean;
  title?: string;
};

function formatCurrency(amountCents: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amountCents / 100);
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(iso));
}

function compareValues(a: string | number, b: string | number, direction: SortDirection) {
  if (a < b) return direction === "asc" ? -1 : 1;
  if (a > b) return direction === "asc" ? 1 : -1;
  return 0;
}

export default function TransactionList({
  transactions,
  loading = false,
  title = "Recent transactions",
}: TransactionListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | TransactionStatus>("all");
  const [sortKey, setSortKey] = useState<SortKey>("createdAt");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  function handleSort(nextKey: SortKey) {
    if (sortKey === nextKey) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
      return;
    }

    setSortKey(nextKey);
    setSortDirection(nextKey === "createdAt" ? "desc" : "asc");
  }

  const filteredAndSortedTransactions = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    const filtered = transactions.filter((transaction) => {
      const matchesSearch =
        normalizedQuery === "" ||
        transaction.customerName.toLowerCase().includes(normalizedQuery) ||
        transaction.id.toLowerCase().includes(normalizedQuery);

      const matchesStatus =
        statusFilter === "all" || transaction.status === statusFilter;

      return matchesSearch && matchesStatus;
    });

    const sorted = [...filtered].sort((a, b) => {
      switch (sortKey) {
        case "customerName":
          return compareValues(a.customerName.toLowerCase(), b.customerName.toLowerCase(), sortDirection);
        case "amountCents":
          return compareValues(a.amountCents, b.amountCents, sortDirection);
        case "status":
          return compareValues(a.status, b.status, sortDirection);
        case "createdAt":
          return compareValues(
            new Date(a.createdAt).getTime(),
            new Date(b.createdAt).getTime(),
            sortDirection
          );
        default:
          return 0;
      }
    });

    return sorted;
  }, [transactions, searchQuery, statusFilter, sortKey, sortDirection]);

  const totalVolumeCents = useMemo(() => {
    return filteredAndSortedTransactions.reduce((sum, transaction) => {
      return transaction.status === "succeeded" ? sum + transaction.amountCents : sum;
    }, 0);
  }, [filteredAndSortedTransactions]);

  function renderSortIndicator(column: SortKey) {
    if (sortKey !== column) return "↕";
    return sortDirection === "asc" ? "↑" : "↓";
  }

  return (
    <section
      aria-labelledby="transactions-heading"
      style={{
        border: "1px solid #ddd",
        borderRadius: 12,
        padding: 16,
        background: "white",
        maxWidth: 900,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          gap: 16,
          marginBottom: 16,
          flexWrap: "wrap",
        }}
      >
        <div>
          <h2 id="transactions-heading" style={{ margin: 0, fontSize: 20 }}>
            {title}
          </h2>
          <p style={{ margin: "6px 0 0", color: "#555" }}>
            {filteredAndSortedTransactions.length} transactions · Volume{" "}
            {formatCurrency(totalVolumeCents, "USD")}
          </p>
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <label>
            <span style={{ display: "block", marginBottom: 4 }}>Search</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search customer or ID"
              style={{ padding: 8, minWidth: 220 }}
            />
          </label>

          <label>
            <span style={{ display: "block", marginBottom: 4 }}>Status</span>
            <select
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value as "all" | TransactionStatus)
              }
              style={{ padding: 8 }}
            >
              <option value="all">All</option>
              <option value="succeeded">Succeeded</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
          </label>
        </div>
      </div>

      {loading ? (
        <div aria-live="polite" style={{ padding: 16 }}>
          Loading transactions...
        </div>
      ) : filteredAndSortedTransactions.length === 0 ? (
        <div aria-live="polite" style={{ padding: 16 }}>
          No transactions found.
        </div>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr style={{ textAlign: "left", borderBottom: "1px solid #ddd" }}>
                <th scope="col" style={{ padding: "10px 8px" }}>
                  <button type="button" onClick={() => handleSort("customerName")}>
                    Customer {renderSortIndicator("customerName")}
                  </button>
                </th>
                <th scope="col" style={{ padding: "10px 8px" }}>
                  <button type="button" onClick={() => handleSort("amountCents")}>
                    Amount {renderSortIndicator("amountCents")}
                  </button>
                </th>
                <th scope="col" style={{ padding: "10px 8px" }}>
                  <button type="button" onClick={() => handleSort("status")}>
                    Status {renderSortIndicator("status")}
                  </button>
                </th>
                <th scope="col" style={{ padding: "10px 8px" }}>
                  <button type="button" onClick={() => handleSort("createdAt")}>
                    Date {renderSortIndicator("createdAt")}
                  </button>
                </th>
                <th scope="col" style={{ padding: "10px 8px" }}>
                  ID
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredAndSortedTransactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  style={{ borderBottom: "1px solid #eee" }}
                >
                  <td style={{ padding: "12px 8px" }}>{transaction.customerName}</td>
                  <td style={{ padding: "12px 8px" }}>
                    {formatCurrency(transaction.amountCents, transaction.currency)}
                  </td>
                  <td style={{ padding: "12px 8px" }}>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "4px 8px",
                        borderRadius: 999,
                        fontSize: 12,
                        background:
                          transaction.status === "succeeded"
                            ? "#e8f7ee"
                            : transaction.status === "pending"
                            ? "#fff6dd"
                            : "#fdecec",
                      }}
                    >
                      {transaction.status}
                    </span>
                  </td>
                  <td style={{ padding: "12px 8px" }}>
                    {formatDate(transaction.createdAt)}
                  </td>
                  <td style={{ padding: "12px 8px", fontFamily: "monospace" }}>
                    {transaction.id}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}