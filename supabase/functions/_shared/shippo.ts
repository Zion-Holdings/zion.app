export interface ShippoCreateShipmentParams {
  address_to: any;
  parcels: any[];
}

export interface ShippoShipment {
  tracking_number: string;
  tracking_status?: { status: string };
  tracking_history?: { status: string; location?: string; status_details?: string; timestamp: string }[];
}

const token = Deno.env.get('SHIPPO_TOKEN') || '';
const FROM_ADDRESS = {
  name: Deno.env.get('SHIPPO_FROM_NAME') || 'Sender',
  street1: Deno.env.get('SHIPPO_FROM_STREET') || '',
  city: Deno.env.get('SHIPPO_FROM_CITY') || '',
  state: Deno.env.get('SHIPPO_FROM_STATE') || '',
  zip: Deno.env.get('SHIPPO_FROM_ZIP') || '',
  country: Deno.env.get('SHIPPO_FROM_COUNTRY') || 'US'
};

export async function createShippoShipment(params: ShippoCreateShipmentParams): Promise<ShippoShipment> {
  const res = await fetch('https://api.goshippo.com/shipments/', {
    method: 'POST',
    headers: {
      Authorization: `ShippoToken ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ address_from: FROM_ADDRESS, ...params })
  });
  if (!res.ok) {
    const msg = await res.text();
    throw new Error(`Shippo create shipment failed: ${msg}`);
  }
  return await res.json() as ShippoShipment;
}
