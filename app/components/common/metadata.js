// Import cheerio library
const cheerio = require('cheerio');

// Function to strip HTML tags using cheerio
function stripHtml(html) {
  // Load the HTML string into a cheerio instance
  const $ = cheerio.load(html);
  // Get the text content of the HTML without tags
  return $('body').text();
}

// Function to shorten the metaDescription to 155 characters
function shortenMetaDescription(description) {
  const maxLength = 155;
  if (description.length > maxLength) {
    return description.slice(0, maxLength).trim() + '...';
  }
  return description;
}

const fallbackDescription = shortenMetaDescription("");

const metadata = async (endpoint, slugParam, params, canonicalData) => {
  console.log(canonicalData);
  const res = await fetch(endpoint, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  const slug = params.slug || slugParam;
  const matchingData = data.find((item) => item.slug === slug);

  if (matchingData) {
    const { name, description, text, title: fetchedTitle } = matchingData;
    const pageTitle = name || fetchedTitle || 'Item Not Found';
    
    // Convert HTML description to plain text using cheerio
    let metaDescription = description ? stripHtml(description) : text ? stripHtml(text) : fallbackDescription;
    // Shorten metaDescription to 155 characters
    metaDescription = shortenMetaDescription(metaDescription);
    
    // Check for the presence of either 'img' or 'image' property
    let imageUrl = matchingData.img || matchingData.image || 'https://woolie.s3.amazonaws.com/ad.png';
    const canonicalUrl = `https://www.fsafresh.com/${canonicalData}/${slug}`;
    
    return {
      title: pageTitle,
      openGraph: {
        title: pageTitle,
        description: metaDescription,
        images: [imageUrl],
        url: canonicalUrl
      },
      alternates: {
        canonical: canonicalUrl,
      }, 
    };
  } else {
    return {
      title: 'Item Not Found',
      openGraph: {
        title: 'Item Not Found',
        description: 'No item found',
        images: ['/fallback-image.jpg'],
        url:'not found'
      },
      alternates: {
        canonical: 'not found',
      }, 
    };
  }
};

export default metadata;