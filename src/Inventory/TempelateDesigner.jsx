import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Settings, Plus } from "lucide-react";

function TempelateDesigner() {
  const [activeTab, setActiveTab] = useState("whatsapp");

  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");

  const [whatsappText, setWhatsappText] = useState(`Hi *{retailer_name}*,

We regret to inform you that your order *#{order_id}* is experiencing a delay.

Your new ETA is *{new_eta}*.

We apologize for the inconvenience.`);

  // ✅ Variable Insert
  const insertVariable = (variable) => {
    if (activeTab === "whatsapp") {
      setWhatsappText((prev) => prev + ` {${variable}}`);
    } else {
      setEmailBody((prev) => prev + ` {${variable}}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F5F4]">

      {/* MAIN GRID */}
      <div className="grid grid-cols-[340px_1fr_320px] min-h-screen">

        {/* LEFT PANEL */}
        <div className="bg-[#F7F8F7] border-r p-6 overflow-y-auto">

          <h2 className="text-2xl font-bold mb-6">Message Template</h2>

          {/* TABS */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={() => setActiveTab("whatsapp")}
              className={`px-4 py-2 rounded-lg ${
                activeTab === "whatsapp"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              WhatsApp
            </button>

            <button
              onClick={() => setActiveTab("email")}
              className={`px-4 py-2 rounded-lg ${
                activeTab === "email"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              Email
            </button>
          </div>

          {/* CATEGORY */}
          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-2">Category</p>
            <select className="w-full border rounded-lg p-3 bg-[#EEF1EE]">
              <option>Delivery Delay</option>
              <option>Order Confirmation</option>
              <option>Invoice</option>
            </select>
          </div>

          {/* CONTENT EDITOR */}
          <div className="mb-6">
            <div className="flex justify-between mb-2 items-center">
              <p className="text-sm text-gray-500">Content Editor</p>

              <button
                onClick={() => insertVariable("order_id")}
                className="text-green-600 text-sm flex items-center gap-1"
              >
                <Plus size={14} /> Variable
              </button>
            </div>

            {activeTab === "whatsapp" ? (
              <textarea
                value={whatsappText}
                onChange={(e) => setWhatsappText(e.target.value)}
                rows={10}
                className="w-full rounded-lg border p-3 bg-[#EEF1EE]"
              />
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Email Subject"
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  className="w-full mb-3 p-3 border rounded-lg"
                />

                <ReactQuill
                  theme="snow"
                  value={emailBody}
                  onChange={setEmailBody}
                />
              </>
            )}
          </div>

          {/* BUTTONS */}
          <div>
            <p className="text-sm text-gray-500 mb-3">Buttons</p>

            <div className="space-y-3">
              <div className="border border-dashed rounded-lg p-3 flex justify-between">
                <span>Track Order</span>
                <Settings size={16} />
              </div>

              <div className="border border-dashed rounded-lg p-3 flex justify-between">
                <span>Contact Support</span>
                <Settings size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* CENTER PREVIEW */}
        <div className="flex justify-center items-center bg-[#EEF1EE] p-6">

          <div className="w-[300px] h-[600px] rounded-3xl bg-black p-3 shadow-xl">
            <div className="bg-[#0D6E63] h-full rounded-2xl p-4 text-white">

              <h3 className="mb-4 font-semibold">Preview</h3>

              <div className="bg-white text-black p-3 rounded-lg text-sm">

                {activeTab === "whatsapp" ? (
                  <pre className="whitespace-pre-wrap">
                    {whatsappText}
                  </pre>
                ) : (
                  <>
                    <p className="font-bold mb-2">{emailSubject}</p>
                    <div
                      dangerouslySetInnerHTML={{ __html: emailBody }}
                    />
                  </>
                )}

              </div>

              <div className="mt-3 space-y-2">
                <button className="w-full bg-white text-black p-2 rounded">
                  Track Order
                </button>

                <button className="w-full bg-white text-black p-2 rounded">
                  Contact Support
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="bg-[#F7F8F7] border-l p-6">

          <h2 className="text-2xl font-bold mb-6">Settings</h2>

          <div className="mb-6">
            <p className="text-sm mb-2">Delay Threshold</p>

            <input
              type="number"
              defaultValue={30}
              className="w-full border p-3 rounded-lg"
            />
          </div>

          <button className="w-full bg-gray-200 p-3 rounded-lg">
            Send Test Message
          </button>
        </div>

      </div>
    </div>
  );
}

export default TempelateDesigner;