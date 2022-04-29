# Basis Technologies "Take Home" Code Challenge API

## Usage

Dependencies
* Node v0.10.0 or higher

```
// Install dependencies
npm install

// Start the Express server
npm start
```

If the server is running, you should see the following in your command line:

```
> take-home-api@0.0.1 start /some/path/take-home-api
> node ./bin/www
```

In your browser, go to http://localhost:3000/placements. If everything is working correctly, you should see an API response that includes a `results` array of 4 objects.

Inside the `results` array will be 4 objects, each with its own `delivery` array of objects. Each of the objects in this `delivery` array has a `date` property. To filter the data returned by the API to limit this `delivery` data to a certain date range, you may use query params of `startDate` and `endDate`. You may test these query params in a Terminal window using:

```
curl http://localhost:3000/placements\?startDate\="11/22/2020"
```

<br>

---

<br>

## Exercise

### Overview

Basis Technologies’ core business is the planning and management of display advertisements on the web. This repository uses examples of data from our day-to-day business as part of a simple API. The goal is to integrate the data from this API into a custom application of your own design. We will be evaluating your application based on clarity, simplicity, organization, and an approach that follows common software best practices.

### Vocabulary

**Ad placement (aka: ad):** The advertisement itself, in "place" on a website (or in an app, or on YouTube). An ad placement runs for a specific period of time, in a specific context. For example, the time period might be "labor day weekend" or "spring 2016". The context could be "the sports section of the Des Moines Register" or "during YouTube videos being displayed to people in Los Angeles between the ages of 21 and 35 who are interested in software development".

**Cost per mille (aka: CPM):** The price paid by the buyer of an ad *per 1,000 views* of the ad, or "impressions".

**Impressions:** one impression is one viewer seeing the ad in place.

<br>

---

<br>

## Requirements

1. **Build an application** that uses the `/placements` API data.
    * You may use any JavaScript framework you prefer.
2. **Build a data table** that calculates and displays the total number of impressions delivered and total cost of each placement. The data table must have columns for:
    * Placement Name (e.g.: "Sports")
    * Start Date (the earliest date found for that placement)
    * End Date (the latest date found for that placement)
    * Total Impressions
    * CPM
    * Total Cost (see expected output below)
3. **Build a totals row** to the bottom of your data table. This must include:
    * Earliest Start Date from all date ranges.
    * Latest End Date from all date ranges.
    * Total Impressions across all rows.
    * Total CPM across all rows.
    * Total Cost across all rows.
4. **Add a date filter widget** that can filter the data across all rows of the data table, according to the provided date range. It should contain the following elements:
    * Start date input: with a default value equal to the earliest state date from all rows.
    * End date input: with a default value equal to the latest end date from all rows.
    * Date inputs should trigger a calendar picker dropdown on focus/click.
    * An "Apply" button that updates the table data and totals row using the input values on click.
5. 
    - **INTERMEDIATE LEVEL AND ABOVE ONLY:** Add CSS styling so your UI matches the following Figma design file: https://www.figma.com/file/FMghZirymZ8DHoVcyAz0Yz/Code-Challenge-Design-Spec?node-id=1%3A3 (see Figma instructions below)
    - **JUNIOR LEVEL AND BELOW ONLY:** Add CSS to create an attractive UI that looks consistent on Chrome, Firefox, and Safari. You may write your own styles or use [Tailwind](https://tailwindcss.com/), [Bootstrap](https://getbootstrap.com/), or [Foundation](https://get.foundation/). 
6. **Add automated tests** that provide basic code coverage for your JavaScript components.
7. **Add a README** that identifies the following:
    * How to setup and install any dependencies.
    * How to run the application locally.
    * How to run the automated tests.
    * Why you picked the software you used.
    * Why you structured your code as you did.
    * What decisions you made regarding CSS styling.

### Expected Output

The expected default output for each row in your data table must match the following:

| Name | Start Date | End Date | Impressions | CPM | Total Cost |
| ---- | ---- | ---- | ---- | ---- | ---- |
| Sports | 11/01/2020 | 11/30/2020 | 1,083,576 | $5 | $5,418 |
| Business | 12/01/2020 | 12/31/2020 | 1,607,958 | $8 | $12,864 |
| Travel | 11/01/2020 | 11/30/2020 | 1,035,966 | $3 | $3,108 |
| Politics | 12/01/2020 | 12/31/2020 | 1,529,821 | $6 | $9,179 |

The expected default output for the totals row must include the earliest start date, latest end date, total impressions, total CPM, and total cost, for all rows. It should display the following data, when the app first loads (or when the date filter has its default values).

| | | | | | |
| --- | --- | --- | --- | --- | --- |
| Totals | 11/01/2020 | 12/31/2020 | 5,257,321 | $22 | $30,569 |


It is assumed that these numbers will change when the user adjusts the date filter widget.

<br>

---

<br>

## DO's and DON'Ts

### DO's

* **DO** use the provided `logo-basis.svg` file.
* **DO** use [Source Sans Pro font via Google Fonts](https://fonts.google.com/specimen/Source+Sans+Pro).
* **DO** ensure all date formatting uses the correct/consistent time zone.
* **DO** ensure your application looks and works consistently in the latest versions of Google Chrome and Mozilla Firefox.
* **DO** include code comments to explain functionality or styling where appropriate.
* **DO** feel free to use the standard browser `<input type="date">` calendar picker dropdown for date inputs. Or you may use a 3rd-party calendar or custom component. Users must also be able to manually type in the input.

### DON'Ts

* **INTERMEDIATE LEVEL AND ABOVE ONLY: DON'T** use any 3rd party CSS libraries (e.g.: Bootstrap, Tailwind, Foundation, etc). All CSS styles must be your own.
* **DON'T** use any 3rd party JavaScript component kits (e.g.: Material UI). All JavaScript components must be your own.
* **DON'T** include any `console.log`s, `debugger`s, etc in your code.
* **DON'T** make any changes to the CSV or bin/www files.

<br>

---

<br>

## Submission

Please email your completed work back to Basis as a [git bundle](https://git-scm.com/docs/git-bundle) file. We'd like to see your process as you work through the problem so commit as you go, providing informative commit messages.

<br>

---

<br>

## Additional Information

### Avoiding Bias

In order to avoid unconscious bias when evaluating code submissions, Basis Technologies anonymizes your work by removing names and email addresses from submitted git bundles. Please help us keep the submissions bias-free by leaving author information blank in any metadata files included in your submission, and avoid including any other potentially identifying information.

### Figma

At Basis Technologies, we use [Figma](https://www.figma.com/) to create, manage, and share all our UI designs. The [above linked design spec](https://www.figma.com/file/FMghZirymZ8DHoVcyAz0Yz/Code-Challenge-Design-Spec?node-id=1%3A3) is what we expect you to use to build the UI styles for your application. Make sure you are looking at the page named "FOR DEV" in the Figma file. You will be graded based on your accuracy to this design. If you haven't used Figma before, [here's a helpful usage guide from Smashing Magazine](https://www.smashingmagazine.com/2020/09/figma-developers-guide/). If you are having any problems with the design spec, please reach out to someone from our team.
