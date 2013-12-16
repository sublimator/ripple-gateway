## Ripple Gateway Appliance Software

The Ripple Gateway appliance is a virtual machine image that
is meant to serve as a standalone package for configuring
and running a Ripple gateway system.

## Creating a User's Gateway Account

In order to interact with a gateway an end user must register
an account, which will include information about their identity.

We will assume the user has a `ripple address` already, and will
be required to to supply login credentials in the form of a `username`
and `password`. The password will be encrypted when stored in the
database along with it salt value.

	The user's record will also contain a reference to a `bank account` (bankAccountId), and a set of `Know Your Customer` (KYC) credentials (kycId).

## Running Database Migrations

The system uses Postgresql for its primary relational datastore, and its 
table schema is managed using the `db-migrate` node.js module: https://github.com/kunklejr/node-db-migrate.

To run the migrations configure database.json with the correct db credentials,
then run `db-migrate up --config ./database.json --env dev`. Db-migrate tracks the migrations that have run in a `migrations` table in the database. To roll back a database migration run `db-migrate down --config ./database.json --env dev`. This migration feature will allow us to alter database tables in the future by pushing changes in git.
