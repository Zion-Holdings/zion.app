import React, { useState } from "react";

export interface TreeNode {
  name: string;
  path: string;
  type: "folder" | "file";
  exists?: boolean;
  children?: TreeNode[];
}

interface TreeProps {
  nodes: TreeNode[];
  onDeploy?: (path: string) => void;
}

function NodeItem({ node, depth, onDeploy }: { node: TreeNode; depth: number; onDeploy?: (path: string) => void }) {
  const [open, setOpen] = useState<boolean>(false);

  const hasChildren = Array.isArray(node.children) && node.children.length > 0;
  const toggle = () => setOpen((v) => !v);

  const copyPath = async () => {
    await navigator.clipboard.writeText(node.path);
  };

  const clonePath = async () => {
    const url = `${window.location.origin}/api/dev/source-map`;
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Expect an admin token in local storage, fall back to prompt
        "x-admin-token": localStorage.getItem("ADMIN_TOKEN") || "",
      } as any,
      body: JSON.stringify({ path: node.path }),
    });
  };

  const deploy = () => onDeploy && onDeploy(node.path);

  return (
    <div className="ml-2">
      <div className="flex items-center gap-2 py-1">
        {hasChildren ? (
          <button className="text-sm" onClick={toggle} aria-label="Toggle">
            {open ? "▾" : "▸"}
          </button>
        ) : (
          <span className="inline-block w-4" />
        )}
        <span className={`font-mono text-sm ${node.exists ? "text-green-600" : "text-gray-500"}`}>
          {node.path}
        </span>
        <div className="ml-auto flex gap-2">
          <button className="px-2 py-0.5 text-xs bg-gray-100 rounded" onClick={copyPath} title="Copy path">Copy</button>
          <button className="px-2 py-0.5 text-xs bg-gray-100 rounded" onClick={clonePath} title="Create template">Template</button>
          <button className="px-2 py-0.5 text-xs bg-emerald-100 rounded" onClick={deploy} title="Auto-deploy">Deploy</button>
        </div>
      </div>
      {hasChildren && open && (
        <div className="ml-4 border-l pl-2">
          {node.children!.map((child) => (
            <NodeItem key={child.path} node={child} depth={depth + 1} onDeploy={onDeploy} />
          ))}
        </div>
      )}
    </div>
  );
}

export function Tree({ nodes, onDeploy }: TreeProps) {
  return (
    <div className="w-full">
      {nodes.map((n) => (
        <NodeItem key={n.path} node={n} depth={0} onDeploy={onDeploy} />
      ))}
    </div>
  );
}

export default Tree;