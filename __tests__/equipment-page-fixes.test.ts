// Test file to verify equipment page fixes
import { generateDatacenterEquipment } from '@/utils/equipmentAutoFeedAlgorithm';

describe('Equipment Page Fixes', () => {
  test('generateDatacenterEquipment produces consistent results with same seed', () => {
    const seed = 'test-seed';
    const count = 10;
    const startId = 1;

    // Generate equipment twice with the same parameters
    const equipment1 = generateDatacenterEquipment(count, startId, seed);
    const equipment2 = generateDatacenterEquipment(count, startId, seed);

    // Should produce identical results
    expect(equipment1).toEqual(equipment2);
    expect(equipment1.length).toBe(count);
    expect(equipment2.length).toBe(count);

    // Verify each item has required properties
    equipment1.forEach((item, index) => {
      expect(item.id).toBe(`datacenter-eq-${startId + index}`);
      expect(item.title).toBeTruthy();
      expect(item.category).toBeTruthy();
      expect(item.price).toBeGreaterThan(0);
      expect(item.rating).toBeGreaterThanOrEqual(3.5);
      expect(item.rating).toBeLessThanOrEqual(5.0);
    });
  });

  test('generateDatacenterEquipment produces different results with different seeds', () => {
    const count = 5;
    const startId = 1;

    const equipment1 = generateDatacenterEquipment(count, startId, 'seed1');
    const equipment2 = generateDatacenterEquipment(count, startId, 'seed2');

    // Should produce different results with different seeds
    expect(equipment1).not.toEqual(equipment2);
    
    // But should have same structure
    expect(equipment1.length).toBe(equipment2.length);
    expect(equipment1[0].id).toBe(equipment2[0].id); // Same ID structure
  });

  test('equipment categories are valid', () => {
    const equipment = generateDatacenterEquipment(20, 1, 'test');
    const validCategories = ["AI Hardware", "Servers & Compute", "Networking", "Storage Systems", "Power & Cooling"];
    
    equipment.forEach(item => {
      expect(validCategories).toContain(item.category);
    });
  });

  test('equipment prices are reasonable and category-appropriate', () => {
    const equipment = generateDatacenterEquipment(50, 1, 'price-test');
    
    equipment.forEach(item => {
      expect(item.price).toBeGreaterThan(0);
      expect(item.price).toBeLessThan(200000); // Max reasonable price
      
      // Price ranges should be appropriate for categories
      switch (item.category) {
        case 'AI Hardware':
          expect(item.price).toBeGreaterThanOrEqual(15000);
          break;
        case 'Servers & Compute':
          expect(item.price).toBeGreaterThanOrEqual(3000);
          break;
        case 'Networking':
          expect(item.price).toBeGreaterThanOrEqual(1000);
          break;
        case 'Storage Systems':
          expect(item.price).toBeGreaterThanOrEqual(5000);
          break;
        case 'Power & Cooling':
          expect(item.price).toBeGreaterThanOrEqual(500);
          break;
      }
    });
  });
}); 