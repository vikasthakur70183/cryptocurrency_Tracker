# Cryptocurrency Tracking Application

This project is a cryptocurrency tracking application built with React and Vite. It features real-time data fetching from the CoinMarketCap API, a homepage displaying various cryptocurrencies, and a CryptoConverter page for converting between different cryptocurrencies.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [Future Improvements](#future-improvements)
- [Assumptions](#assumptions)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- **Homepage**: 
  - Displays a list of cryptocurrencies with their logos.
  - Shows the current traded value per coin.
  - Indicates the net rise/fall in prices over the last 24 hours and 7 days with appropriate coloring.
- **CryptoConverter Page**:
  - Allows users to convert from one cryptocurrency to another.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (version 14 or higher)
- npm (version 6 or higher)
- An account on [CoinMarketCap](https://coinmarketcap.com/) to generate a free API key.

## Installation

To get the project running locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone [repository-link]
   cd [repository-name]
2. **Install dependencies:**

   npm install
   
4. **Set up the API key:**
   Create a .env file in the root of the project.

   Add your CoinMarketCap API key to the .env file:

   VITE_COINMARKETCAP_API_KEY=your_api_key_here

5. S**tart the development server:**

    npm run dev
