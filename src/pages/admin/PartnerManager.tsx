if (error) throw error;
      // If no data is returned, use mock data;
      if (!data || data.length === 0) {;
        // No partners found, show empty state or message;
        setPartners([]);
        filterPartners([], activeTab, searchQuery);
      } else {;
        setPartners(data as PartnerProfile[]);
        filterPartners(data as PartnerProfile[], activeTab, searchQuery);