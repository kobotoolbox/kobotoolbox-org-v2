---
title: Building Better Longitudinal Surveys with Dynamic Data Attachments
date: 10-12-2021
author: Kobo Inc.
summary:
    Learn how you can setup robust longitudinal surveys, retaining all of your
    initial data from the original survey while having the necessary data
    automatically gathered into future surveys.
thumbnail: blog/multiple_surveys.png
is_featured: true
---

Have you ever needed to collect data on repeated observations over a period of
time? Maybe this involved following up with past survey respondents? These are
types of longitudinal surveys and they are highly important for data collection.
There are many reasons why a researcher may need to set up a longer term survey,
requiring different data to be collected over a period of time.

We are proud to announce that KoboToolbox now allows you to link and
automatically include data collected across projects. By dynamically linking
survey projects, you can retain all of your initial data from the original
survey, or “parent project”, and then have the necessary data automatically
gathered into future surveys, or “child projects''.

{% include image.liquid file="blog/multiple_surveys.png" type="full" %}

### Why Are Dynamic Data Attachments Important?

Respecting survey respondents' time, as well as your own, is always a key
priority. You can **avoid survey fatigue** by having relevant data that has
already been collected automatically updated into future surveys, avoiding the
repetition of any questions. This could mean, for example, creating a
registration form of new project participants and then creating one or more
surveys that include a **unique identifier for each participant**, allowing you
to include relevant demographic data from the parent form instead of having to
ask the same questions again.

Another important use case is **phone surveys**. As COVID-19 has restricted more
face-to-face interviews, users have been conducting more interviews remotely
using KoboToolbox. Setting up a form to register phone survey participants as
well as a second form to then collect data from each participant was possible
before but now you can dynamically link two projects, meaning you can confirm
personal details from the initial intake form before starting the interview.
Likewise, using advanced XLSForm syntax, it is possible to automatically include
relevant demographic details in the follow up survey so that they can be
pre-filled during the survey, allowing updates as necessary.

Additionally, because two or more projects are linked dynamically, it is
possible to continually update information in the parent project and the same
details will be updated in the child project(s) minutes later. All survey
projects will be completely up-to-date and your original data will still be
maintained and unaffected by future surveys.

### Setting Up Dynamic Data Attachments with KoboToolbox

Dynamic data attachments have been set up with KoboToolbox to allow you a high
amount of flexibility. Key features include:

-   Being able to use the **same data across projects**. The data stored in the
    parent project is the data source.
-   You can **share all data variables** of a parent project(s) **or only
    relevant ones**, the choice is yours. This is helpful for making sure that
    sensitive data, such as personally identifiable information (PII), is not
    imported into any child projects.
-   **Linking projects that have different owners**. You can link parent and
    child projects that have the same owner but you can also link a parent
    project to child projects with different owners as long as the parent
    project is shared by the owners of the child projects.
-   You can **continue to collect data in the parent project**, which will not
    be affected by the dynamic linking to child projects. This is key for
    creating and managing longitudinal survey projects.

Dynamic data attachments have been enabled for Enketo web forms as well as the
KoboCollect Android app. It’s a straightforward process that starts with
enabling data sharing in the parent project.

When using XLSForms, the parent project form does not require edits, however,
the child project will need to have an xml-external question type (as seen in
the image below). It also requires using XLSForm syntax to specify what data
should be “pulled” from the parent form. Our
[support article](https://support.kobotoolbox.org/dynamic_data_attachment.html)
goes into detail on this modification.

{% include image.liquid file="blog/xml_external.png" type="full" %}

Once the projects are dynamically linked, any linked data will sync in the child
project(s) only five minutes after it’s updated in the parent project!

You are now ready to set up dynamically linked projects!

For a step-by-step guide, please see our support article on
[Dynamic Data Attachments](https://support.kobotoolbox.org/dynamic_data_attachment.html).
