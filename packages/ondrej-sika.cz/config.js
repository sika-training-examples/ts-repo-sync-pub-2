const site = {
  gauges_site_id: "GAUGES-XXX-DEMO",
  google_analytics_site_id: "GOOGLE-ANALYTICS-XXX-DEMO",
  former2_url:
    process.env.NODE_ENV == "development"
      ? "https://former2-ond-local.xsika.cz"
      : "https://former2-idontlikedolphins.xsika.cz",
  origin:
    process.env.NODE_ENV == "development"
      ? "http://127.0.0.1:3010"
      : process.env.SITE_ORIGIN || "https://ondrej-sika.cz",
  name: "ondrej-sika.cz",
  lang: "cs",
  gauges_site_id: "5a892d8dba4ae31b28000034",
  google_analytics_site_id: "UA-39461955-14"
};

export default site;
