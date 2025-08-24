import React, { useEffect, useState } from "react";
import Tree, { TreeNode } from "../../components/ui/Tree";

interface ApiResponse {
  nodes: TreeNode[];
  status: { gitConnected: boolean; gitBranch?: string };
}

export default function DevTreePage() {
  const [nodes, setNodes] = useState<TreeNode[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [git, setGit] = useState<ApiResponse["status"] | null>(null);
  const [adminToken, setAdminToken] = useState<string>("");

  const fetchTree = async (token?: string) => {
    try {
      const resp = await fetch("/api/dev/source-map", {
        headers: token ? { "x-admin-token": token } : undefined,
      });
      if (!resp.ok) {
        const j = await resp.json().catch(() => ({}));
        throw new Error(j.error || `HTTP ${resp.status}`);
      }
      const data: ApiResponse = await resp.json();
      setNodes(data.nodes);
      setGit(data.status);
    } catch (e: any) {
      setError(e.message || "Failed to load");
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem("ADMIN_TOKEN") || "";
    setAdminToken(stored);
    fetchTree(stored);
  }, []);

  const handleSaveToken = () => {
    localStorage.setItem("ADMIN_TOKEN", adminToken);
    fetchTree(adminToken);
  };

  const onDeploy = async (p: string) => {
    try {
      const resp = await fetch("/api/dev/source-map", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-token": adminToken,
        },
        body: JSON.stringify({ path: p }),
      });
      if (!resp.ok) {
        const j = await resp.json().catch(() => ({}));
        throw new Error(j.error || `HTTP ${resp.status}`);
      }
      await fetchTree(adminToken);
    } catch (e: any) {
      setError(e.message || "Deploy failed");
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-4">
        <h1 className="text-xl font-semibold">Zion OS Source Tree</h1>
        {git && (
          <div className="text-sm text-gray-600">
            Git: {git.gitConnected ? `connected (${git.gitBranch})` : "not connected"}
          </div>
        )}
        <div className="ml-auto flex items-center gap-2">
          <input
            className="border rounded px-2 py-1 text-sm"
            placeholder="Admin token"
            value={adminToken}
            onChange={(e) => setAdminToken(e.target.value)}
          />
          <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded" onClick={handleSaveToken}>
            Save Token
          </button>
        </div>
      </div>

      {error && <div className="mb-3 text-sm text-red-600">{error}</div>}

      {nodes ? (
        <div className="rounded border p-3 bg-white">
          <Tree nodes={nodes} onDeploy={onDeploy} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}