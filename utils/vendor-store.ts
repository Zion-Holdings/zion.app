import fs from 'fs';
import path from 'path';
import type { Vendor, VendorPipelineItem } from './vendor-types';

const dataDir = path.join(process.cwd(), 'data');
const vendorsFile = path.join(dataDir, 'vendors.json');
const pipelineFile = path.join(dataDir, 'vendor-pipeline.json');

function ensureFiles() {
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  if (!fs.existsSync(vendorsFile)) fs.writeFileSync(vendorsFile, JSON.stringify({ vendors: [] }, null, 2));
  if (!fs.existsSync(pipelineFile)) fs.writeFileSync(pipelineFile, JSON.stringify({ items: [] }, null, 2));
}

export function listVendors(): Vendor[] {
  ensureFiles();
  const raw = JSON.parse(fs.readFileSync(vendorsFile, 'utf-8'));
  return raw.vendors as Vendor[];
}

export function getVendorBySlug(slug: string): Vendor | undefined {
  return listVendors().find(v => v.slug === slug);
}

export function getVendorById(id: string): Vendor | undefined {
  return listVendors().find(v => v.id === id);
}

export function saveVendors(vendors: Vendor[]) {
  ensureFiles();
  fs.writeFileSync(vendorsFile, JSON.stringify({ vendors }, null, 2));
}

export function upsertVendor(vendor: Vendor): Vendor {
  const existing = listVendors();
  const idx = existing.findIndex(v => v.id === vendor.id);
  if (idx >= 0) {
    existing[idx] = vendor;
  } else {
    existing.push(vendor);
  }
  saveVendors(existing);
  return vendor;
}

export function registerVendor(input: Omit<Vendor, 'id' | 'verified' | 'suspended' | 'tokens' | 'rating'>): Vendor {
  const id = `v_${Date.now()}`;
  const vendor: Vendor = {
    ...input,
    id,
    verified: false,
    suspended: false,
    tokens: 0,
    rating: 0,
  };
  return upsertVendor(vendor);
}

export function setVendorApproval(vendorId: string, verified: boolean) {
  const vendor = getVendorById(vendorId);
  if (!vendor) throw new Error('Vendor not found');
  vendor.verified = verified;
  upsertVendor(vendor);
}

export function setVendorCommission(vendorId: string, pct: number) {
  const vendor = getVendorById(vendorId);
  if (!vendor) throw new Error('Vendor not found');
  vendor.commissionSplitPct = pct;
  upsertVendor(vendor);
}

export function suspendVendor(vendorId: string, suspended: boolean) {
  const vendor = getVendorById(vendorId);
  if (!vendor) throw new Error('Vendor not found');
  vendor.suspended = suspended;
  upsertVendor(vendor);
}

function readPipeline(): VendorPipelineItem[] {
  ensureFiles();
  const raw = JSON.parse(fs.readFileSync(pipelineFile, 'utf-8'));
  return raw.items as VendorPipelineItem[];
}

function writePipeline(items: VendorPipelineItem[]) {
  ensureFiles();
  fs.writeFileSync(pipelineFile, JSON.stringify({ items }, null, 2));
}

export function listPipelineForVendor(vendorId: string): VendorPipelineItem[] {
  return readPipeline().filter(i => i.vendorId === vendorId);
}

export function addPipelineItem(vendorId: string, title: string): VendorPipelineItem {
  const now = new Date().toISOString();
  const item: VendorPipelineItem = {
    id: `p_${Date.now()}`,
    vendorId,
    title,
    status: 'lead',
    createdAt: now,
    updatedAt: now,
  };
  const items = readPipeline();
  items.push(item);
  writePipeline(items);
  return item;
}

export function updatePipelineItemStatus(itemId: string, status: VendorPipelineItem['status']) {
  const items = readPipeline();
  const idx = items.findIndex(i => i.id === itemId);
  if (idx < 0) throw new Error('Pipeline item not found');
  items[idx].status = status;
  items[idx].updatedAt = new Date().toISOString();
  writePipeline(items);
}