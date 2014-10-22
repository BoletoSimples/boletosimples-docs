---
layout: en
title: Notifications - Boleto Simples API
pt: /notifications
---

## Notifications

### Bank Billets

The Boleto Simples send notifications for an external system after some event occurs in the billet.

These notifications are made by `HTTP POST` post request on the address configured on the billet or on the user's account by
`notification_url` field.

<div class="alert alert-info">The notifications made logs are saved in our database</div>

#### Parameters passed

<pre class="bash">{
   "id":1,
   "event":"status-changed",
   "status":"paid",
   "expire_at":'2014-10-31',
   "customer_person_name":'Boleto Simples Cobranças Ltda',
   "customer_cnpj_cpf":'05.813.794/0001-26',
   "amount":'55.78',
   "paid_amount":'55.78',
   "paid_at":'2014-10-30',
   "shortener_url":'http://bole.to/identificador',
   "meta": 'meu metadado'
}</pre>

Where:

*   `id` - Registrations identifier on Boleto Simples.
*   `event` - Event that has modified some information on billet. For now, the only possible value is `status-changed`. These field will be used on the next notifications implementations.
*   `status` - Billet status, whose possible values are: `generating`, `opened`, `paid`, `canceled`, `due`.
*   `expire_at` - Due date.
*   `customer_person_name` - Customer name.
*   `customer_cnpj_cpf` - CPF or CNPJ of customer.
*   `amount` - Billet amount.
*   `paid_amount` - Amount payed by customer.
*   `paid_at` - Payment date.
*   `shortener_url` - Billets public URL.
*   `meta` - Generic field -  accepts any format passed. Can be used to save data that are not within the Boleto Simples.

#### Return

The system expect to request returns status code `200 OK`. If the request returns error, that is, status code `5XX` the system will keep trying to perform the request. If the request blocks for failed authentication, that is, status code `4XX`, the system will ignore the request and will not try again.

#### Example

Considering that the value of `notification_url` passed on bank billet create was **http://yoursite.com.br/boletosimples**, the request made and the expected response are the same as defined below.

<small>Request:</small>

<pre class="bash">
curl -i \
-d '{"id":1,"event":"status-changed","status":"paid","expire_at":'2014-10-31',"customer_person_name":'Boleto Simples',"customer_cnpj_cpf":'05.813.794/0001-26',"amount":'55.78',"paid_amount":'55.78',"paid_at":'2014-10-30',"shortener_url":'http://bole.to/identificador',"meta":'meu metadado'}' \
-X POST http://setusite.com.br/boletosimples
</pre>

<small>Expected response:</small>

<pre class="json">
HTTP/1.1 200 OK
Status: 200 OK
...
</pre>
