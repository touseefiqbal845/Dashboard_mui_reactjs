import React, { useState } from "react";

const Chat: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  const contacts = [
    { name: "Lucian Obrien", lastMessage: "You: The waves c..." },
    { name: "Deja Brady", lastMessage: "You: The scent of blo..." },
    { name: "Harrison Stein", lastMessage: "Sent a photo" },
    { name: "Reece Chung", lastMessage: "She gazed at the..." },
    { name: "Lainey Davidson", lastMessage: "The concert was..." },
    { name: "Cristopher Cardenas", lastMessage: "The waves crashed ag..." },
    { name: "Melanie Noble", lastMessage: "The scent of blooming..." },
  ];

  return (
 
    <div className="flex justify-end">
      <div className="bg-red-200 p-3 rounded-lg max-w-xs">
        The scent of blooming flowers wafted through the garden.
      </div>
    </div>

  
  );
};

export default Chat;
