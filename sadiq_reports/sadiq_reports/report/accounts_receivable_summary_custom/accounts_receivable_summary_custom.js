

// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

frappe.query_reports["Accounts Receivable Summary Custom"] = {
	"filters": [
		{
			"fieldname":"company",
			"label": __("Company"),
			"fieldtype": "Link",
			"options": "Company",
			"default": frappe.defaults.get_user_default("Company"),
			"hidden": 1
		},
		{
			"fieldname":"report_date",
			"label": __("Posting Date"),
			"fieldtype": "Date",
			"default": frappe.datetime.get_today(),
			"hidden": 0
		},
		{
			"fieldname":"ageing_based_on",
			"label": __("Ageing Based On"),
			"fieldtype": "Select",
			"options": 'Posting Date\nDue Date',
			"default": "Due Date",
			"hidden": 1
		},
		{
			"fieldname":"range1",
			"label": __("Ageing Range 1"),
			"fieldtype": "Int",
			"default": "30",
			"reqd": 1,
			"hidden": 1
		},
		{
			"fieldname":"range2",
			"label": __("Ageing Range 2"),
			"fieldtype": "Int",
			"default": "60",
			"reqd": 1,
			"hidden": 1
		},
		{
			"fieldname":"range3",
			"label": __("Ageing Range 3"),
			"fieldtype": "Int",
			"default": "90",
			"reqd": 1,
			"hidden": 1
		},
		{
			"fieldname":"range4",
			"label": __("Ageing Range 4"),
			"fieldtype": "Int",
			"default": "120",
			"reqd": 1,
			"hidden": 1
		},
		{
			"fieldname":"finance_book",
			"label": __("Finance Book"),
			"fieldtype": "Link",
			"options": "Finance Book",
			"hidden": 1
		},
		{
			"fieldname":"cost_center",
			"label": __("Cost Center"),
			"fieldtype": "Link",
			"options": "Cost Center",
			"hidden": 1,
			get_query: () => {
				var company = frappe.query_report.get_filter_value('company');
				return {
					filters: {
						'company': company
					}
				}
			}
		},
		{
			"fieldname":"customer",
			"label": __("Customer"),
			"fieldtype": "Link",
			"options": "Customer",
			"hidden": 1
		},
		{
			"fieldname":"customer_group",
			"label": __("Customer Group"),
			"fieldtype": "Link",
			"options": "Customer Group",
			"hidden": 0
		},
		{
			"fieldname":"payment_terms_template",
			"label": __("Payment Terms Template"),
			"fieldtype": "Link",
			"options": "Payment Terms Template",
			"hidden": 1
		},
		{
			"fieldname":"territory",
			"label": __("Territory"),
			"fieldtype": "Link",
			"options": "Territory",
			"hidden": 1
		},
		{
			"fieldname":"sales_partner",
			"label": __("Sales Partner"),
			"fieldtype": "Link",
			"options": "Sales Partner",
			"hidden": 1
		},
		{
			"fieldname":"sales_person",
			"label": __("Sales Person"),
			"fieldtype": "Link",
			"options": "Sales Person",
			"hidden": 1
		},
		{
			"fieldname":"based_on_payment_terms",
			"label": __("Based On Payment Terms"),
			"fieldtype": "Check",
			"hidden": 1
		},
		{
			"fieldname":"show_future_payments",
			"label": __("Show Future Payments"),
			"fieldtype": "Check",
			"hidden": 1
		},
		{
			"fieldname":"show_gl_balance",
			"label": __("Show GL Balance"),
			"fieldtype": "Check",
			"hidden": 1
		},
	],

	onload: function(report) {
		report.page.add_inner_button(__("Accounts Receivable"), function() {
			var filters = report.get_values();
			frappe.set_route('query-report', 'Accounts Receivable', { company: filters.company });
		});
	}
}

erpnext.utils.add_dimensions('Accounts Receivable Summary', 9);
