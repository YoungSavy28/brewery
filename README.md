# Web Development Project 5 - Open Brewery Dashboard

Submitted by: **Xavier Cabrera**

This web app: **displays a searchable, filterable dashboard of breweries across the U.S. using the Open Brewery DB API. Users can explore the data, view key statistics, and find breweries by name and type.**

Time spent: **5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The site has a dashboard displaying a list of data fetched using an API call**
  - The dashboard displays at least 10 unique breweries, each with a name, type, and location
  - Each row includes at least two features: name and type (with optional website link)
- [x] **`useEffect` React hook and `async`/`await` are used**
- [x] **The app dashboard includes at least three summary statistics about the data** 
  - The app dashboard includes:
    - Total number of breweries
    - Number of microbreweries
    - Number of unique states with breweries
- [x] **A search bar allows the user to search for an item in the fetched data**
  - The search bar **correctly** filters breweries by name
  - The list of results dynamically updates as the user types into the search bar
- [x] **An additional filter allows the user to restrict displayed items by specified categories**
  - A dropdown filter allows users to select a brewery type (e.g. micro, regional, brewpub)
  - The filter works independently from the search bar
  - The brewery list updates in real time based on selected type

## Optional Features

The following **optional** features are implemented:

- [ ] Multiple filters can be applied simultaneously
- [ ] Filters use different input types
- [ ] The user can enter specific bounds for filter values

## Additional Features

The following **additional** features are implemented:

- [x] Brewery cards include a clickable website link if available
- [x] Clean responsive layout with modern UI
- [ ] Error-safe fetch using `try/catch` with fallback message (optional if added)

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://i.imgur.com/nN3EHKQ.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ScreenToGif  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS  
[ScreenToGif](https://www.screentogif.com/) for Windows  
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

- Initially got a Vite import error due to incorrect folder structure. Fixed by adjusting component import paths.
- Learned how to work with async API calls and real-time filtering in React.
- Some breweries were missing data like website URLs or city/state, so added conditional rendering to avoid crashes.

## License

    Copyright 2025 Xavier Cabrera

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
