// import { useState } from "react";
// import { motion } from "framer-motion";
// import { MessageSquare, ArrowLeft, Bell, AlertCircle, CheckCircle2 } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { MessageList } from "@/components/messages/MessageList";
// import { ChatWindow } from "@/components/messages/ChatWindow";
// import { SearchHeader } from "@/components/messages/SearchHeader";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Badge } from "@/components/ui/badge";

// interface Message {
//   id: number;
//   sender: string;
//   content: string;
//   timestamp: string;
//   read: boolean;
// }

// interface ChatMessage {
//   id: number;
//   sender: string;
//   content: string;
//   timestamp: string;
//   isUser: boolean;
// }

// interface Notification {
//   id: number;
//   title: string;
//   description: string;
//   status: "action_required" | "completed" | "info";
//   timestamp: string;
// }

// const Messages = () => {
//   const navigate = useNavigate();
//   const [selectedChat, setSelectedChat] = useState<number | null>(null);
//   const [newMessage, setNewMessage] = useState("");
//   const [activeTab, setActiveTab] = useState("messages");
  
//   const [messages] = useState<Message[]>([
//     {
//       id: 1,
//       sender: "Johan Andersson",
//       content: "Hej! Är bilen fortfarande tillgänglig?",
//       timestamp: "2024-03-20 14:30",
//       read: false,
//     },
//     {
//       id: 2,
//       sender: "Maria Nilsson",
//       content: "Tack för snabbt svar! Kan vi boka en visning?",
//       timestamp: "2024-03-19 16:45",
//       read: true,
//     },
//   ]);

//   const [chatMessages] = useState<ChatMessage[]>([
//     {
//       id: 1,
//       sender: "Johan Andersson",
//       content: "Hej! Är bilen fortfarande tillgänglig?",
//       timestamp: "14:30",
//       isUser: false,
//     },
//     {
//       id: 2,
//       sender: "Du",
//       content: "Hej Johan! Ja, bilen är fortfarande tillgänglig. När skulle du vilja titta på den?",
//       timestamp: "14:35",
//       isUser: true,
//     },
//     {
//       id: 3,
//       sender: "Johan Andersson",
//       content: "Skulle det vara möjligt att komma förbi imorgon eftermiddag?",
//       timestamp: "14:40",
//       isUser: false,
//     },
//   ]);

//   const [notifications] = useState<Notification[]>([
//     {
//       id: 1,
//       title: "Ny budgivning på din bil",
//       description: "Ett nytt bud har lagts på din Volvo XC60. Granska och svara inom 24 timmar.",
//       status: "action_required",
//       timestamp: "2024-03-20 15:30"
//     },
//     {
//       id: 2,
//       title: "Besiktning genomförd",
//       description: "Din bil har genomgått besiktningen och är nu redo för försäljning.",
//       status: "completed",
//       timestamp: "2024-03-19 11:20"
//     },
//     {
//       id: 3,
//       title: "Påminnelse: Bildokumentation",
//       description: "Vänligen ladda upp bilder på bilen innan auktionen kan starta.",
//       status: "action_required",
//       timestamp: "2024-03-18 09:15"
//     },
//     {
//       id: 4,
//       title: "Systemuppdatering",
//       description: "Plattformen har uppdaterats med nya funktioner.",
//       status: "info",
//       timestamp: "2024-03-17 16:45"
//     }
//   ]);

//   const handleSendMessage = () => {
//     if (!newMessage.trim()) return;
//     console.log("Sending message:", newMessage);
//     setNewMessage("");
//   };

//   const getStatusColor = (status: Notification["status"]) => {
//     switch (status) {
//       case "action_required":
//         return "bg-red-500/10 text-red-500 hover:bg-red-500/20";
//       case "completed":
//         return "bg-green-500/10 text-green-500 hover:bg-green-500/20";
//       default:
//         return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20";
//     }
//   };

//   const getStatusText = (status: Notification["status"]) => {
//     switch (status) {
//       case "action_required":
//         return "Åtgärd krävs";
//       case "completed":
//         return "Slutfört";
//       default:
//         return "Information";
//     }
//   };

//   return (
//     <div className="min-h-[calc(100vh-4rem)] p-4 relative animate-fade-in">
//       <div className="fixed inset-0 pointer-events-none" 
//         style={{
//           background: `
//             radial-gradient(circle at 75% 25%, rgba(0, 122, 255, 0.15) 0%, transparent 35%),
//             radial-gradient(circle at 25% 75%, rgba(0, 122, 255, 0.12) 0%, transparent 35%),
//             radial-gradient(circle at 50% 50%, rgba(0, 122, 255, 0.1) 0%, transparent 40%),
//             radial-gradient(circle at 15% 25%, rgba(0, 122, 255, 0.08) 0%, transparent 30%),
//             radial-gradient(circle at 85% 85%, rgba(0, 122, 255, 0.12) 0%, transparent 35%)
//           `
//         }}
//       />
//       <div className="max-w-[1400px] mx-auto relative z-10">
//         <div className="flex justify-center mb-6">
//           <Tabs defaultValue="messages" className="w-full max-w-[400px]" onValueChange={value => setActiveTab(value)}>
//             <TabsList className="grid w-full grid-cols-2 bg-black/20">
//               <TabsTrigger value="messages" className="flex items-center gap-2">
//                 <MessageSquare className="h-4 w-4" />
//                 Meddelanden
//               </TabsTrigger>
//               <TabsTrigger value="notifications" className="flex items-center gap-2">
//                 <Bell className="h-4 w-4" />
//                 Notiser
//               </TabsTrigger>
//             </TabsList>
//           </Tabs>
//         </div>

//         <div className="flex gap-6">
//           {/* Main Content Area */}
//           <div className="flex-1">
//             <div className="mb-4">
//               <Button 
//                 variant="ghost" 
//                 onClick={() => {
//                   if (selectedChat) {
//                     setSelectedChat(null);
//                   } else {
//                     navigate('/dashboard');
//                   }
//                 }}
//                 className="flex items-center gap-2 hover:bg-white/10 text-gray-300"
//               >
//                 <ArrowLeft className="h-4 w-4" />
//                 {selectedChat ? "Tillbaka till meddelanden" : "Tillbaka till dashboard"}
//               </Button>
//             </div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="h-full"
//             >
//               {activeTab === "messages" ? (
//                 !selectedChat ? (
//                   <Card className="mb-4 glass-card">
//                     <CardHeader className="bg-gradient-to-r from-transparent to-white/5">
//                       <CardTitle className="text-2xl font-bold flex items-center gap-2 text-gray-300">
//                         <MessageSquare className="h-6 w-6" />
//                         Meddelanden
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <p className="text-gray-400 mb-4">Välj en konversation för att börja chatta</p>
//                       <MessageList 
//                         messages={messages}
//                         selectedChat={selectedChat}
//                         onSelectChat={setSelectedChat}
//                       />
//                     </CardContent>
//                   </Card>
//                 ) : (
//                   <ChatWindow 
//                     selectedChat={selectedChat}
//                     messages={messages}
//                     chatMessages={chatMessages}
//                     newMessage={newMessage}
//                     onNewMessageChange={setNewMessage}
//                     onSendMessage={handleSendMessage}
//                   />
//                 )
//               ) : (
//                 <Card className="mb-4 glass-card">
//                   <CardHeader className="bg-gradient-to-r from-transparent to-white/5">
//                     <CardTitle className="text-2xl font-bold flex items-center gap-2 text-gray-300">
//                       <Bell className="h-6 w-6" />
//                       Notiser
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-4">
//                       {notifications.map((notification) => (
//                         <div
//                           key={notification.id}
//                           className="p-4 rounded-lg glass-card hover:bg-white/5 transition-colors cursor-pointer"
//                         >
//                           <div className="flex items-start justify-between gap-4">
//                             <div className="flex-1">
//                               <h3 className="text-white font-medium mb-1">{notification.title}</h3>
//                               <p className="text-gray-400 text-sm">{notification.description}</p>
//                               <p className="text-gray-500 text-xs mt-2">{notification.timestamp}</p>
//                             </div>
//                             <div className="flex items-center gap-2">
//                               <Badge className={`${getStatusColor(notification.status)}`}>
//                                 {notification.status === "action_required" && <AlertCircle className="h-4 w-4 mr-1" />}
//                                 {notification.status === "completed" && <CheckCircle2 className="h-4 w-4 mr-1" />}
//                                 {getStatusText(notification.status)}
//                               </Badge>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//               )}
//             </motion.div>
//           </div>

//           {/* Messages Sidebar */}
//           {activeTab === "messages" && (
//             <div className="w-[380px] glass-card rounded-lg">
//               <div className="border-b border-white/10 p-4">
//                 <SearchHeader />
//               </div>
//               <div className="h-[calc(100vh-12rem)] overflow-y-auto">
//                 <MessageList 
//                   messages={messages}
//                   selectedChat={selectedChat}
//                   onSelectChat={setSelectedChat}
//                 />
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Messages;

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { MessageSquare, ArrowLeft, Bell, AlertCircle, CheckCircle2 } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { MessageList } from "@/components/messages/MessageList";
// import { ChatWindow } from "@/components/messages/ChatWindow";
// import { SearchHeader } from "@/components/messages/SearchHeader";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Badge } from "@/components/ui/badge";

// interface Message {
//   id: number;
//   sender: string;
//   content: string;
//   timestamp: string;
//   read: boolean;
// }

// interface ChatMessage {
//   id: number;
//   sender: string;
//   content: string;
//   timestamp: string;
//   isUser: boolean;
// }

// interface Notification {
//   id: number;
//   title: string;
//   description: string;
//   status: "action_required" | "completed" | "info";
//   timestamp: string;
// }

// const Messages = () => {
//   const navigate = useNavigate();
//   const [selectedChat, setSelectedChat] = useState<number | null>(null);
//   const [newMessage, setNewMessage] = useState("");
//   const [activeTab, setActiveTab] = useState("messages");
  
//   const [messages] = useState<Message[]>([
//     {
//       id: 1,
//       sender: "Johan Andersson",
//       content: "Hej! Är bilen fortfarande tillgänglig?",
//       timestamp: "2024-03-20 14:30",
//       read: false,
//     },
//     {
//       id: 2,
//       sender: "Maria Nilsson",
//       content: "Tack för snabbt svar! Kan vi boka en visning?",
//       timestamp: "2024-03-19 16:45",
//       read: true,
//     },
//   ]);

//   const [chatMessages] = useState<ChatMessage[]>([
//     {
//       id: 1,
//       sender: "Johan Andersson",
//       content: "Hej! Är bilen fortfarande tillgänglig?",
//       timestamp: "14:30",
//       isUser: false,
//     },
//     {
//       id: 2,
//       sender: "Du",
//       content: "Hej Johan! Ja, bilen är fortfarande tillgänglig. När skulle du vilja titta på den?",
//       timestamp: "14:35",
//       isUser: true,
//     },
//     {
//       id: 3,
//       sender: "Johan Andersson",
//       content: "Skulle det vara möjligt att komma förbi imorgon eftermiddag?",
//       timestamp: "14:40",
//       isUser: false,
//     },
//   ]);

//   const [notifications] = useState<Notification[]>([
//     {
//       id: 1,
//       title: "Ny budgivning på din bil",
//       description: "Ett nytt bud har lagts på din Volvo XC60. Granska och svara inom 24 timmar.",
//       status: "action_required",
//       timestamp: "2024-03-20 15:30"
//     },
//     {
//       id: 2,
//       title: "Besiktning genomförd",
//       description: "Din bil har genomgått besiktningen och är nu redo för försäljning.",
//       status: "completed",
//       timestamp: "2024-03-19 11:20"
//     },
//     {
//       id: 3,
//       title: "Påminnelse: Bildokumentation",
//       description: "Vänligen ladda upp bilder på bilen innan auktionen kan starta.",
//       status: "action_required",
//       timestamp: "2024-03-18 09:15"
//     },
//     {
//       id: 4,
//       title: "Systemuppdatering",
//       description: "Plattformen har uppdaterats med nya funktioner.",
//       status: "info",
//       timestamp: "2024-03-17 16:45"
//     }
//   ]);

//   const handleSendMessage = () => {
//     if (!newMessage.trim()) return;
//     console.log("Sending message:", newMessage);
//     setNewMessage("");
//   };

//   const getStatusColor = (status: Notification["status"]) => {
//     switch (status) {
//       case "action_required":
//         return "bg-red-500/10 text-red-500 hover:bg-red-500/20";
//       case "completed":
//         return "bg-green-500/10 text-green-500 hover:bg-green-500/20";
//       default:
//         return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20";
//     }
//   };

//   const getStatusText = (status: Notification["status"]) => {
//     switch (status) {
//       case "action_required":
//         return "Åtgärd krävs";
//       case "completed":
//         return "Slutfört";
//       default:
//         return "Information";
//     }
//   };

//   return (
//     <div className="min-h-[calc(100vh-4rem)] p-4 relative animate-fade-in">
//       <div className="fixed inset-0 pointer-events-none" 
//         style={{
//           background: `
//             radial-gradient(circle at 75% 25%, rgba(0, 122, 255, 0.15) 0%, transparent 35%),
//             radial-gradient(circle at 25% 75%, rgba(0, 122, 255, 0.12) 0%, transparent 35%),
//             radial-gradient(circle at 50% 50%, rgba(0, 122, 255, 0.1) 0%, transparent 40%),
//             radial-gradient(circle at 15% 25%, rgba(0, 122, 255, 0.08) 0%, transparent 30%),
//             radial-gradient(circle at 85% 85%, rgba(0, 122, 255, 0.12) 0%, transparent 35%)
//           `
//         }}
//       />
//       <div className="max-w-[1400px] mx-auto relative z-10">
//         <div className="flex justify-center mb-6">
//           <Tabs defaultValue="messages" className="w-full max-w-[400px]" onValueChange={value => setActiveTab(value)}>
//             <TabsList className="grid w-full grid-cols-2 bg-black/20">
//               <TabsTrigger value="messages" className="flex items-center gap-2">
//                 <MessageSquare className="h-4 w-4" />
//                 Meddelanden
//               </TabsTrigger>
//               <TabsTrigger value="notifications" className="flex items-center gap-2">
//                 <Bell className="h-4 w-4" />
//                 Notiser
//               </TabsTrigger>
//             </TabsList>
//           </Tabs>
//         </div>

//         <div className="flex flex-col sm:flex-row gap-6">
//           {/* Main Content Area */}
//           <div className="flex-1">
//             <div className="mb-4">
//               <Button 
//                 variant="ghost" 
//                 onClick={() => {
//                   if (selectedChat) {
//                     setSelectedChat(null);
//                   } else {
//                     navigate('/dashboard');
//                   }
//                 }}
//                 className="flex items-center gap-2 hover:bg-white/10 text-gray-300"
//               >
//                 <ArrowLeft className="h-4 w-4" />
//                 {selectedChat ? "Tillbaka till meddelanden" : "Tillbaka till dashboard"}
//               </Button>
//             </div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="h-full"
//             >
//               {activeTab === "messages" ? (
//                 !selectedChat ? (
//                   <Card className="mb-4 glass-card">
//                     <CardHeader className="bg-gradient-to-r from-transparent to-white/5">
//                       <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2 text-gray-300">
//                         <MessageSquare className="h-5 sm:h-6 w-5 sm:w-6" />
//                         Meddelanden
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <p className="text-gray-400 mb-4">Välj en konversation för att börja chatta</p>
//                       <div className="block sm:hidden">
//                         <MessageList 
//                           messages={messages}
//                           selectedChat={selectedChat}
//                           onSelectChat={setSelectedChat}
//                         />
//                       </div>
//                       <div className="hidden sm:block">
//                         {/* This will be shown in non-mobile views (when sidebar is visible) */}
//                         <p className="text-gray-400 italic">Välj en konversation från sidofältet</p>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ) : (
//                   <ChatWindow 
//                     selectedChat={selectedChat}
//                     messages={messages}
//                     chatMessages={chatMessages}
//                     newMessage={newMessage}
//                     onNewMessageChange={setNewMessage}
//                     onSendMessage={handleSendMessage}
//                   />
//                 )
//               ) : (
//                 <Card className="mb-4 glass-card">
//                   <CardHeader className="bg-gradient-to-r from-transparent to-white/5">
//                     <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2 text-gray-300">
//                       <Bell className="h-5 sm:h-6 w-5 sm:w-6" />
//                       Notiser
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-4">
//                       {notifications.map((notification) => (
//                         <div
//                           key={notification.id}
//                           className="p-4 rounded-lg glass-card hover:bg-white/5 transition-colors cursor-pointer"
//                         >
//                           <div className="flex items-start justify-between gap-4">
//                             <div className="flex-1">
//                               <h3 className="text-white font-medium mb-1">{notification.title}</h3>
//                               <p className="text-gray-400 text-sm">{notification.description}</p>
//                               <p className="text-gray-500 text-xs mt-2">{notification.timestamp}</p>
//                             </div>
//                             <div className="flex items-center gap-2">
//                               <Badge className={`${getStatusColor(notification.status)} text-xs sm:text-sm whitespace-nowrap flex items-center`}>
//                                 {notification.status === "action_required" && <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />}
//                                 {notification.status === "completed" && <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />}
//                                 {getStatusText(notification.status)}
//                               </Badge>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//               )}
//             </motion.div>
//           </div>

//           {/* Messages Sidebar - Hidden on mobile (<560px) */}
//           {activeTab === "messages" && (
//             <div className="hidden sm:block w-[380px] glass-card rounded-lg">
//               <div className="border-b border-white/10 p-4">
//                 <SearchHeader />
//               </div>
//               <div className="h-[calc(100vh-12rem)] overflow-y-auto">
//                 <MessageList 
//                   messages={messages}
//                   selectedChat={selectedChat}
//                   onSelectChat={setSelectedChat}
//                 />
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Messages;

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { MessageSquare, ArrowLeft, Bell, AlertCircle, CheckCircle2 } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { MessageList } from "@/components/messages/MessageList";
// import { ChatWindow } from "@/components/messages/ChatWindow";
// import { SearchHeader } from "@/components/messages/SearchHeader";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Badge } from "@/components/ui/badge";

// interface Message {
//   id: number;
//   sender: string;
//   content: string;
//   timestamp: string;
//   read: boolean;
// }

// interface ChatMessage {
//   id: number;
//   sender: string;
//   content: string;
//   timestamp: string;
//   isUser: boolean;
// }

// interface Notification {
//   id: number;
//   title: string;
//   description: string;
//   status: "action_required" | "completed" | "info";
//   timestamp: string;
// }

// const Messages = () => {
//   const navigate = useNavigate();
//   const [selectedChat, setSelectedChat] = useState<number | null>(null);
//   const [newMessage, setNewMessage] = useState("");
//   const [activeTab, setActiveTab] = useState("messages");
  
//   const [messages] = useState<Message[]>([
//     {
//       id: 1,
//       sender: "Johan Andersson",
//       content: "Hej! Är bilen fortfarande tillgänglig?",
//       timestamp: "2024-03-20 14:30",
//       read: false,
//     },
//     {
//       id: 2,
//       sender: "Maria Nilsson",
//       content: "Tack för snabbt svar! Kan vi boka en visning?",
//       timestamp: "2024-03-19 16:45",
//       read: true,
//     },
//   ]);

//   const [chatMessages] = useState<ChatMessage[]>([
//     {
//       id: 1,
//       sender: "Johan Andersson",
//       content: "Hej! Är bilen fortfarande tillgänglig?",
//       timestamp: "14:30",
//       isUser: false,
//     },
//     {
//       id: 2,
//       sender: "Du",
//       content: "Hej Johan! Ja, bilen är fortfarande tillgänglig. När skulle du vilja titta på den?",
//       timestamp: "14:35",
//       isUser: true,
//     },
//     {
//       id: 3,
//       sender: "Johan Andersson",
//       content: "Skulle det vara möjligt att komma förbi imorgon eftermiddag?",
//       timestamp: "14:40",
//       isUser: false,
//     },
//   ]);

//   const [notifications] = useState<Notification[]>([
//     {
//       id: 1,
//       title: "Ny budgivning på din bil",
//       description: "Ett nytt bud har lagts på din Volvo XC60. Granska och svara inom 24 timmar.",
//       status: "action_required",
//       timestamp: "2024-03-20 15:30"
//     },
//     {
//       id: 2,
//       title: "Besiktning genomförd",
//       description: "Din bil har genomgått besiktningen och är nu redo för försäljning.",
//       status: "completed",
//       timestamp: "2024-03-19 11:20"
//     },
//     {
//       id: 3,
//       title: "Påminnelse: Bildokumentation",
//       description: "Vänligen ladda upp bilder på bilen innan auktionen kan starta.",
//       status: "action_required",
//       timestamp: "2024-03-18 09:15"
//     },
//     {
//       id: 4,
//       title: "Systemuppdatering",
//       description: "Plattformen har uppdaterats med nya funktioner.",
//       status: "info",
//       timestamp: "2024-03-17 16:45"
//     }
//   ]);

//   const handleSendMessage = () => {
//     if (!newMessage.trim()) return;
//     console.log("Sending message:", newMessage);
//     setNewMessage("");
//   };

//   const getStatusColor = (status: Notification["status"]) => {
//     switch (status) {
//       case "action_required":
//         return "bg-red-500/10 text-red-500 hover:bg-red-500/20";
//       case "completed":
//         return "bg-green-500/10 text-green-500 hover:bg-green-500/20";
//       default:
//         return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20";
//     }
//   };

//   const getStatusText = (status: Notification["status"]) => {
//     switch (status) {
//       case "action_required":
//         return "Åtgärd krävs";
//       case "completed":
//         return "Slutfört";
//       default:
//         return "Information";
//     }
//   };

//   return (
//     <div className="min-h-[calc(100vh-4rem)] p-4 relative animate-fade-in">
//       <div className="fixed inset-0 pointer-events-none" 
//         style={{
//           background: `
//             radial-gradient(circle at 75% 25%, rgba(0, 122, 255, 0.15) 0%, transparent 35%),
//             radial-gradient(circle at 25% 75%, rgba(0, 122, 255, 0.12) 0%, transparent 35%),
//             radial-gradient(circle at 50% 50%, rgba(0, 122, 255, 0.1) 0%, transparent 40%),
//             radial-gradient(circle at 15% 25%, rgba(0, 122, 255, 0.08) 0%, transparent 30%),
//             radial-gradient(circle at 85% 85%, rgba(0, 122, 255, 0.12) 0%, transparent 35%)
//           `
//         }}
//       />
//       <div className="max-w-[1400px] mx-auto relative z-10">
//         <div className="flex justify-center mb-6">
//           <Tabs defaultValue="messages" className="w-full max-w-[400px]" onValueChange={value => setActiveTab(value)}>
//             <TabsList className="grid w-full grid-cols-2 bg-black/20">
//               <TabsTrigger value="messages" className="flex items-center gap-2">
//                 <MessageSquare className="h-4 w-4" />
//                 Meddelanden
//               </TabsTrigger>
//               <TabsTrigger value="notifications" className="flex items-center gap-2">
//                 <Bell className="h-4 w-4" />
//                 Notiser
//               </TabsTrigger>
//             </TabsList>
//           </Tabs>
//         </div>

//         <div className="flex flex-col sm:flex-row gap-6">
//           {/* Main Content Area */}
//           <div className="flex-1">
//             <div className="mb-4">
//               <Button 
//                 variant="ghost" 
//                 onClick={() => {
//                   if (selectedChat) {
//                     setSelectedChat(null);
//                   } else {
//                     navigate('/dashboard');
//                   }
//                 }}
//                 className="flex items-center gap-2 hover:bg-white/10 text-gray-300"
//               >
//                 <ArrowLeft className="h-4 w-4" />
//                 {selectedChat ? "Tillbaka till meddelanden" : "Tillbaka till dashboard"}
//               </Button>
//             </div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="h-full"
//             >
//               {activeTab === "messages" ? (
//                 !selectedChat ? (
//                   <Card className="mb-4 glass-card">
//                     <CardHeader className="bg-gradient-to-r from-transparent to-white/5">
//                       <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2 text-gray-300">
//                         <MessageSquare className="h-5 sm:h-6 w-5 sm:w-6" />
//                         Meddelanden
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <p className="text-gray-400 mb-4">Välj en konversation för att börja chatta</p>
//                       <MessageList 
//                         messages={messages}
//                         selectedChat={selectedChat}
//                         onSelectChat={setSelectedChat}
//                       />
//                     </CardContent>
//                   </Card>
//                 ) : (
//                   <ChatWindow 
//                     selectedChat={selectedChat}
//                     messages={messages}
//                     chatMessages={chatMessages}
//                     newMessage={newMessage}
//                     onNewMessageChange={setNewMessage}
//                     onSendMessage={handleSendMessage}
//                   />
//                 )
//               ) : (
//                 <Card className="mb-4 glass-card">
//                   <CardHeader className="bg-gradient-to-r from-transparent to-white/5">
//                     <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2 text-gray-300">
//                       <Bell className="h-5 sm:h-6 w-5 sm:w-6" />
//                       Notiser
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-4">
//                       {notifications.map((notification) => (
//                         <div
//                           key={notification.id}
//                           className="p-4 rounded-lg glass-card hover:bg-white/5 transition-colors cursor-pointer"
//                         >
//                           <div className="flex items-start justify-between gap-4">
//                             <div className="flex-1">
//                               <h3 className="text-white font-medium mb-1">{notification.title}</h3>
//                               <p className="text-gray-400 text-sm">{notification.description}</p>
//                               <p className="text-gray-500 text-xs mt-2">{notification.timestamp}</p>
//                             </div>
//                             <div className="flex items-center gap-2">
//                               <Badge className={`${getStatusColor(notification.status)} text-xs sm:text-sm whitespace-nowrap flex items-center`}>
//                                 {notification.status === "action_required" && <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />}
//                                 {notification.status === "completed" && <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />}
//                                 {getStatusText(notification.status)}
//                               </Badge>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//               )}
//             </motion.div>
//           </div>

//           {/* Messages Sidebar - Hidden on mobile (<560px) */}
//           {activeTab === "messages" && (
//             <div className="hidden sm:block w-[380px] glass-card rounded-lg">
//               <div className="border-b border-white/10 p-4">
//                 <SearchHeader />
//               </div>
//               <div className="h-[calc(100vh-12rem)] overflow-y-auto">
//                 <MessageList 
//                   messages={messages}
//                   selectedChat={selectedChat}
//                   onSelectChat={setSelectedChat}
//                 />
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Messages;

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { MessageSquare, ArrowLeft, Bell, AlertCircle, CheckCircle2 } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { MessageList } from "@/components/messages/MessageList";
// import { ChatWindow } from "@/components/messages/ChatWindow";
// import { SearchHeader } from "@/components/messages/SearchHeader";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Badge } from "@/components/ui/badge";

// interface Message {
//   id: number;
//   sender: string;
//   content: string;
//   timestamp: string;
//   read: boolean;
// }

// interface ChatMessage {
//   id: number;
//   sender: string;
//   content: string;
//   timestamp: string;
//   isUser: boolean;
// }

// interface Notification {
//   id: number;
//   title: string;
//   description: string;
//   status: "action_required" | "completed" | "info";
//   timestamp: string;
// }

// const Messages = () => {
//   const navigate = useNavigate();
//   const [selectedChat, setSelectedChat] = useState<number | null>(null);
//   const [newMessage, setNewMessage] = useState("");
//   const [activeTab, setActiveTab] = useState("messages");
  
//   const [messages] = useState<Message[]>([
//     {
//       id: 1,
//       sender: "Johan Andersson",
//       content: "Hej! Är bilen fortfarande tillgänglig?",
//       timestamp: "2024-03-20 14:30",
//       read: false,
//     },
//     {
//       id: 2,
//       sender: "Maria Nilsson",
//       content: "Tack för snabbt svar! Kan vi boka en visning?",
//       timestamp: "2024-03-19 16:45",
//       read: true,
//     },
//   ]);

//   const [chatMessages] = useState<ChatMessage[]>([
//     {
//       id: 1,
//       sender: "Johan Andersson",
//       content: "Hej! Är bilen fortfarande tillgänglig?",
//       timestamp: "14:30",
//       isUser: false,
//     },
//     {
//       id: 2,
//       sender: "Du",
//       content: "Hej Johan! Ja, bilen är fortfarande tillgänglig. När skulle du vilja titta på den?",
//       timestamp: "14:35",
//       isUser: true,
//     },
//     {
//       id: 3,
//       sender: "Johan Andersson",
//       content: "Skulle det vara möjligt att komma förbi imorgon eftermiddag?",
//       timestamp: "14:40",
//       isUser: false,
//     },
//   ]);

//   const [notifications] = useState<Notification[]>([
//     {
//       id: 1,
//       title: "Ny budgivning på din bil",
//       description: "Ett nytt bud har lagts på din Volvo XC60. Granska och svara inom 24 timmar.",
//       status: "action_required",
//       timestamp: "2024-03-20 15:30"
//     },
//     {
//       id: 2,
//       title: "Besiktning genomförd",
//       description: "Din bil har genomgått besiktningen och är nu redo för försäljning.",
//       status: "completed",
//       timestamp: "2024-03-19 11:20"
//     },
//     {
//       id: 3,
//       title: "Påminnelse: Bildokumentation",
//       description: "Vänligen ladda upp bilder på bilen innan auktionen kan starta.",
//       status: "action_required",
//       timestamp: "2024-03-18 09:15"
//     },
//     {
//       id: 4,
//       title: "Systemuppdatering",
//       description: "Plattformen har uppdaterats med nya funktioner.",
//       status: "info",
//       timestamp: "2024-03-17 16:45"
//     }
//   ]);

//   const handleSendMessage = () => {
//     if (!newMessage.trim()) return;
//     console.log("Sending message:", newMessage);
//     setNewMessage("");
//   };

//   const getStatusColor = (status: Notification["status"]) => {
//     switch (status) {
//       case "action_required":
//         return "bg-red-500/10 text-red-500 hover:bg-red-500/20";
//       case "completed":
//         return "bg-green-500/10 text-green-500 hover:bg-green-500/20";
//       default:
//         return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20";
//     }
//   };

//   const getStatusText = (status: Notification["status"]) => {
//     switch (status) {
//       case "action_required":
//         return "Åtgärd krävs";
//       case "completed":
//         return "Slutfört";
//       default:
//         return "Information";
//     }
//   };

//   // For very small screens, show simplified status text
//   const getMobileStatusText = (status: Notification["status"]) => {
//     switch (status) {
//       case "action_required":
//         return "Åtgärd";
//       case "completed":
//         return "Slutfört";
//       default:
//         return "Info";
//     }
//   };

//   return (
//     <div className="min-h-[calc(100vh-4rem)] p-4 relative animate-fade-in">
//       <div className="fixed inset-0 pointer-events-none" 
//         style={{
//           background: `
//             radial-gradient(circle at 75% 25%, rgba(0, 122, 255, 0.15) 0%, transparent 35%),
//             radial-gradient(circle at 25% 75%, rgba(0, 122, 255, 0.12) 0%, transparent 35%),
//             radial-gradient(circle at 50% 50%, rgba(0, 122, 255, 0.1) 0%, transparent 40%),
//             radial-gradient(circle at 15% 25%, rgba(0, 122, 255, 0.08) 0%, transparent 30%),
//             radial-gradient(circle at 85% 85%, rgba(0, 122, 255, 0.12) 0%, transparent 35%)
//           `
//         }}
//       />
//       <div className="max-w-[1400px] mx-auto relative z-10">
//         <div className="flex justify-center mb-6">
//           <Tabs defaultValue="messages" className="w-full max-w-[400px]" onValueChange={value => setActiveTab(value)}>
//             <TabsList className="grid w-full grid-cols-2 bg-black/20">
//               <TabsTrigger value="messages" className="flex items-center gap-2">
//                 <MessageSquare className="h-4 w-4" />
//                 Meddelanden
//               </TabsTrigger>
//               <TabsTrigger value="notifications" className="flex items-center gap-2">
//                 <Bell className="h-4 w-4" />
//                 Notiser
//               </TabsTrigger>
//             </TabsList>
//           </Tabs>
//         </div>

//         <div className="flex flex-col sm:flex-row gap-6">
//           {/* Main Content Area */}
//           <div className="flex-1">
//             <div className="mb-4">
//               <Button 
//                 variant="ghost" 
//                 onClick={() => {
//                   if (selectedChat) {
//                     setSelectedChat(null);
//                   } else {
//                     navigate('/dashboard');
//                   }
//                 }}
//                 className="flex items-center gap-2 hover:bg-white/10 text-gray-300"
//               >
//                 <ArrowLeft className="h-4 w-4" />
//                 {selectedChat ? "Tillbaka till meddelanden" : "Tillbaka till dashboard"}
//               </Button>
//             </div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="h-full"
//             >
//               {activeTab === "messages" ? (
//                 !selectedChat ? (
//                   <Card className="mb-4 glass-card">
//                     <CardHeader className="bg-gradient-to-r from-transparent to-white/5">
//                       <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2 text-gray-300">
//                         <MessageSquare className="h-5 sm:h-6 w-5 sm:w-6" />
//                         Meddelanden
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <p className="text-gray-400 mb-4">Välj en konversation för att börja chatta</p>
//                       <MessageList 
//                         messages={messages}
//                         selectedChat={selectedChat}
//                         onSelectChat={setSelectedChat}
//                       />
//                     </CardContent>
//                   </Card>
//                 ) : (
//                   <ChatWindow 
//                     selectedChat={selectedChat}
//                     messages={messages}
//                     chatMessages={chatMessages}
//                     newMessage={newMessage}
//                     onNewMessageChange={setNewMessage}
//                     onSendMessage={handleSendMessage}
//                   />
//                 )
//               ) : (
//                 <Card className="mb-4 glass-card">
//                   <CardHeader className="bg-gradient-to-r from-transparent to-white/5">
//                     <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2 text-gray-300">
//                       <Bell className="h-5 sm:h-6 w-5 sm:w-6" />
//                       Notiser
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-4">
//                       {notifications.map((notification) => (
//                         <div
//                           key={notification.id}
//                           className="p-4 rounded-lg glass-card hover:bg-white/5 transition-colors cursor-pointer"
//                         >
//                           <div className="flex flex-col xs:flex-row items-start gap-2 xs:gap-4">
//                             <div className="flex-1 w-full xs:w-auto">
//                               <div className="flex items-start justify-between mb-1">
//                                 <h3 className="text-white font-medium">{notification.title}</h3>
//                                 <Badge className={`ml-2 ${getStatusColor(notification.status)} text-xs whitespace-nowrap flex items-center`}>
//                                   {notification.status === "action_required" && (
//                                     <AlertCircle className="inline-block h-3 w-3 mr-1" />
//                                   )}
//                                   {notification.status === "completed" && (
//                                     <CheckCircle2 className="inline-block h-3 w-3 mr-1" />
//                                   )}
//                                   <span className="hidden xxs:inline">{getStatusText(notification.status)}</span>
//                                   <span className="inline xxs:hidden">{getMobileStatusText(notification.status)}</span>
//                                 </Badge>
//                               </div>
//                               <p className="text-gray-400 text-sm">{notification.description}</p>
//                               <p className="text-gray-500 text-xs mt-2">{notification.timestamp}</p>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//               )}
//             </motion.div>
//           </div>

//           {/* Messages Sidebar - Hidden on mobile (<560px) */}
//           {activeTab === "messages" && (
//             <div className="hidden sm:block w-[380px] glass-card rounded-lg">
//               <div className="border-b border-white/10 p-4">
//                 <SearchHeader />
//               </div>
//               <div className="h-[calc(100vh-12rem)] overflow-y-auto">
//                 <MessageList 
//                   messages={messages}
//                   selectedChat={selectedChat}
//                   onSelectChat={setSelectedChat}
//                 />
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Messages;

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, ArrowLeft, Bell, AlertCircle, CheckCircle2, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageList } from "@/components/messages/MessageList";
import { ChatWindow } from "@/components/messages/ChatWindow";
import { SearchHeader } from "@/components/messages/SearchHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  read: boolean;
}

interface ChatMessage {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  isUser: boolean;
}

interface Notification {
  id: number;
  title: string;
  description: string;
  status: "action_required" | "completed" | "info";
  timestamp: string;
}

const Messages = () => {
  const navigate = useNavigate();
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [activeTab, setActiveTab] = useState("messages");
  
  const [messages] = useState<Message[]>([
    {
      id: 1,
      sender: "Johan Andersson",
      content: "Hej! Är bilen fortfarande tillgänglig?",
      timestamp: "2024-03-20 14:30",
      read: false,
    },
    {
      id: 2,
      sender: "Maria Nilsson",
      content: "Tack för snabbt svar! Kan vi boka en visning?",
      timestamp: "2024-03-19 16:45",
      read: true,
    },
  ]);

  const [chatMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: "Johan Andersson",
      content: "Hej! Är bilen fortfarande tillgänglig?",
      timestamp: "14:30",
      isUser: false,
    },
    {
      id: 2,
      sender: "Du",
      content: "Hej Johan! Ja, bilen är fortfarande tillgänglig. När skulle du vilja titta på den?",
      timestamp: "14:35",
      isUser: true,
    },
    {
      id: 3,
      sender: "Johan Andersson",
      content: "Skulle det vara möjligt att komma förbi imorgon eftermiddag?",
      timestamp: "14:40",
      isUser: false,
    },
  ]);

  const [notifications] = useState<Notification[]>([
    {
      id: 1,
      title: "Ny budgivning på din bil",
      description: "Ett nytt bud har lagts på din Volvo XC60. Granska och svara inom 24 timmar.",
      status: "action_required",
      timestamp: "2024-03-20 15:30"
    },
    {
      id: 2,
      title: "Besiktning genomförd",
      description: "Din bil har genomgått besiktningen och är nu redo för försäljning.",
      status: "completed",
      timestamp: "2024-03-19 11:20"
    },
    {
      id: 3,
      title: "Påminnelse: Bildokumentation",
      description: "Vänligen ladda upp bilder på bilen innan auktionen kan starta.",
      status: "action_required",
      timestamp: "2024-03-18 09:15"
    },
    {
      id: 4,
      title: "Systemuppdatering",
      description: "Plattformen har uppdaterats med nya funktioner.",
      status: "info",
      timestamp: "2024-03-17 16:45"
    }
  ]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    console.log("Sending message:", newMessage);
    setNewMessage("");
  };

  const getStatusColor = (status: Notification["status"]) => {
    switch (status) {
      case "action_required":
        return "bg-red-500/10 text-red-500 hover:bg-red-500/20";
      case "completed":
        return "bg-green-500/10 text-green-500 hover:bg-green-500/20";
      default:
        return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20";
    }
  };

  const getStatusIcon = (status: Notification["status"]) => {
    switch (status) {
      case "action_required":
        return <AlertCircle className="h-3 w-3" />;
      case "completed":
        return <CheckCircle2 className="h-3 w-3" />;
      default:
        return <Info className="h-3 w-3" />;
    }
  };

  const getStatusText = (status: Notification["status"]) => {
    switch (status) {
      case "action_required":
        return "Åtgärd krävs";
      case "completed":
        return "Slutfört";
      default:
        return "Information";
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] p-4 relative animate-fade-in">
      <div className="fixed inset-0 pointer-events-none" 
        style={{
          background: `
            radial-gradient(circle at 75% 25%, rgba(0, 122, 255, 0.15) 0%, transparent 35%),
            radial-gradient(circle at 25% 75%, rgba(0, 122, 255, 0.12) 0%, transparent 35%),
            radial-gradient(circle at 50% 50%, rgba(0, 122, 255, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 15% 25%, rgba(0, 122, 255, 0.08) 0%, transparent 30%),
            radial-gradient(circle at 85% 85%, rgba(0, 122, 255, 0.12) 0%, transparent 35%)
          `
        }}
      />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex justify-center mb-6">
          <Tabs defaultValue="messages" className="w-full max-w-[400px]" onValueChange={value => setActiveTab(value)}>
            <TabsList className="grid w-full grid-cols-2 bg-black/20">
              <TabsTrigger value="messages" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Meddelanden
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                Notiser
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          {/* Main Content Area */}
          <div className="flex-1">
            <div className="mb-4">
              <Button 
                variant="ghost" 
                onClick={() => {
                  if (selectedChat) {
                    setSelectedChat(null);
                  } else {
                    navigate('/dashboard');
                  }
                }}
                className="flex items-center gap-2 hover:bg-white/10 text-gray-300"
              >
                <ArrowLeft className="h-4 w-4" />
                {selectedChat ? "Tillbaka till meddelanden" : "Tillbaka till dashboard"}
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="h-full"
            >
              {activeTab === "messages" ? (
                !selectedChat ? (
                  <Card className="mb-4 glass-card">
                    <CardHeader className="bg-gradient-to-r from-transparent to-white/5">
                      <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2 text-gray-300">
                        <MessageSquare className="h-5 sm:h-6 w-5 sm:w-6" />
                        Meddelanden
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 mb-4">Välj en konversation för att börja chatta</p>
                      <MessageList 
                        messages={messages}
                        selectedChat={selectedChat}
                        onSelectChat={setSelectedChat}
                      />
                    </CardContent>
                  </Card>
                ) : (
                  <ChatWindow 
                    selectedChat={selectedChat}
                    messages={messages}
                    chatMessages={chatMessages}
                    newMessage={newMessage}
                    onNewMessageChange={setNewMessage}
                    onSendMessage={handleSendMessage}
                  />
                )
              ) : (
                <Card className="mb-4 glass-card">
                  <CardHeader className="bg-gradient-to-r from-transparent to-white/5">
                    <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2 text-gray-300">
                      <Bell className="h-5 sm:h-6 w-5 sm:w-6" />
                      Notiser
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className="p-3 sm:p-4 rounded-lg glass-card hover:bg-white/5 transition-colors cursor-pointer"
                        >
                          <div className="flex justify-between items-start gap-2">
                            <div className="w-[calc(100%-48px)]">
                              <div className="flex flex-wrap items-center gap-1 mb-1">
                                <h3 className="text-white text-sm sm:text-base font-medium truncate max-w-full">
                                  {notification.title}
                                </h3>
                              </div>
                              <p className="text-gray-400 text-xs sm:text-sm line-clamp-2">
                                {notification.description}
                              </p>
                              <p className="text-gray-500 text-xxs sm:text-xs mt-1">
                                {notification.timestamp}
                              </p>
                            </div>
                            <div className="flex-shrink-0">
                              <div 
                                className={`w-8 h-8 rounded-full flex items-center justify-center ${getStatusColor(notification.status)}`}
                                title={getStatusText(notification.status)}
                              >
                                {getStatusIcon(notification.status)}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          </div>

          {/* Messages Sidebar - Hidden on mobile (<560px) */}
          {activeTab === "messages" && (
            <div className="hidden sm:block w-[380px] glass-card rounded-lg">
              <div className="border-b border-white/10 p-4">
                <SearchHeader />
              </div>
              <div className="h-[calc(100vh-12rem)] overflow-y-auto">
                <MessageList 
                  messages={messages}
                  selectedChat={selectedChat}
                  onSelectChat={setSelectedChat}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;