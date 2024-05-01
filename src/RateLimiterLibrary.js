class RateLimiter {
  constructor(limit, windowMs) {
    this.limit = limit; // Maximum number of requests
    this.windowMs = windowMs; // Time window in milliseconds
    this.requestTimestamps = [];
    this.startTimer(); // Start the reset timer
  }

  startTimer() {
    setInterval(() => {
      this.resetTimestamps(); // Reset timestamps at every window interval
    }, this.windowMs);
  }

  resetTimestamps() {
    console.log("Resetting timestamps");
    this.requestTimestamps = []; // Clear the timestamps
  }

  isRequestAllowed() {
    const now = Date.now();
    this.requestTimestamps = this.requestTimestamps.filter(
      (ts) => now - ts < this.windowMs
    );
    if (this.requestTimestamps.length < this.limit) {
      this.requestTimestamps.push(now);
      return true;
    }
    return false;
  }
}

// Configuration for API endpoints
const apiRateLimitConfig = {
  "/api/data": new RateLimiter(100, 60000), // 100 requests per minute
};

// Function to intercept API requests
async function apiInterceptor(apiEndpoint, requestOptions) {
  const limiter = apiRateLimitConfig[apiEndpoint];
  if (limiter && !limiter.isRequestAllowed()) {
    alert("Rate limit exceeded. Please try again later.");
    return null; // Block the request
  }
  try {
    const response = await fetch(apiEndpoint, requestOptions);
    return response.json();
  } catch (error) {
    console.error("API request failed", error);
  }
}

// Usage example
async function fetchData() {
  return await apiInterceptor("/api/data", { method: "GET" });
}
