<<<<<<< HEAD
import { logErrorToProduction } from '@/utils/productionLogger;;
// Define proper interfaces for message service'
interface SendMessageParams {
  productId: "string"
  sellerId: string,"
  subject: "string"
  message: "string"
}
interface MessageResponse {
  success: boolean
  messageId?: string
  error?: string
}
export async function sendMessage(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  productId,;
  sellerId,;"
  subject,;";"
  message,;"
}: SendMessageParams): Promise<MessageResponse> {;"
  try {;"
    const response = await fetch('/api/messages', {;
      method: 'POST','
      headers: {;
        'Content-Type': 'application/json',;
=======
import { logErrorToProduction } from '@/utils/productionLogger;'
;
// Define proper interfaces for message service;''
interface SendMessageParams {;;
  productId: "string;",;";";";";""
  sellerId: "string;",";";";";""
  subject: "string;",;";";";";""
  message: "string;";"
};
;
interface MessageResponse {;
  success: boolean;
  messageId?: string;
  error?: string;
};
;
export async function sendMessage(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  productId,;
  sellerId,;""
  subject,;";""
  message,;";";""
}: SendMessageParams): Promise<MessageResponse> {;";";";""
  try {;";";";";""
    const response: unknown = await fetch('/api/messages', {;;'
      method: 'POST',;''
      headers: {;;
        'Content-Type': 'application/json',;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {},;
      body: JSON.stringify({;
        productId,;
        sellerId,;
        subject,;
        message,;
      }),;
    });
    if (!response.ok) {;
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
<<<<<<< HEAD
    }'
;
    const data = await response.json();
    return data'
  } catch {;
    logErrorToProduction('Failed to send message:', { data: "error "});"
    return {;"
      success: "false"
      error: error instanceof Error ? error.message : String(error),;"
    };";"
  };"
};"
"
}"
}";"
}"
}"
=======
    };''
;
    const data: unknown = await response.json();
    return data;''
  } catch {;;
    logErrorToProduction('Failed to send message:', { data: "error "});";";";""
    return {;";";";";""
      success: "false",;";";";";""
      error: "error instanceof Error ? error.message : String(error)",;""
    };";""
  };";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
