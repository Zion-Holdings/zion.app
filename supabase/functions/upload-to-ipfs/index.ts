import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
// Buffer is not explicitly used in the new version with FormData and Blob.
// import { Buffer } from 'https://deno.land/std@0.168.0/io/buffer.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { textData } = await req.json();
    if (!textData) {
      throw new Error('Missing "textData" in request body.');
    }

    const pinataApiKey = Deno.env.get('PINATA_API_KEY');
    const pinataApiSecret = Deno.env.get('PINATA_API_SECRET'); // Corrected variable name

    if (!pinataApiKey || !pinataApiSecret) {
      throw new Error('Pinata API credentials are not set in environment variables.');
    }

    const formData = new FormData();
    // Create a Blob from the text data.
    const blob = new Blob([textData], { type: 'text/plain' });
    // The third argument to append for File (filename) is important for Pinata.
    formData.append('file', blob, 'contract.txt');

    const pinataMetadata = JSON.stringify({
      name: `ZionContract-${new Date().toISOString()}`, // Dynamic name for the pinned file
    });
    formData.append('pinataMetadata', pinataMetadata);

    const pinataOptions = JSON.stringify({
      cidVersion: 1, // Use CID version 1 for wider compatibility
    });
    formData.append('pinataOptions', pinataOptions);

    const res = await fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', {
      method: 'POST',
      headers: {
        'pinata_api_key': pinataApiKey,
        'pinata_secret_api_key': pinataApiSecret, // Corrected header key
        // 'Content-Type': 'multipart/form-data' is automatically set by FormData
        // along with the correct boundary.
      },
      body: formData,
    });

    if (!res.ok) {
      const errorBody = await res.text(); // Get more details from Pinata error
      console.error('Pinata API error response:', errorBody);
      // Provide more context in the error message
      throw new Error(`Pinata API Error: ${res.status} ${res.statusText} - Details: ${errorBody}`);
    }

    const result = await res.json();
    // Defensive check for IpfsHash property
    if (!result.IpfsHash) {
      console.error('Unexpected Pinata response structure:', result);
      throw new Error('IPFS hash (IpfsHash) not found in Pinata response.');
    }

    return new Response(
      JSON.stringify({ success: true, ipfsHash: result.IpfsHash }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    // Log the error server-side for debugging
    console.error('Error in upload-to-ipfs function:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message || 'Failed to upload to IPFS' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
