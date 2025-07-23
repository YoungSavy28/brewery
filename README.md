# Web Development Project 6 - Open Brewery Dashboard (Part 2)

Submitted by: **Xavier Cabrera**

This web app: **enhances the Brewery Dashboard by adding data visualizations and dynamic detail pages using React Router. Users can explore breweries, view data breakdowns in chart form, and click into each brewery for more information.**

Time spent: **6** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **Clicking on an item in the list view displays more details about it**
  - Clicking on an item in the dashboard list navigates to a detail view for that item
  - Detail view includes extra information about the item not included in the dashboard view
  - The same sidebar is displayed in detail view as in dashboard view
- [x] **Each detail view of an item has a direct, unique URL link to that item’s detail view page**
- [x] **The app includes at least two unique charts developed using the fetched data that tell an interesting story**
  - Pie chart for brewery types
  - Bar chart showing top 10 states by brewery count

## Optional Features

The following **optional** features are implemented:

- [ ] The site’s customized dashboard contains more content that explains what is interesting about the data 
- [ ] The site allows users to toggle between different data visualizations

## Additional Features

The following **additional** features are implemented:

- [x] Brewery website links are clickable
- [x] Charts integrated using Chart.js and react-chartjs-2
- [x] Clean layout and responsive design

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://i.imgur.com/qeP3Mbd.gif' title='Video Walkthrough' width='100%' alt='Video Walkthrough' />

GIF created with **ScreenToGif**

## Notes

Describe any challenges encountered while building the app.

- Implementing dynamic routing required careful integration of `useParams`
- Pie and bar chart setup with Chart.js took some trial-and-error to get accurate datasets
- Some brewery fields (like address or phone) are missing from the API and had to be conditionally rendered

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
