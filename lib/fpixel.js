export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

export const pageview = () => {
  window.fbq("track", "PageView");
};

export const event = (name, options = {}) => {
  const response = window.fbq("track", name, options);
  console.log("Facebook Pixel event response:", response);
  return response;
};
