const axios = require('axios');

const triggerZapierWorkflow = async (usageData) => {
  try {
    await axios.post(process.env.ZAPIER_WEBHOOK_URL, usageData);
    console.log('Zapier workflow triggered successfully');
  } catch (error) {
    console.error('Error triggering Zapier workflow', error.message);
  }
};

export default  triggerZapierWorkflow ;

