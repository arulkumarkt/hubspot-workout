export const contactProperties:
  | undefined
  | (
      | "address"
      | "annualrevenue"
      | "associatedcompanyid"
      | "associatedcompanylastupdated"
      | "city"
      | "closedate"
      | "company"
      | "company_size"
      | "country"
      | "createdate"
      | "currentlyinworkflow"
      | "date_of_birth"
      | "days_to_close"
      | "degree"
      | "email"
      | "engagements_last_meeting_booked"
      | "engagements_last_meeting_booked_campaign"
      | "engagements_last_meeting_booked_medium"
      | "engagements_last_meeting_booked_source"
      | "fax"
      | "field_of_study"
      | "first_conversion_date"
      | "first_conversion_event_name"
      | "first_deal_created_date"
      | "firstname"
      | "followercount"
      | "gender"
      | "graduation_date"
      | "hs_additional_emails"
      | "hs_all_accessible_team_ids"
      | "hs_all_assigned_business_unit_ids"
      | "hs_all_contact_vids"
      | "hs_all_owner_ids"
      | "hs_all_team_ids"
      | "hs_analytics_average_page_views"
      | "hs_analytics_first_referrer"
      | "hs_analytics_first_timestamp"
      | "hs_analytics_first_touch_converting_campaign"
      | "hs_analytics_first_url"
      | "hs_analytics_first_visit_timestamp"
      | "hs_analytics_last_referrer"
      | "hs_analytics_last_timestamp"
      | "hs_analytics_last_touch_converting_campaign"
      | "hs_analytics_last_url"
      | "hs_analytics_last_visit_timestamp"
      | "hs_analytics_num_event_completions"
      | "hs_analytics_num_page_views"
      | "hs_analytics_num_visits"
      | "hs_analytics_revenue"
      | "hs_analytics_source"
      | "hs_analytics_source_data_1"
      | "hs_analytics_source_data_2"
      | "hs_avatar_filemanager_key"
      | "hs_buying_role"
      | "hs_calculated_form_submissions"
      | "hs_calculated_merged_vids"
      | "hs_calculated_mobile_number"
      | "hs_calculated_phone_number"
      | "hs_calculated_phone_number_area_code"
      | "hs_calculated_phone_number_country_code"
      | "hs_calculated_phone_number_region_code"
      | "hs_clicked_linkedin_ad"
      | "hs_content_membership_email"
      | "hs_content_membership_email_confirmed"
      | "hs_content_membership_follow_up_enqueued_at"
      | "hs_content_membership_notes"
      | "hs_content_membership_registered_at"
      | "hs_content_membership_registration_domain_sent_to"
      | "hs_content_membership_registration_email_sent_at"
      | "hs_content_membership_status"
      | "hs_conversations_visitor_email"
      | "hs_count_is_unworked"
      | "hs_count_is_worked"
      | "hs_created_by_conversations"
      | "hs_created_by_user_id"
      | "hs_createdate"
      | "hs_data_privacy_ads_consent"
      | "hs_date_entered_customer"
      | "hs_date_entered_evangelist"
      | "hs_date_entered_lead"
      | "hs_date_entered_marketingqualifiedlead"
      | "hs_date_entered_opportunity"
      | "hs_date_entered_other"
      | "hs_date_entered_salesqualifiedlead"
      | "hs_date_entered_subscriber"
      | "hs_date_exited_customer"
      | "hs_date_exited_evangelist"
      | "hs_date_exited_lead"
      | "hs_date_exited_marketingqualifiedlead"
      | "hs_date_exited_opportunity"
      | "hs_date_exited_other"
      | "hs_date_exited_salesqualifiedlead"
      | "hs_date_exited_subscriber"
      | "hs_document_last_revisited"
      | "hs_email_bad_address"
      | "hs_email_bounce"
      | "hs_email_click"
      | "hs_email_customer_quarantined_reason"
      | "hs_email_delivered"
      | "hs_email_domain"
      | "hs_email_first_click_date"
      | "hs_email_first_open_date"
      | "hs_email_first_reply_date"
      | "hs_email_first_send_date"
      | "hs_email_hard_bounce_reason"
      | "hs_email_hard_bounce_reason_enum"
      | "hs_email_is_ineligible"
      | "hs_email_last_click_date"
      | "hs_email_last_email_name"
      | "hs_email_last_open_date"
      | "hs_email_last_reply_date"
      | "hs_email_last_send_date"
      | "hs_email_open"
      | "hs_email_optout"
      | "hs_email_optout_281781951"
      | "hs_email_optout_281781952"
      | "hs_email_optout_281781958"
      | "hs_email_quarantined"
      | "hs_email_quarantined_reason"
      | "hs_email_recipient_fatigue_recovery_time"
      | "hs_email_replied"
      | "hs_email_sends_since_last_engagement"
      | "hs_emailconfirmationstatus"
      | "hs_facebook_ad_clicked"
      | "hs_facebook_click_id"
      | "hs_facebookid"
      | "hs_feedback_last_nps_follow_up"
      | "hs_feedback_last_nps_rating"
      | "hs_feedback_last_survey_date"
      | "hs_feedback_show_nps_web_survey"
      | "hs_first_engagement_object_id"
      | "hs_first_outreach_date"
      | "hs_first_subscription_create_date"
      | "hs_google_click_id"
      | "hs_googleplusid"
      | "hs_has_active_subscription"
      | "hs_ip_timezone"
      | "hs_is_contact"
      | "hs_is_unworked"
      | "hs_language"
      | "hs_last_sales_activity_date"
      | "hs_last_sales_activity_timestamp"
      | "hs_last_sales_activity_type"
      | "hs_lastmodifieddate"
      | "hs_latest_disqualified_lead_date"
      | "hs_latest_meeting_activity"
      | "hs_latest_open_lead_date"
      | "hs_latest_qualified_lead_date"
      | "hs_latest_sequence_ended_date"
      | "hs_latest_sequence_enrolled"
      | "hs_latest_sequence_enrolled_date"
      | "hs_latest_sequence_finished_date"
      | "hs_latest_sequence_unenrolled_date"
      | "hs_latest_source"
      | "hs_latest_source_data_1"
      | "hs_latest_source_data_2"
      | "hs_latest_source_timestamp"
      | "hs_latest_subscription_create_date"
      | "hs_lead_status"
      | "hs_legal_basis"
      | "hs_lifecyclestage_customer_date"
      | "hs_lifecyclestage_evangelist_date"
      | "hs_lifecyclestage_lead_date"
      | "hs_lifecyclestage_marketingqualifiedlead_date"
      | "hs_lifecyclestage_opportunity_date"
      | "hs_lifecyclestage_other_date"
      | "hs_lifecyclestage_salesqualifiedlead_date"
      | "hs_lifecyclestage_subscriber_date"
      | "hs_linkedin_ad_clicked"
      | "hs_linkedinid"
      | "hs_marketable_reason_id"
      | "hs_marketable_reason_type"
      | "hs_marketable_status"
      | "hs_marketable_until_renewal"
      | "hs_merged_object_ids"
      | "hs_object_id"
      | "hs_object_source"
      | "hs_object_source_id"
      | "hs_object_source_label"
      | "hs_object_source_user_id"
      | "hs_persona"
      | "hs_pinned_engagement_id"
      | "hs_pipeline"
      | "hs_predictivecontactscore"
      | "hs_predictivecontactscore_v2"
      | "hs_predictivecontactscorebucket"
      | "hs_predictivescoringtier"
      | "hs_read_only"
      | "hs_sa_first_engagement_date"
      | "hs_sa_first_engagement_descr"
      | "hs_sa_first_engagement_object_type"
      | "hs_sales_email_last_clicked"
      | "hs_sales_email_last_opened"
      | "hs_sales_email_last_replied"
      | "hs_searchable_calculated_international_mobile_number"
      | "hs_searchable_calculated_international_phone_number"
      | "hs_searchable_calculated_mobile_number"
      | "hs_searchable_calculated_phone_number"
      | "hs_sequences_actively_enrolled_count"
      | "hs_sequences_enrolled_count"
      | "hs_sequences_is_enrolled"
      | "hs_social_facebook_clicks"
      | "hs_social_google_plus_clicks"
      | "hs_social_last_engagement"
      | "hs_social_linkedin_clicks"
      | "hs_social_num_broadcast_clicks"
      | "hs_social_twitter_clicks"
      | "hs_source_object_id"
      | "hs_source_portal_id"
      | "hs_testpurge"
      | "hs_testrollback"
      | "hs_time_between_contact_creation_and_deal_close"
      | "hs_time_between_contact_creation_and_deal_creation"
      | "hs_time_in_customer"
      | "hs_time_in_evangelist"
      | "hs_time_in_lead"
      | "hs_time_in_marketingqualifiedlead"
      | "hs_time_in_opportunity"
      | "hs_time_in_other"
      | "hs_time_in_salesqualifiedlead"
      | "hs_time_in_subscriber"
      | "hs_time_to_first_engagement"
      | "hs_time_to_move_from_lead_to_customer"
      | "hs_time_to_move_from_marketingqualifiedlead_to_customer"
      | "hs_time_to_move_from_opportunity_to_customer"
      | "hs_time_to_move_from_salesqualifiedlead_to_customer"
      | "hs_time_to_move_from_subscriber_to_customer"
      | "hs_timezone"
      | "hs_twitterid"
      | "hs_unique_creation_key"
      | "hs_updated_by_user_id"
      | "hs_user_ids_of_all_notification_followers"
      | "hs_user_ids_of_all_notification_unfollowers"
      | "hs_user_ids_of_all_owners"
      | "hs_v2_cumulative_time_in_customer"
      | "hs_v2_cumulative_time_in_evangelist"
      | "hs_v2_cumulative_time_in_lead"
      | "hs_v2_cumulative_time_in_marketingqualifiedlead"
      | "hs_v2_cumulative_time_in_opportunity"
      | "hs_v2_cumulative_time_in_other"
      | "hs_v2_cumulative_time_in_salesqualifiedlead"
      | "hs_v2_cumulative_time_in_subscriber"
      | "hs_v2_date_entered_customer"
      | "hs_v2_date_entered_evangelist"
      | "hs_v2_date_entered_lead"
      | "hs_v2_date_entered_marketingqualifiedlead"
      | "hs_v2_date_entered_opportunity"
      | "hs_v2_date_entered_other"
      | "hs_v2_date_entered_salesqualifiedlead"
      | "hs_v2_date_entered_subscriber"
      | "hs_v2_date_exited_customer"
      | "hs_v2_date_exited_evangelist"
      | "hs_v2_date_exited_lead"
      | "hs_v2_date_exited_marketingqualifiedlead"
      | "hs_v2_date_exited_opportunity"
      | "hs_v2_date_exited_other"
      | "hs_v2_date_exited_salesqualifiedlead"
      | "hs_v2_date_exited_subscriber"
      | "hs_v2_latest_time_in_customer"
      | "hs_v2_latest_time_in_evangelist"
      | "hs_v2_latest_time_in_lead"
      | "hs_v2_latest_time_in_marketingqualifiedlead"
      | "hs_v2_latest_time_in_opportunity"
      | "hs_v2_latest_time_in_other"
      | "hs_v2_latest_time_in_salesqualifiedlead"
      | "hs_v2_latest_time_in_subscriber"
      | "hs_was_imported"
      | "hs_whatsapp_phone_number"
      | "hubspot_owner_assigneddate"
      | "hubspot_owner_id"
      | "hubspot_team_id"
      | "hubspotscore"
      | "industry"
      | "ip_city"
      | "ip_country"
      | "ip_country_code"
      | "ip_latlon"
      | "ip_state"
      | "ip_state_code"
      | "ip_zipcode"
      | "job_function"
      | "jobtitle"
      | "kloutscoregeneral"
      | "lastmodifieddate"
      | "lastname"
      | "lifecyclestage"
      | "linkedinbio"
      | "linkedinconnections"
      | "marital_status"
      | "message"
      | "military_status"
      | "mobilephone"
      | "notes_last_contacted"
      | "notes_last_updated"
      | "notes_next_activity_date"
      | "num_associated_deals"
      | "num_contacted_notes"
      | "num_conversion_events"
      | "num_notes"
      | "num_unique_conversion_events"
      | "numemployees"
      | "owneremail"
      | "ownername"
      | "phone"
      | "photo"
      | "recent_conversion_date"
      | "recent_conversion_event_name"
      | "recent_deal_amount"
      | "recent_deal_close_date"
      | "relationship_status"
      | "salutation"
      | "school"
      | "seniority"
      | "start_date"
      | "state"
      | "surveymonkeyeventlastupdated"
      | "total_revenue"
      | "twitterbio"
      | "twitterhandle"
      | "twitterprofilephoto"
      | "webinareventlastupdated"
      | "website"
      | "work_email"
      | "zip"
    )[] = undefined;
export const meetingProperties:
  | undefined
  | (
      | "hs_activity_type"
      | "hs_all_accessible_team_ids"
      | "hs_all_assigned_business_unit_ids"
      | "hs_all_owner_ids"
      | "hs_all_team_ids"
      | "hs_at_mentioned_owner_ids"
      | "hs_attachment_ids"
      | "hs_attendee_owner_ids"
      | "hs_body_preview"
      | "hs_body_preview_html"
      | "hs_body_preview_is_truncated"
      | "hs_contact_first_outreach_date"
      | "hs_created_by"
      | "hs_created_by_user_id"
      | "hs_createdate"
      | "hs_engagement_source"
      | "hs_engagement_source_id"
      | "hs_follow_up_action"
      | "hs_gdpr_deleted"
      | "hs_guest_emails"
      | "hs_i_cal_uid"
      | "hs_include_description_in_reminder"
      | "hs_internal_meeting_notes"
      | "hs_lastmodifieddate"
      | "hs_meeting_body"
      | "hs_meeting_calendar_event_hash"
      | "hs_meeting_change_id"
      | "hs_meeting_created_from_link_id"
      | "hs_meeting_end_time"
      | "hs_meeting_external_url"
      | "hs_meeting_location"
      | "hs_meeting_location_type"
      | "hs_meeting_outcome"
      | "hs_meeting_payments_session_id"
      | "hs_meeting_pre_meeting_prospect_reminders"
      | "hs_meeting_source"
      | "hs_meeting_source_id"
      | "hs_meeting_start_time"
      | "hs_meeting_title"
      | "hs_meeting_web_conference_meeting_id"
      | "hs_merged_object_ids"
      | "hs_modified_by"
      | "hs_object_id"
      | "hs_object_source"
      | "hs_object_source_id"
      | "hs_object_source_label"
      | "hs_object_source_user_id"
      | "hs_outcome_canceled_count"
      | "hs_outcome_completed_count"
      | "hs_outcome_no_show_count"
      | "hs_outcome_rescheduled_count"
      | "hs_outcome_scheduled_count"
      | "hs_product_name"
      | "hs_queue_membership_ids"
      | "hs_read_only"
      | "hs_roster_object_coordinates"
      | "hs_scheduled_tasks"
      | "hs_time_to_book_meeting_from_first_contact"
      | "hs_timestamp"
      | "hs_timezone"
      | "hs_unique_creation_key"
      | "hs_unique_id"
      | "hs_updated_by_user_id"
      | "hs_user_ids_of_all_notification_followers"
      | "hs_user_ids_of_all_notification_unfollowers"
      | "hs_user_ids_of_all_owners"
      | "hs_was_imported"
      | "hubspot_owner_assigneddate"
      | "hubspot_owner_id"
      | "hubspot_team_id"
    )[] = undefined;
