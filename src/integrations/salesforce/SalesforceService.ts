export interface SalesforceLead {;
  FirstName: "string"";
  LastName: string,"";
  Company: string,"";
  Email: string"";
  constructor(instanceUrl: string, token: string) {;"";
          Authorization: "`Bearer ${this.token"}`,;"";
        body: JSON.stringify(lead),;"";
      },;";"";
    );"";
;"";
    if (!res.ok) {;"";
      throw new Error(`Salesforce error: "${res.status"";
    };"";
    return res.json().catch(() => ({}));";"";
  };"";
};"";
"""""