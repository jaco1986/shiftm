---
last_modified_on: "2020-05-14"
title: Calendar
description: Block dates and times
---

import Jump from '@site/src/components/Jump';

import SVG from 'react-inlinesvg';

#### How do I make dates available or blocked on my calendar?
To make dates available or blocked:

* Go to your Listing on shiftm.com
* Select the listing you want to block or set dates/times for
* Click Edit
* Go to Step 3
* Change the times you are available for each day of the week.
* Go to the Next section
* Click a date to select it, or click and drag your cursor to select multiple dates
* Select Available or Blocked
* Click Save changes

On your calendar, dates that are available to book are white/green. Unavailable dates are red.

##### Automatically blocked dates
The availability window you’ve set in your reservation preferences determines which dates are automatically blocked or available.

For example, if you let clients book 3 months ahead of time, then dates beyond those 3 months will be blocked, and dates within those 3 months will be available. The availability window moves forward every day, so as time passes new dates will automatically become available.

##### Pending and confirmed reservations
Dates for pending reservation requests will be blocked until you accept or decline it or after 24 hours when the request to book expires—whichever comes first.

Dates with confirmed reservations will be automatically blocked on your calendar. Because one reservation could start in the second half of a day after a previous reservation ends, start and end dates related to reservation requests and confirmed reservations are partially filled.

Try setting up notifications if you’d like to receive alerts as soon as you have a pending reservation request.

#### Inquiries and pre-approved bookings
Sometimes clients send an inquiry about booking for certain dates before they send a reservation request. Dates will stay open so that multiple clients can send inquiries until you have a pending reservation request.

If you decide to pre-approve an inquiry and Instant Book isn’t on, those dates will automatically be held and blocked on your calendar either until the client books or until the pre-approval expires after 24 hours—whichever comes first.

##### If you allow clients to book instantly
If you pre-approve an inquiry and allow clients to book instantly, you have the option to hold and block those dates either until the client books or until the pre-approval expires after 24 hours—whichever comes first. This gives you the ability to ensure the clients who sent you an inquiry has a chance to book. You can change your mind at any time after pre-approving.


<Jump to="/guides/advanced/calendar/">Guide: Calendar</Jump>



[docs.strategies#daemon]: /docs/setup/deployment/strategies/#daemon
[docs.strategies#sidecar]: /docs/setup/deployment/strategies/#sidecar
[urls.rust]: https://www.rust-lang.org/
[urls.vector_performance]: https://shiftm.com/#performance


[docs.installation]: /docs/setup/installation/
[docs.process-management#flags]: /docs/administration/process-management/#flags
[docs.process-management#starting]: /docs/administration/process-management/#starting
[docs.reference.env-vars]: /docs/reference/env-vars/
[docs.reference.templating]: /docs/reference/templating/
[docs.reference]: /docs/reference/
[urls.globbing]: https://en.wikipedia.org/wiki/Glob_(programming)
[urls.strptime_specifiers]: https://docs.rs/chrono/0.4.11/chrono/format/strftime/index.html#specifiers
[urls.toml]: https://github.com/toml-lang/toml
