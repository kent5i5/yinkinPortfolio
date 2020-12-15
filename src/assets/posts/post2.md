## Data Warehouse notes

1)a data warehouse is a copy of transaction data specifically structured for query and analysis.

2)A data warehouse is a subject-oriented, integrated, nonvolatile, and time-variant collection of data in support of management's decisions.

3) A data warehouse is a system that retrieves and consolidates data periodically from the source systems into a dimensional or normalized data store. It usually keeps years of history and is queried for business intelligence or other analytical activities. It is typically updated in batches, not every time a transaction happens in the source system.

#### Tech perspective:

We extract data from the source system used for operations. Transform the data 
and load it into a dimensional model. 

Dimensional model is designed to make it easy for business users to work with 

the data and improve analytical queries performances. 


(Turn 3NF relational database into star schema which has one fact talbe and serveral dimension tables)

#### Fact or Dimension Dilemma

##### Fact columns: fact is usually numeric and additive:
 
	- a comment on an article represent an event ( not a good fact)
	- invoice number numeric but adding it doesn't make sense
	- Total amount of an invoice could be added to compute total sales (a good 	fact)

##### Dimensions: 

	- Date & time are always a dimension
	- Physical locations and their attributes are good candidates dimensions
	- Human roles lik customers and staff always good 
	- Good's sold is good.