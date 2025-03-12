
export interface ContactInfo {
    title?: string;
    address?: string;
    phone?: string;
    email?: string;
  }
  
  export interface Contact {
    id: string;
    name: string;
    avatar: string;
    status: string;
    lastMessage?: string;
    time?: string;
    isOnline?: boolean;
    info?: ContactInfo;
    attachments?: any;
  }
  
  export interface Message {
    id: string;
    text: string;
    sender: string;
    timestamp: string;
    isOwn?: boolean;
  }