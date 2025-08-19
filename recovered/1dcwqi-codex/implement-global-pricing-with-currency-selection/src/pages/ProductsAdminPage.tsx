import React, { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

interface Product {
  id: number;
  name: string;
  category: string;
  status: 'approved' | 'pending' | 'rejected';
}

const initialProducts: Product[] = [
  { id: 1, name: 'Alpha', category: 'Software', status: 'pending' },
  { id: 2, name: 'Beta', category: 'Hardware', status: 'approved' },
  { id: 3, name: 'Gamma', category: 'Service', status: 'rejected' },
];

export default function ProductsAdminPage() {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState(initialProducts);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleApproval = (id: number) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              status: p.status === 'approved' ? 'rejected' : 'approved',
            }
          : p
      )
    );
  };

  return (
    <AdminLayout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Products</h1>
          <Input
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-xs"
          />
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-center">Approve</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((p) => (
                <TableRow key={p.id}>
                  <TableCell>{p.id}</TableCell>
                  <TableCell>{p.name}</TableCell>
                  <TableCell>{p.category}</TableCell>
                  <TableCell>{p.status}</TableCell>
                  <TableCell className="text-center">
                    <Switch
                      checked={p.status === 'approved'}
                      onCheckedChange={() => toggleApproval(p.id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  );
}
