const getUsageDetails = async (userId) => {
    // Implement the logic to fetch usage details from your database or other sources
    return [
      { id: 1, metric: 'API Calls', value: 1500 },
      { id: 2, metric: 'Storage Used', value: '1.2GB' }
    ];
  };
  
  module.exports = { getUsageDetails };
  