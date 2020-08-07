---
last_modified_on: "2020-04-19"
$schema: "/.meta/.schemas/guides.json"
title: Payments
description: Combine multi-line CSV rows into single events using Lua transform
tags: ["type: guide", "domain: payments"]
---


import SVG from 'react-inlinesvg';
import Alert from '@site/src/components/Alert';
import Steps from '@site/src/components/Steps';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Alert type="info">
In order to complete the below steps, you need to be logged in. Log in to your <a href={"https://shiftm.com/"}>account</a>.
</Alert>



## Tutorial


<Steps headingDepth={3}>
<ol>
<li>



### Add or Change your payout method


Once you are logged in, go to your <a href={"https://shiftm.com/user/payout"}>payouts preferences</a>.

If you have not added a payout method, click "Add payout method" otherwise, edit the payout method you want to change.

<SVG src="/img/payout-methods.svg" />

</li>
<li>

### Confirm your payment method address

Add the registered address of your payout method. This might be different from your actual address and is required by regulation.

<SVG src="/img/payment-country.svg" />

Once you have entered the address details, click Next.
</li>
<li>


### Choose your payout method

Shift'M allows for 2 payout methods. You can choose to get paid via your paypal account or directly into your bank account.

PayPal is a free payment service and you can sign up for a free paypal account <a href={"https://www.paypal.com/us/webapps/mpp/account-selection"}>here</a>.

<SVG src="/img/payment-choice.svg" />

</li>
<li>


### Choosing PayPal

Enter the email address associated with your paypal account and the currency you'd like to be paid in.

You may be redirected to login to your paypal account, to verify your identity.

<SVG src="/img/paypal.svg" />

</li>
<li>


### Choosing a bank account

Your bank account can be your personal bank account or a business bank account. Enter the required details relating to either personal or business bank account.

The routing number or swift code is an internationally recognised code specific to your bank. This code differs for every bank.

For more information regarding swift codes, or to locate the swift code for your bank, you can have a look <a href={"https://transferwise.com/gb/swift-codes/"}>here</a>.

Generally, you can just google your bank name and swift code or your bank name and routing number to find this information. You can also contact your bank directly to
get the number or code. 

<SVG src="/img/bank-account.svg" />

</li>
</ol>


</Steps>
