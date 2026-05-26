import Script from "next/script";

export default function GoogleAnalytics({ gaId }) {
  if (!gaId) return <div id="ga-debug" style={{display:"block",background:"red",color:"white",padding:"10px",textAlign:"center"}}>GA DISABLED (no gaId)</div>;

  return (
    <>
      <div id="ga-debug" style={{display:"block",background:"green",color:"white",padding:"10px",textAlign:"center"}}>GA ACTIVE: {gaId}</div>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { page_path: window.location.pathname });
        `}
      </Script>
    </>
  );
}
