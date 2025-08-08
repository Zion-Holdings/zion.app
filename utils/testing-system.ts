export class TestingSystem {
  static async testUserInteraction(element: HTMLElementaction: 'click' | 'type' | 'hover') {
    switch (action) {
      case 'click':
        element.click();
        break;
      case 'type': // Handle typing
        break;
      case 'hover': // Handle hover
        break;
    }
  }
}