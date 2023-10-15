export const GenerateTinyURL = async (url) => {
    try {
      const response = await fetch(`https://tinyurl.com/api-create.php?url=${url}`, {
        method: 'GET',
      });
  
      if (response.ok) {
        const tinyurl = await response.text();
        return tinyurl;
      } else {
        throw new Error(`HTTP Error: ${response.status}`);
      }
    } catch (error) {
      throw new Error(`API Error: ${error.message}`);
    }
  };
  