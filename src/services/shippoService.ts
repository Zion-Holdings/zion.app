import axios from 'axios';

import {logErrorToProduction} from "@/utils/productionLogger";

export interface ShippoShipment {
  tracking_number: string;
  tracking_status?: string;
  tracking_history?: ShippoTrackingEvent[];
}

export interface ShippoTrackingEvent {
  status: string;
  location?: string;
  status_details?: string;
  timestamp: string;
}

const SHIPPO_TOKEN = process.env.SHIPPO_TOKEN || '';
const FROM_ADDRESS = {
  name: process.env.SHIPPO_FROM_NAME || 'Sender',
  street1: process.env.SHIPPO_FROM_STREET || '',
  city: process.env.SHIPPO_FROM_CITY || '',
  state: process.env.SHIPPO_FROM_STATE || '',
  zip: process.env.SHIPPO_FROM_ZIP || '',
  country: process.env.SHIPPO_FROM_COUNTRY || 'US'
};

export async function createShipment(addressTo: any, parcels: any[]): Promise<ShippoShipment> {
  try {
    const res = await axios.post('https://api.goshippo.com/shipments/', {
      address_from: FROM_ADDRESS,
      address_to: addressTo,
      parcels,
    }, {
      headers: {
        Authorization: `ShippoToken ${SHIPPO_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    return res.data as ShippoShipment;
  } catch (err) {
    logErrorToProduction('Shippo create shipment error:', { data: err });
    throw err;
  }
}

export function parseShippoWebhook(payload: any) {
  const trackingNumber = payload?.tracking_number;
  const trackingStatus = payload?.tracking_status?.status;
  const events = payload?.tracking_history as ShippoTrackingEvent[] | undefined;
  return { trackingNumber, trackingStatus, events };
}
