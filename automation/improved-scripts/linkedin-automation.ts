class LinkedInAutomation {
  private log(message: string, level: string): void {
    console.log(`[${level.toUpperCase()}] ${message}`);
  }

  public run(): void {
    this.log('LinkedIn automation script', 'info');
  }
}

export default LinkedInAutomation;
