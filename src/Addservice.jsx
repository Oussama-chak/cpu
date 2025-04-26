import './App.css';

const AddService = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-4xl flex flex-col">
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          {/* Left Column - Image Section */}
          <div className="md:w-2/5 p-6 flex flex-col text-white" style={{ backgroundColor: "#091837" }}>
            <h2 className="text-2xl font-bold mb-4">Add a Service</h2>
            
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="w-full aspect-square rounded-xl flex items-center justify-center border-2 border-dashed border-white" style={{ backgroundColor: "rgba(27, 107, 156, 0.3)" }}>
                <div className="text-center p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4">
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                    <circle cx="12" cy="13" r="3"></circle>
                  </svg>
                  <p className="font-medium">Your service image will appear here</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 text-sm opacity-75">
              <p>This image will be displayed as your service logo</p>
            </div>
          </div>
          
          {/* Right Column - Form Section */}
          <div className="md:w-3/5 p-6 bg-white">
            <form className="h-full flex flex-col">
              <div className="space-y-4 flex-1">
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: "#091837" }}>Service Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-all" 
                    placeholder="Enter a descriptive name"
                    style={{ focusWithin: { "--tw-ring-color": "#1B6B9C" } }}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: "#091837" }}>Service Description</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-all resize-none" 
                    placeholder="Describe what this service offers..."
                    style={{ focusWithin: { "--tw-ring-color": "#1B6B9C" } }}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: "#091837" }}>Upload Logo</label>
                  <div className="mt-1 flex items-center">
                    <label className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2" style={{ color: "#1B6B9C" }}>
                        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                        <circle cx="12" cy="13" r="3"></circle>
                      </svg>
                      <span>Select an image</span>
                      <input 
                        type="file" 
                        className="sr-only" 
                        accept="image/*"
                      />
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: "#091837" }}>Category</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:border-transparent transition-all">
                    <option value="">Select a category</option>
                    <option value="design">Design</option>
                    <option value="development">Development</option>
                    <option value="marketing">Marketing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="flex pt-4 mt-4 border-t border-gray-200">
                <button 
                  type="button" 
                  className="mr-4 px-6 py-2 border rounded-lg hover:bg-gray-50 transition-all"
                  style={{ borderColor: "#091837", color: "#091837" }}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="flex-1 px-6 py-2 text-white rounded-lg hover:opacity-90 transition-all"
                  style={{ backgroundColor: "#1B6B9C" }}
                >
                  Create Service
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Back Button - Now positioned at the bottom left */}
        <div className="w-full mt-4">
          <button className="flex items-center hover:opacity-80 transition-all" style={{ color: "#1B6B9C" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span>Back to Services</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddService;
