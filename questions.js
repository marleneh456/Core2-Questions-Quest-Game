const QUESTION_BANK = [
  {
    "topic": "Active Directory",
    "number": 1,
    "question": "Which Windows tool allows administrators to verify that a computer is successfully joined to a domain?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Group Policy Editor",
      "B": "Windows Security app",
      "C": "Computer Management",
      "D": "System Properties"
    },
    "explanations": {
      "A": "Group Policy Editor configures local or domain policy settings; it is not the primary interface for checking the computer domain membership shown in this question.",
      "B": "Windows Security manages antivirus, firewall, account protection, and other security areas rather than Active Directory domain membership.",
      "C": "Computer Management provides administrative consoles for disks, services, users, and events, but the quiz identifies a different location for verifying domain membership.",
      "D": "System Properties displays the computer name and domain/workgroup membership, allowing an administrator to confirm that the PC is joined to the intended domain."
    },
    "tip": "To check whether a PC belongs to a domain, look at its computer name and domain membership in System Properties. CompTIA A+ 220-1202 - Active Directory Quiz Page 3"
  },
  {
    "topic": "Active Directory",
    "number": 2,
    "question": "A company hires a new employee, and the IT administrator needs to ensure that the employee’s network drives are mapped and shared printers are available as part of their desktop setup. Which Active Directory feature should the administrator use to configure this initial desktop environment?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Task Scheduler",
      "B": "Local Security Policy",
      "C": "User Profile",
      "D": "Log-in script"
    },
    "explanations": {
      "A": "Task Scheduler runs programs or scripts according to triggers and schedules; it is not the feature selected here for establishing the user desktop environment at sign-in.",
      "B": "Local Security Policy configures security settings on a computer and does not primarily map the user’s network drives and printers.",
      "C": "A user profile stores user-specific settings and files, but the quiz identifies a sign-in automation mechanism for mapping drives and printers.",
      "D": "A log-in script can run automatically when the domain user signs in and can perform setup actions such as mapping network drives and connecting shared printers."
    },
    "tip": "Log-in scripts automate tasks that should happen when a domain user signs in. CompTIA A+ 220-1202 - Active Directory Quiz Page 4"
  },
  {
    "topic": "Active Directory",
    "number": 3,
    "question": "An administrator needs to move a user account from the Sales Organizational Unit (OU) to the Marketing OU. Which Active Directory tool is used to perform this action?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Active Directory Domains and Trusts",
      "B": "Active Directory Migration Tool",
      "C": "Active Directory Users and Computers",
      "D": "Active Directory Sites and Services"
    },
    "explanations": {
      "A": "This console manages domain and forest trust relationships and certain domain-level properties rather than individual user objects inside OUs.",
      "B": "ADMT is intended for migrations between domains or forests, not a routine move between OUs in the same Active Directory environment.",
      "C": "Active Directory Users and Computers is the standard management console for users, groups, computers, and Organizational Units, including moving an account from one OU to another.",
      "D": "This tool manages sites, subnets, domain controllers, and replication topology rather than ordinary user-account OU placement."
    },
    "tip": "AD Users and Computers manages everyday AD objects such as users, groups, computers, and OUs. CompTIA A+ 220-1202 - Active Directory Quiz Page 5"
  },
  {
    "topic": "Active Directory",
    "number": 4,
    "question": "Which Active Directory feature provides each domain user with a dedicated network location to store personal documents on a network share?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Roaming profile",
      "B": "My Documents folder",
      "C": "Shared network drive",
      "D": "Home folder"
    },
    "explanations": {
      "A": "A roaming profile stores and synchronizes user profile settings across domain computers; it is not specifically the dedicated personal network storage location asked for.",
      "B": "My Documents is a user folder name, but by itself it does not define the Active Directory network storage feature.",
      "C": "A shared drive may be available to many users and does not necessarily provide each user with a dedicated personal location.",
      "D": "An Active Directory home folder can assign each user a dedicated directory on a network share for personal file storage."
    },
    "tip": "Home folder = a user’s personal network storage location. CompTIA A+ 220-1202 - Active Directory Quiz Page 6"
  },
  {
    "topic": "Active Directory",
    "number": 5,
    "question": "An Active Directory domain admin wants to prevent users in a specific Organizational Unit (OU) from running a particular application. Which tool should the administrator use to enforce this setting?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "System Configuration",
      "B": "Group Policy Management Console",
      "C": "Active Directory Users and Computers",
      "D": "Local Security Policy"
    },
    "explanations": {
      "A": "System Configuration is mainly a local startup and troubleshooting utility and does not centrally enforce domain policy for an OU.",
      "B": "Group Policy Management Console is used to create, manage, and link Group Policy Objects to sites, domains, and OUs so settings can be centrally enforced for the targeted users or computers.",
      "C": "AD Users and Computers manages directory objects, but it is not the main console for creating and enforcing Group Policy restrictions such as application controls.",
      "D": "Local Security Policy affects an individual computer and does not centrally apply an OU-wide domain policy."
    },
    "tip": "Need to enforce a setting for an OU? Think Group Policy Management Console. CompTIA A+ 220-1202 - Active Directory Quiz Page 7"
  },
  {
    "topic": "Active Directory",
    "number": 6,
    "question": "Which tool is used to add a user to a security group in Active Directory?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Active Directory Domains and Trusts",
      "B": "Group Policy Object Editor",
      "C": "Active Directory Users and Computers",
      "D": "Group Policy Management Console"
    },
    "explanations": {
      "A": "This console manages trusts and domain-level relationships rather than routine group membership.",
      "B": "Group Policy Object Editor edits policy settings; it does not manage Active Directory security-group membership.",
      "C": "Active Directory Users and Computers provides the interfaces for managing user and group objects, including adding a user to a security group.",
      "D": "GPMC manages Group Policy Objects and their scope, not membership of users in AD security groups."
    },
    "tip": "User or group membership change = Active Directory Users and Computers. CompTIA A+ 220-1202 - Active Directory Quiz Page 8"
  },
  {
    "topic": "Active Directory",
    "number": 7,
    "question": "Which feature of the Windows Active Directory's Group Policy Management Console is used to ensure a user's profile folders are stored on a centralized network share rather than on their local computer?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Home folders",
      "B": "Roaming profiles",
      "C": "Folder redirection",
      "D": "Drive quotas"
    },
    "explanations": {
      "A": "Home folders provide a dedicated network storage location, but the question asks for the Group Policy feature that redirects standard profile folders.",
      "B": "Roaming profiles allow a user profile to follow the user between domain computers, but they are different from redirecting individual profile folders to a network share.",
      "C": "Folder redirection uses Group Policy to redirect folders such as Documents or Desktop from the local profile to a centralized network location.",
      "D": "Drive quotas limit how much disk space users can consume; they do not change where profile folders are stored."
    },
    "tip": "Folder redirection moves standard user folders to a network path while keeping them familiar to the user."
  },
  {
    "topic": "Asset Management",
    "number": 1,
    "question": "A type of structured record used in IT asset management to track hardware, software, and peripheral devices within an organization is referred to as:",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Maintenance log",
      "B": "System configuration baseline",
      "C": "Onboarding checklist",
      "D": "Inventory list"
    },
    "explanations": {
      "A": "A maintenance log records service, repairs, inspections, or maintenance history rather than serving as the main structured record of organizational assets.",
      "B": "A configuration baseline documents an approved system configuration so changes can be compared against it; it is not the basic asset-tracking record.",
      "C": "An onboarding checklist tracks tasks needed when adding a user or employee and is not an inventory of IT equipment and software.",
      "D": "An inventory list records the organization's hardware, software, and peripheral assets so they can be identified and tracked."
    },
    "tip": "Inventory list = what IT assets the organization owns or manages. CompTIA A+ 220-1202 - Asset Management Page 3"
  },
  {
    "topic": "Asset Management",
    "number": 2,
    "question": "Which of the following answers refer to valid examples of items tracked in a CMDB? (Select 2 answers)",
    "answers": [
      "A",
      "D"
    ],
    "options": {
      "A": "Server hardware",
      "B": "Log data",
      "C": "Asset disposal records",
      "D": "Installed applications",
      "E": "User passwords"
    },
    "explanations": {
      "A": "Server hardware is a configuration item whose identity, configuration, status, and relationships can be tracked in a CMDB.",
      "B": "Operational log entries are generally stored in logging or monitoring systems rather than treated as configuration items in the CMDB.",
      "C": "Disposal records document an asset's retirement or destruction history; the quiz does not identify them as the CMDB items requested here.",
      "D": "Installed applications are software configuration items that a CMDB can track along with the systems on which they are installed.",
      "E": "Passwords are sensitive authentication secrets and should never be stored as ordinary CMDB configuration items."
    },
    "tip": "A CMDB tracks configuration items such as servers and installed software, plus their relationships. CompTIA A+ 220-1202 - Asset Management Page 4"
  },
  {
    "topic": "Asset Management",
    "number": 3,
    "question": "The primary difference between a simple inventory list and a CMDB is that a CMDB contains the same raw asset data as an inventory list, but also tracks the dependencies and relationships between the assets.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "A CMDB goes beyond a simple list by recording how configuration items relate to and depend on one another, which helps IT understand service impact and infrastructure relationships.",
      "B": "This would ignore the relationship and dependency information that distinguishes a CMDB from a basic inventory list."
    },
    "tip": "Inventory tells you what exists; a CMDB also shows how the items connect and depend on each other. CompTIA A+ 220-1202 - Asset Management Page 5"
  },
  {
    "topic": "Asset Management",
    "number": 4,
    "question": "In IT asset management, a physical label (typically a sticker, barcode, QR code, or RFID tag) affixed to a device is known as:",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Service tag",
      "B": "Asset ID",
      "C": "Tracking label",
      "D": "Asset tag"
    },
    "explanations": {
      "A": "A service tag is commonly a manufacturer-specific identifier used for support or warranty purposes, not the general organizational label described.",
      "B": "An asset ID is the unique value assigned to the asset in records; the question asks for the physical label attached to the device.",
      "C": "This is a descriptive phrase but not the specific asset-management term selected by the quiz.",
      "D": "An asset tag is the physical sticker, barcode, QR code, or RFID label attached to equipment for identification and tracking."
    },
    "tip": "Asset tag = the physical tracking label attached to the equipment. CompTIA A+ 220-1202 - Asset Management Page 6"
  },
  {
    "topic": "Asset Management",
    "number": 5,
    "question": "Which of the terms listed below describes a unique alphanumeric string or number assigned to an asset within an inventory system or CMDB?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Product key",
      "B": "Asset ID",
      "C": "Serial number",
      "D": "Asset tag"
    },
    "explanations": {
      "A": "A product key is used to activate or license software and is not the organization's general unique identifier for an asset.",
      "B": "An asset ID is the unique internal number or alphanumeric value assigned to an asset in the organization's inventory or CMDB.",
      "C": "A serial number is normally assigned by the manufacturer rather than by the organization's internal asset system.",
      "D": "An asset tag is the physical label placed on the device; it may display the asset ID, but the quiz distinguishes the label from the unique record identifier."
    },
    "tip": "Asset ID = internal unique record number; asset tag = physical label. CompTIA A+ 220-1202 - Asset Management Page 7"
  },
  {
    "topic": "Asset Management",
    "number": 6,
    "question": "A technician is attempting to locate an unassigned network switch in a storage room. The inventory list provides only a physical description and an internal asset ID. Which identifier on the device should the technician use to match the physical item to the documentation?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Device model number",
      "B": "Manufacturer serial number",
      "C": "Device MAC address",
      "D": "Physical asset tag"
    },
    "explanations": {
      "A": "Many switches can share the same model number, so it does not uniquely match one physical asset to one internal inventory record.",
      "B": "A serial number uniquely identifies the manufacturer's unit, but the inventory information in the question provides the organization's internal asset ID instead.",
      "C": "A MAC address identifies a network interface, but it is not the physical organizational identifier corresponding to the internal asset ID in this scenario.",
      "D": "The physical asset tag on the device normally displays or corresponds to the organization's internal asset ID, allowing the technician to match the switch to the inventory record."
    },
    "tip": "To match a device to an internal asset ID, look for the organization's physical asset tag. CompTIA A+ 220-1202 - Asset Management Page 8"
  },
  {
    "topic": "Asset Management",
    "number": 7,
    "question": "Which of the following terms is used to describe a structured process organizations follow to acquire goods, services, or equipment from external suppliers?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Asset management process",
      "B": "Resource scheduling framework",
      "C": "Procurement life cycle",
      "D": "Inventory management plan"
    },
    "explanations": {
      "A": "Asset management covers the broader tracking and management of assets throughout their lifecycle, not specifically the supplier acquisition process.",
      "B": "Resource scheduling allocates people, time, or resources and is unrelated to purchasing from external suppliers.",
      "C": "The procurement life cycle is the structured process for identifying a need, selecting suppliers, purchasing goods or services, receiving them, and managing the acquisition.",
      "D": "Inventory management focuses on tracking and controlling items already held by the organization rather than the full external purchasing process."
    },
    "tip": "Procurement life cycle = the organized process for obtaining goods or services from suppliers. CompTIA A+ 220-1202 - Asset Management Page 9"
  },
  {
    "topic": "Asset Management",
    "number": 8,
    "question": "A technician reviews an asset record before submitting a hardware repair request. Which detail confirms whether the vendor will provide free replacement parts?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Maintenance window schedule",
      "B": "Vendor support escalation path",
      "C": "Asset procurement date",
      "D": "Warranty coverage status"
    },
    "explanations": {
      "A": "A maintenance window tells when service work may be performed; it does not determine whether replacement parts are covered by the vendor.",
      "B": "An escalation path tells whom to contact when support must be elevated, not whether parts are covered at no cost.",
      "C": "The purchase date can help estimate warranty age, but it does not directly confirm the asset's current coverage status.",
      "D": "Warranty coverage status directly shows whether the hardware is still covered and whether eligible replacement parts or repairs may be provided by the vendor."
    },
    "tip": "Before paying for hardware repair, check the asset's warranty coverage status. CompTIA A+ 220-1202 - Asset Management Page 10"
  },
  {
    "topic": "Asset Management",
    "number": 9,
    "question": "Which asset record detail helps verify software compliance during an audit?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Assigned user information",
      "B": "Software usage logs",
      "C": "Asset procurement date",
      "D": "License entitlement count"
    },
    "explanations": {
      "A": "Assigned-user data identifies who uses an asset but does not show whether the organization owns enough software licenses.",
      "B": "Usage logs can show whether software is being used, but they do not directly establish the number of licenses the organization is entitled to deploy.",
      "C": "The purchase date of an asset does not verify software licensing compliance.",
      "D": "The license entitlement count shows how many software licenses the organization is authorized to use, allowing auditors to compare entitlement with installations or usage."
    },
    "tip": "Software audit compliance compares installed or used copies with the license entitlement count. CompTIA A+ 220-1202 - Asset Management Page 11"
  },
  {
    "topic": "Asset Management",
    "number": 10,
    "question": "A technician is reviewing CMDB entries after a department reorganization. Several laptops were redistributed, and support tickets are now being misrouted. Which asset field should be updated to fix this issue?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Asset tag",
      "B": "Last login timestamp",
      "C": "Device physical location",
      "D": "Assigned user"
    },
    "explanations": {
      "A": "The asset tag identifies the physical device and normally remains the same when the laptop changes users.",
      "B": "The last login time can provide activity information but does not establish who currently owns or is responsible for the laptop.",
      "C": "Location can matter for routing, but the scenario emphasizes that laptops were redistributed after a reorganization; the quiz identifies the assigned user as the field that must change.",
      "D": "Updating the assigned-user field associates each redistributed laptop with its new user, allowing asset records and related support routing to reflect the new ownership."
    },
    "tip": "When a device changes hands, update its assigned user so support and asset records follow the correct person."
  },
  {
    "topic": "Backup and Recovery Methods",
    "number": 1,
    "question": "A system admin performs a backup that copies every file on a workstation each night, even if no files were modified. Which backup type is being used?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Differential backup",
      "B": "Full backup",
      "C": "Incremental backup",
      "D": "Synthetic full backup"
    },
    "explanations": {
      "A": "A differential backup copies data changed since the last full backup, so it does not copy every unchanged file each night.",
      "B": "A full backup copies all selected data regardless of whether files changed since an earlier backup.",
      "C": "An incremental backup copies only data changed since the most recent backup, making it smaller than a full backup.",
      "D": "A synthetic full is assembled from existing backup data instead of rereading every file from the workstation."
    },
    "tip": "Full backup = every selected file is copied again, changed or unchanged. CompTIA A+ 220-1202 - Backup & Recovery Methods Page 3"
  },
  {
    "topic": "Backup and Recovery Methods",
    "number": 2,
    "question": "A workstation backup strategy uses a full backup on Sunday and small daily backups that capture only the files changed since the last backup. What type of backup is being performed?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "File-level backup",
      "B": "Differential backup",
      "C": "Snapshot backup",
      "D": "Incremental backup"
    },
    "explanations": {
      "A": "File-level describes the granularity of what is backed up, not the rule for selecting changes since the previous backup.",
      "B": "Differential backups copy everything changed since the last full backup, so each day's differential usually grows larger.",
      "C": "A snapshot captures a point-in-time state and is not the daily changed-since-last-backup method described.",
      "D": "An incremental backup copies only data changed since the previous backup, which keeps daily backup sets relatively small."
    },
    "tip": "Incremental = changes since the last backup of any type. CompTIA A+ 220-1202 - Backup & Recovery Methods Page 4"
  },
  {
    "topic": "Backup and Recovery Methods",
    "number": 3,
    "question": "Which backup type copies all data changed since the last full backup?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Synthetic full backup",
      "B": "Incremental backup",
      "C": "Snapshot backup",
      "D": "Differential backup"
    },
    "explanations": {
      "A": "A synthetic full combines existing backup sets into a new full backup rather than simply copying changes since the last full.",
      "B": "Incremental copies changes since the most recent backup, not specifically since the last full backup.",
      "C": "A snapshot records a point-in-time state and does not use the differential change rule.",
      "D": "A differential backup contains all data changed since the most recent full backup."
    },
    "tip": "Differential always looks back to the last full backup. CompTIA A+ 220-1202 - Backup & Recovery Methods Page 5"
  },
  {
    "topic": "Backup and Recovery Methods",
    "number": 4,
    "question": "A backup strategy uses a weekly full backup and daily incrementals, then creates a new full backup copy by combining existing backup data instead of pulling data from the workstation. What type of backup is generated?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Replication backup",
      "B": "Synthetic full backup",
      "C": "Offsite backup",
      "D": "Differential backup"
    },
    "explanations": {
      "A": "Replication maintains copies of data on another system or location; it does not describe building a full set from existing backup chains.",
      "B": "A synthetic full is created by combining the previous full backup with subsequent incremental data without rereading all source data.",
      "C": "Offsite describes backup location rather than how the backup set is constructed.",
      "D": "Differential copies changes since the last full from the source; it does not assemble a new full from stored backups."
    },
    "tip": "Synthetic full = build a new full backup from backups already stored. CompTIA A+ 220-1202 - Backup & Recovery Methods Page 6"
  },
  {
    "topic": "Backup and Recovery Methods",
    "number": 5,
    "question": "A technician is configuring a backup schedule. The goal is to ensure that daily backups include only files modified since the previous day and that the backup process marks those files as backed up. Which backup type should be used?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Differential backup",
      "B": "Full backup",
      "C": "Incremental backup",
      "D": "Synthetic full backup"
    },
    "explanations": {
      "A": "Differential backups include changes since the last full and normally do not reset the changed-file tracking in the same way described.",
      "B": "A full backup copies all selected files, not only files modified since the previous day.",
      "C": "Incremental backup captures changes since the previous backup and marks those files as backed up, establishing the next incremental baseline.",
      "D": "Synthetic full creates a full backup from existing stored backup data rather than collecting only the day's changes from the workstation."
    },
    "tip": "Daily changes since yesterday + mark them backed up = incremental. CompTIA A+ 220-1202 - Backup & Recovery Methods Page 7"
  },
  {
    "topic": "Backup and Recovery Methods",
    "number": 6,
    "question": "In a differential backup strategy, restoring data from backup requires a working copy of the last full backup and the most recent copy of the differential backup.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The latest differential already contains every change since the last full backup, so recovery needs the last full plus that latest differential.",
      "B": "You do not need every earlier differential because the newest differential contains the cumulative changes since the full backup."
    },
    "tip": "Differential restore = 1 full + 1 latest differential. CompTIA A+ 220-1202 - Backup & Recovery Methods Page 8"
  },
  {
    "topic": "Backup and Recovery Methods",
    "number": 7,
    "question": "A workstation uses a full backup on Sunday at 11:00 PM and an incremental nightly backup schedule at 11:00 PM on weekdays. The system fails on Friday at 9:00 AM. How many backup sets must be restored to fully recover the system?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "2",
      "B": "3",
      "C": "4",
      "D": "5"
    },
    "explanations": {
      "A": "Two sets would be enough for a differential strategy, but incremental recovery requires each incremental set after the full.",
      "B": "This omits some of the weekday incremental backups needed to rebuild the latest available state.",
      "C": "The Sunday full plus only three incrementals would not include all available changes through Thursday night.",
      "D": "Recovery requires the Sunday full backup plus Monday, Tuesday, Wednesday, and Thursday incremental sets - five backup sets total."
    },
    "tip": "Incremental restore follows the whole chain: full backup plus every incremental after it. CompTIA A+ 220-1202 - Backup & Recovery Methods Page 9"
  },
  {
    "topic": "Backup and Recovery Methods",
    "number": 8,
    "question": "A technician restores a user's documents directly back into the original Documents folder, replacing the corrupted files. What type of recovery is being performed?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Selective recovery",
      "B": "Local recovery",
      "C": "In-place/overwrite recovery",
      "D": "Folder-level recovery"
    },
    "explanations": {
      "A": "Selective recovery describes choosing particular items, but the key detail here is that they are restored directly over the original location.",
      "B": "Local recovery describes where recovery resources are located, not whether restored files overwrite originals.",
      "C": "In-place or overwrite recovery restores data to its original location and replaces the existing damaged or corrupted files.",
      "D": "Folder-level describes the scope of restored data, but not the overwrite behavior emphasized in the scenario."
    },
    "tip": "Restore to the original location and replace existing files = in-place/overwrite recovery. CompTIA A+ 220-1202 - Backup & Recovery Methods Page 10"
  },
  {
    "topic": "Backup and Recovery Methods",
    "number": 9,
    "question": "A backup copy of data is being restored to a temporary folder on a secondary drive to compare versions of files before replacing anything. What recovery method is being used?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Bare-metal recovery",
      "B": "In-place recovery",
      "C": "Alternative-location recovery",
      "D": "Duplicative recovery"
    },
    "explanations": {
      "A": "Bare-metal recovery rebuilds an entire system onto blank or replacement hardware rather than restoring files to a comparison folder.",
      "B": "In-place recovery restores data directly to its original location, which the technician intentionally avoids here.",
      "C": "Alternative-location recovery restores data somewhere other than its original path so it can be examined before any originals are replaced.",
      "D": "This is not the recovery term identified by the source for restoring to a temporary secondary location."
    },
    "tip": "Need to inspect restored files first? Restore them to an alternative location. CompTIA A+ 220-1202 - Backup & Recovery Methods Page 11"
  },
  {
    "topic": "Backup and Recovery Methods",
    "number": 10,
    "question": "A scheduled restore test is performed each month to ensure that the backed-up data has not been altered or corrupted. The purpose of this activity is to verify the backup's:",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Availability",
      "B": "Scope",
      "C": "Reliability",
      "D": "Integrity"
    },
    "explanations": {
      "A": "Availability concerns whether backup data can be accessed when needed; the question specifically focuses on whether its contents remain unaltered and uncorrupted.",
      "B": "Scope identifies what data is included in the backup, not whether stored data remains accurate.",
      "C": "Reliability is a broad quality concept, but the specific security property of unaltered, uncorrupted data is integrity.",
      "D": "Integrity means data remains accurate, complete, and unaltered. A successful restore test helps confirm the backup has not been corrupted."
    },
    "tip": "Backup integrity asks: Is the stored data still complete and uncorrupted? CompTIA A+ 220-1202 - Backup & Recovery Methods Page 12"
  },
  {
    "topic": "Backup and Recovery Methods",
    "number": 11,
    "question": "A company's backup policy states that restore tests must be performed once per week to verify that mission-critical data remains recoverable. This requirement defines the company's:",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Backup scheduling window",
      "B": "Backup retention period",
      "C": "Backup rotation scheme",
      "D": "Backup testing frequency"
    },
    "explanations": {
      "A": "The scheduling window specifies when backup jobs may run, not how often restoration is tested.",
      "B": "Retention defines how long backup copies are kept.",
      "C": "Rotation describes how backup media or generations are cycled and reused.",
      "D": "Requiring restore tests once per week directly specifies how frequently backup recoverability must be tested."
    },
    "tip": "How often restore tests happen = backup testing frequency. CompTIA A+ 220-1202 - Backup & Recovery Methods Page 13"
  },
  {
    "topic": "Backup and Recovery Methods",
    "number": 12,
    "question": "The advantages of on-site backups over off-site backups include: (Select 3 answers)",
    "answers": [
      "A",
      "B",
      "C"
    ],
    "options": {
      "A": "Faster data access and restore speeds",
      "B": "Greater control over backup media & backup process",
      "C": "Lower or no ongoing subscription fees",
      "D": "Improved physical and environmental security",
      "E": "Geographic redundancy",
      "F": "Scalability without additional hardware investment"
    },
    "explanations": {
      "A": "Local backup media is physically nearby and often connected through high-speed local networks, allowing faster access and restoration.",
      "B": "Keeping backups on-site gives the organization direct physical and operational control over the media and backup procedures.",
      "C": "Local storage can avoid recurring cloud or third-party storage subscription charges, although hardware still has acquisition and maintenance costs.",
      "D": "Dedicated off-site providers may offer stronger facility controls and separation from local disasters.",
      "E": "Geographic redundancy is an advantage of keeping copies away from the primary site, not on the same premises.",
      "F": "Off-site/cloud services can often scale storage without the organization purchasing more local backup hardware."
    },
    "tip": "On-site strengths = speed, direct control, and potentially fewer recurring service fees. CompTIA A+ 220-1202 - Backup & Recovery Methods Page 14"
  },
  {
    "topic": "Backup and Recovery Methods",
    "number": 13,
    "question": "What are the advantages of off-site backups in comparison to on-site backups? (Select 3 answers)",
    "answers": [
      "B",
      "D",
      "F"
    ],
    "options": {
      "A": "Greater control over backup media & backup process",
      "B": "Improved physical and environmental security",
      "C": "Faster data access and restore speeds",
      "D": "Geographic redundancy",
      "E": "Lower or no ongoing subscription fees",
      "F": "Scalability without additional on-premises hardware investment"
    },
    "explanations": {
      "A": "Direct control is generally stronger with on-site media that the organization physically manages.",
      "B": "A professionally managed remote facility can provide controlled access, environmental protections, and separation from local incidents.",
      "C": "Remote recovery may be limited by network bandwidth and is not usually faster than nearby local backup storage.",
      "D": "An off-site copy survives many disasters that could destroy both production systems and backups stored in the same building.",
      "E": "Remote or cloud backup commonly involves recurring service or storage charges.",
      "F": "Off-site/cloud capacity can often be expanded without buying and installing additional local storage hardware."
    },
    "tip": "Off-site strengths = geographic separation, facility protection, and easier remote scalability. CompTIA A+ 220-1202 - Backup & Recovery Methods Page 15"
  },
  {
    "topic": "Backup and Recovery Methods",
    "number": 14,
    "question": "A company utilizes a backup rotation scheme where backups performed daily during a week are used to create a weekly backup and backups created at the end of each week are used to create a monthly backup. What type of backup rotation scheme is being used?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Synthetic full backup",
      "B": "Tower of Hanoi",
      "C": "3-2-1",
      "D": "Grandfather-Father-Son"
    },
    "explanations": {
      "A": "Synthetic full is a backup creation method, not a daily-weekly-monthly media rotation schedule.",
      "B": "Tower of Hanoi uses a mathematically staggered media reuse pattern rather than the daily, weekly, monthly generations described.",
      "C": "3-2-1 is a backup-copy strategy involving copies, media types, and an off-site copy; it is not this rotation hierarchy.",
      "D": "Grandfather-Father-Son rotates daily backups into weekly generations and weekly backups into monthly generations."
    },
    "tip": "Grandfather-Father-Son = daily, weekly, monthly backup generations. CompTIA A+ 220-1202 - Backup & Recovery Methods Page 16"
  },
  {
    "topic": "Backup and Recovery Methods",
    "number": 15,
    "question": "Which answers can be used to describe the 3-2-1 backup strategy? (Select 3 answers)",
    "answers": [
      "A",
      "D",
      "E"
    ],
    "options": {
      "A": "Keep at least 1 backup copy offsite",
      "B": "Save backups to 3 different storage media types",
      "C": "Keep at least 1 backup copy onsite",
      "D": "Maintain 3 total copies of data (original + 2 backups)",
      "E": "Use at least 2 different storage media types",
      "F": "Keep all 3 backup copies offsite",
      "G": "Create 2 copies of the primary backup copy"
    },
    "explanations": {
      "A": "The '1' in 3-2-1 means at least one copy should be stored off-site so a local disaster does not destroy every copy.",
      "B": "The strategy requires two different media types, not three.",
      "C": "An onsite copy can be useful, but this is not one of the three defining numerical rules selected by the source.",
      "D": "The '3' means three total copies of the data: the working original and two additional backup copies.",
      "E": "The '2' means the copies should span at least two different types of storage media.",
      "F": "The rule requires at least one off-site copy, not that all copies be stored off-site.",
      "G": "The rule describes three total copies and media diversity; it does not require duplicating one particular backup copy twice."
    },
    "tip": "3-2-1 = 3 total copies, 2 media types, 1 copy off-site."
  },
  {
    "topic": "Basic AI Concepts",
    "number": 1,
    "question": "An in-house software developer is tasked with enhancing the company's internal helpdesk portal by adding an AI chatbot to assist employees with common IT questions. This new feature implementation is an example of AI:",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Model training",
      "B": "Application integration",
      "C": "Vibe coding",
      "D": "Prompt engineering"
    },
    "explanations": {
      "A": "Model training is the process of teaching or adjusting an AI model using training data. The scenario describes adding an already available AI capability to an application.",
      "B": "Application integration means incorporating AI functionality into an existing application or workflow. Adding an AI chatbot to the helpdesk portal is a direct example.",
      "C": "Vibe coding refers to using AI-assisted natural-language interaction to help create software; the scenario is about integrating an AI feature into an existing portal.",
      "D": "Prompt engineering focuses on designing instructions or prompts to guide an AI model's responses, not embedding the AI capability into an application."
    },
    "tip": "Adding AI into an existing app or business workflow = application integration. CompTIA A+ 220-1202 - Basic AI Concepts Page 3"
  },
  {
    "topic": "Basic AI Concepts",
    "number": 2,
    "question": "A company policy states that generative AI may be used only to draft internal documentation and never to create customer-facing communications without human review. This policy is primarily addressing the AI's:",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Content attribution",
      "B": "Goal misalignment",
      "C": "Appropriate use",
      "D": "Data quality issues"
    },
    "explanations": {
      "A": "Content attribution concerns identifying or crediting the source or creator of content. The policy instead limits when and how AI may be used.",
      "B": "Goal misalignment occurs when an AI system's behavior or objective does not match the intended goal; the policy is defining permitted usage rather than correcting an AI objective.",
      "C": "Appropriate use policies define acceptable and prohibited ways to use AI. Limiting AI to internal drafts and requiring human review before customer-facing use establishes acceptable-use boundaries.",
      "D": "Data quality issues involve inaccurate, incomplete, biased, or otherwise poor data used by or produced for an AI system, which is not the focus of this policy."
    },
    "tip": "Rules about where, when, and how employees may use AI are appropriate-use rules. CompTIA A+ 220-1202 - Basic AI Concepts Page 4"
  },
  {
    "topic": "Basic AI Concepts",
    "number": 3,
    "question": "A technical writer copies AI-generated troubleshooting steps into a public document without citation and submits the entire guide as original work. This behavior can be most accurately described as an example of:",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Copyright infringement",
      "B": "Plagiarism",
      "C": "IP theft",
      "D": "Data misappropriation"
    },
    "explanations": {
      "A": "Copyright infringement involves violating a copyright owner's exclusive legal rights. The scenario specifically emphasizes presenting uncredited material as one's own work.",
      "B": "Plagiarism is presenting content created by another source as original work without proper attribution. Submitting AI-generated material as one's own without citation fits that description in the source.",
      "C": "Intellectual-property theft is a broader concept involving unauthorized taking or misuse of protected intellectual property; the source identifies the uncredited presentation of content as plagiarism.",
      "D": "Data misappropriation concerns improper taking or use of data, not the failure to credit generated written content."
    },
    "tip": "Presenting material from another source as your own without attribution = plagiarism. CompTIA A+ 220-1202 - Basic AI Concepts Page 5"
  },
  {
    "topic": "Basic AI Concepts",
    "number": 4,
    "question": "A predictive maintenance AI consistently flags hardware from one specific manufacturer for replacement, despite telemetry data showing those units are functioning within normal parameters. The system was trained primarily on repair logs from a period when that manufacturer had a known temporary defect. This type of error in the AI's output can be best described as:",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Hallucinations",
      "B": "Bias",
      "C": "Context loss",
      "D": "Alignment issue"
    },
    "explanations": {
      "A": "Hallucination is when an AI generates unsupported or fabricated information. Here, the repeated error is tied to skewed historical training data.",
      "B": "Bias can occur when unrepresentative or skewed training data systematically influences AI decisions. Training mostly on records from a temporary defect period causes unfairly negative predictions about that manufacturer.",
      "C": "Context loss involves failing to retain or use relevant information from the interaction or task; the scenario instead describes a systematic training-data influence.",
      "D": "An alignment issue concerns AI behavior not matching intended goals or values. The scenario more specifically shows biased output caused by the data used for training."
    },
    "tip": "If skewed training history causes a repeated unfair pattern in AI decisions, think bias. CompTIA A+ 220-1202 - Basic AI Concepts Page 6"
  },
  {
    "topic": "Basic AI Concepts",
    "number": 5,
    "question": "A Windows help desk technician queries a generative AI tool for steps to troubleshoot a printer connectivity issue. The AI provides a detailed solution referencing a non-existent firmware version and a specific registry key that is not present in Windows. Which AI-related problem does this scenario illustrate?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Model drift",
      "B": "Evaluation gap",
      "C": "Overfitting",
      "D": "Hallucinations"
    },
    "explanations": {
      "A": "Model drift describes a model's performance changing over time as real-world conditions or data patterns change.",
      "B": "An evaluation gap refers to shortcomings in how a system is tested or measured; the scenario directly describes invented technical details in the response.",
      "C": "Overfitting occurs when a model learns training examples too specifically and performs poorly on new data; it does not specifically describe fabricated firmware or registry information.",
      "D": "AI hallucinations are plausible-sounding but false or unsupported outputs. Inventing a firmware version and Windows registry key is a clear example."
    },
    "tip": "When generative AI confidently invents technical facts that do not exist, that is a hallucination. CompTIA A+ 220-1202 - Basic AI Concepts Page 7"
  },
  {
    "topic": "Basic AI Concepts",
    "number": 6,
    "question": "What is the most reliable way to mitigate the risks associated with AI accuracy limitations?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Prompting the AI to provide a confidence score for its answers",
      "B": "Increasing the token limit of AI-generated responses",
      "C": "Verifying all AI-generated output against relevant official sources",
      "D": "Cross-referencing the output with other generative AI tools"
    },
    "explanations": {
      "A": "A model-generated confidence score can itself be unreliable and does not independently prove that the answer is accurate.",
      "B": "A larger response limit allows more text but does not guarantee that the content is factual.",
      "C": "Independent verification against authoritative documentation directly checks whether AI-generated claims are accurate before they are trusted or acted upon.",
      "D": "Other AI tools can repeat the same error or generate different unsupported answers, so agreement between models is not as reliable as checking authoritative sources."
    },
    "tip": "AI output is a starting point; verify important facts with official documentation before acting on them. CompTIA A+ 220-1202 - Basic AI Concepts Page 8"
  },
  {
    "topic": "Basic AI Concepts",
    "number": 7,
    "question": "Which of the answers listed below describe the characteristics of private AI deployments? (Select 3 answers)",
    "answers": [
      "C",
      "D",
      "E"
    ],
    "options": {
      "A": "User inputs may be used to improve the provider's AI systems",
      "B": "Models are trained on broad, unvetted public internet datasets",
      "C": "User inputs are isolated and excluded from external model training",
      "D": "Organizations maintain exclusive control over data security",
      "E": "Models are trained on specific, internally vetted data sources",
      "F": "Service providers manage data storage in a multi-tenant cloud"
    },
    "explanations": {
      "A": "This is associated in the source with public provider-hosted AI, where submitted data may be handled under the provider's service policies.",
      "B": "The source associates broad public-internet training with public AI rather than a controlled private deployment.",
      "C": "Private AI deployments can isolate organizational inputs so they are not fed into an external provider's general model-training process.",
      "D": "Private deployments give the organization greater direct control over how its AI data, access, and security are managed.",
      "E": "A private deployment can use carefully selected internal or approved data tailored to the organization's needs.",
      "F": "Multi-tenant provider-managed storage is associated in the source with public AI deployments rather than exclusive private control."
    },
    "tip": "Private AI emphasizes isolated inputs, organization-controlled security, and internally vetted data. CompTIA A+ 220-1202 - Basic AI Concepts Page 9"
  },
  {
    "topic": "Basic AI Concepts",
    "number": 8,
    "question": "Which of the answers listed below describe the characteristics of public AI deployments? (Select 3 answers)",
    "answers": [
      "D",
      "E",
      "F"
    ],
    "options": {
      "A": "Models are trained on specific, internally vetted data sources",
      "B": "Organizations maintain exclusive control over data security",
      "C": "User inputs are isolated and excluded from external model training",
      "D": "Service providers manage data storage in a multi-tenant cloud",
      "E": "Models are trained on broad, unvetted public internet datasets",
      "F": "User inputs may be used to improve the provider's AI systems"
    },
    "explanations": {
      "A": "The source identifies internally vetted training data as a characteristic of private AI deployments.",
      "B": "Exclusive organizational control is associated with private AI rather than a provider-operated public service.",
      "C": "The source treats isolated inputs excluded from external training as a private-AI characteristic.",
      "D": "Public AI services are commonly provider-hosted, with infrastructure and storage shared across customers through multi-tenant cloud environments.",
      "E": "The source identifies broad public-internet training data as a characteristic of public AI deployments.",
      "F": "Under the source's public-AI model, submitted inputs may be used by the service provider to improve its AI systems, depending on the service's policies."
    },
    "tip": "Public AI is provider-managed and shared; check the service's data-use policy before entering organizational information."
  },
  {
    "topic": "Change Management Procedures",
    "number": 1,
    "question": "Which of the answers listed below refers to a documented procedure that reverses a change and restores the system to its previous known-good configuration if the change fails?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Rollback plan",
      "B": "System restore point",
      "C": "Failover procedure",
      "D": "Backup plan"
    },
    "explanations": {
      "A": "A rollback plan documents the exact steps for undoing a failed change and returning the system to the known-good state that existed before implementation.",
      "B": "A restore point is a Windows recovery mechanism, not the broader documented change-management procedure for reversing an organizational change.",
      "C": "Failover moves services to a standby resource when the primary resource fails; it does not necessarily reverse the change that caused the problem.",
      "D": "A backup plan explains how copies of data are created and protected. Backups may support recovery, but they are not the procedure for undoing a change."
    },
    "tip": "Rollback plan = the prepared path back to the last known-good configuration. CompTIA A+ 220-1202 - Change Management Procedures Page 3"
  },
  {
    "topic": "Change Management Procedures",
    "number": 2,
    "question": "A documented process for creating and storing copies of data so that the data can be restored if it becomes lost, corrupted, or damaged is known as:",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Backup plan",
      "B": "Data retention policy",
      "C": "Version control",
      "D": "Rollback plan"
    },
    "explanations": {
      "A": "A backup plan defines how data copies are created, stored, protected, and made available for restoration after loss, corruption, or damage.",
      "B": "A retention policy defines how long information must be kept and when it may be deleted; it does not describe the backup creation process.",
      "C": "Version control tracks revisions to files or source code and supports reverting changes, but it is not the general process for backing up organizational data.",
      "D": "A rollback plan reverses a failed system change. It is not the routine process for creating and storing recoverable copies of data."
    },
    "tip": "Backup plan protects recoverable copies; rollback plan reverses a failed change. CompTIA A+ 220-1202 - Change Management Procedures Page 4"
  },
  {
    "topic": "Change Management Procedures",
    "number": 3,
    "question": "Which of the following terms describes the practice of implementing and verifying a change in an isolated, non-production environment specifically designed to prevent any impact on live systems?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Containerization",
      "B": "User acceptance testing",
      "C": "Virtualization",
      "D": "Sandbox testing"
    },
    "explanations": {
      "A": "Containerization packages applications and dependencies into isolated runtime units, but it does not by itself describe the change-management testing practice in the question.",
      "B": "User acceptance testing checks whether a system meets user or business needs; it is not defined primarily by isolation from production.",
      "C": "Virtualization creates virtual machines or resources, which can support testing, but it is a technology rather than the specific change-testing practice requested.",
      "D": "Sandbox testing verifies a proposed change in an isolated environment so mistakes or failures do not affect live production systems."
    },
    "tip": "Sandbox = safe isolation for testing changes before they can affect production. CompTIA A+ 220-1202 - Change Management Procedures Page 5"
  },
  {
    "topic": "Change Management Procedures",
    "number": 4,
    "question": "To ensure accountability, a documented business process must identify the specific staff members responsible for each stage of its execution.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Assigning named or clearly defined responsible staff establishes ownership and accountability for each stage of the process.",
      "B": "Without identified responsibilities, it is harder to determine who must perform, approve, verify, or document each stage of the process."
    },
    "tip": "Formal processes need clear ownership so every step has someone accountable for it. CompTIA A+ 220-1202 - Change Management Procedures Page 6"
  },
  {
    "topic": "Change Management Procedures",
    "number": 5,
    "question": "A technician needs to upgrade the firmware on all backbone switches in the data center. Which document must be submitted first to initiate the formal change management process?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Risk assessment report",
      "B": "Change request form",
      "C": "Firmware compatibility checklist",
      "D": "Implementation plan"
    },
    "explanations": {
      "A": "Risk assessment is part of evaluating a proposed change, but the formal process first needs a request that identifies and proposes the change.",
      "B": "The change request form formally initiates the process by documenting the proposed change so it can be reviewed, assessed, approved, scheduled, and tracked.",
      "C": "A compatibility checklist can support planning and validation, but it does not formally initiate change management.",
      "D": "The implementation plan describes how an approved change will be performed. It follows the initial submission of the change request."
    },
    "tip": "Formal change management starts when the proposed work is entered on a change request. CompTIA A+ 220-1202 - Change Management Procedures Page 7"
  },
  {
    "topic": "Change Management Procedures",
    "number": 6,
    "question": "An administrator is requesting to replace an aging file server with a new high-performance storage array. In the change request, the administrator justifies the replacement by noting that the current server is out of warranty and experiencing frequent hardware timeouts. Which part of the change management process does this detail satisfy?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Change type",
      "B": "Identification of affected systems",
      "C": "Purpose of the change",
      "D": "Risk analysis"
    },
    "explanations": {
      "A": "Change type classifies the request, such as standard, normal, or emergency; it does not explain why the change is needed.",
      "B": "Affected-systems information lists the equipment or services touched by the change, rather than the business or technical reason for making it.",
      "C": "The out-of-warranty status and repeated hardware timeouts explain why the replacement is necessary, which establishes the purpose or justification for the change.",
      "D": "Risk analysis evaluates possible negative outcomes of making the change; the details given instead explain the reason the change is being requested."
    },
    "tip": "Purpose answers 'Why are we making this change?' CompTIA A+ 220-1202 - Change Management Procedures Page 8"
  },
  {
    "topic": "Change Management Procedures",
    "number": 7,
    "question": "An IT team is migrating a local file share to a cloud-based storage provider. The request form lists the specific folders to be moved and identifies several archive folders that will remain on-premises. What part of the change management process is being detailed?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Scope of the change",
      "B": "Purpose of the change",
      "C": "Change type",
      "D": "Implementation plan"
    },
    "explanations": {
      "A": "Scope defines the boundaries of the work - what is included and what is excluded. Listing folders that will move and folders that will remain does exactly that.",
      "B": "Purpose explains why the migration is being performed, not which folders are included or excluded.",
      "C": "Change type classifies the request by process category and does not define the content being migrated.",
      "D": "An implementation plan gives the steps for performing the migration; simply defining included and excluded folders describes scope."
    },
    "tip": "Scope draws the boundary around what the change will and will not touch. CompTIA A+ 220-1202 - Change Management Procedures Page 9"
  },
  {
    "topic": "Change Management Procedures",
    "number": 8,
    "question": "A technician is performing a monthly update of antivirus definitions on all corporate workstations. This process is documented, low risk, and follows a pre-approved procedure. How should this request be classified within the formal change management process?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Standard change",
      "B": "Normal change",
      "C": "Routine change",
      "D": "Emergency change"
    },
    "explanations": {
      "A": "A standard change is routine, low risk, well understood, documented, and pre-approved, which matches the recurring antivirus definition update.",
      "B": "A normal change generally requires case-by-case assessment and approval rather than relying on an established pre-approved procedure.",
      "C": "Although the work is routine in ordinary language, the formal category identified by the quiz is standard change.",
      "D": "Emergency changes address urgent situations requiring accelerated handling; a scheduled monthly update is not an emergency."
    },
    "tip": "Repeatable + low risk + documented + pre-approved = standard change. CompTIA A+ 220-1202 - Change Management Procedures Page 10"
  },
  {
    "topic": "Change Management Procedures",
    "number": 9,
    "question": "An organization plans to move its entire on-premises email system to a cloud-based provider. This process requires formal approval and risk assessment. According to change management procedures, which change type does this represent?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Standard change",
      "B": "Normal change",
      "C": "High-impact change",
      "D": "Emergency change"
    },
    "explanations": {
      "A": "Standard changes are pre-approved, routine, and low risk. A complete email migration is substantial and requires individual assessment.",
      "B": "A normal change is planned but requires formal review, risk assessment, and approval because it is not a pre-approved routine activity.",
      "C": "The migration may indeed have high impact, but the formal change category supplied by the quiz is normal change.",
      "D": "The migration is planned rather than an urgent response to an immediate incident or critical vulnerability."
    },
    "tip": "Planned work that still needs individual approval and risk review is a normal change. CompTIA A+ 220-1202 - Change Management Procedures Page 11"
  },
  {
    "topic": "Change Management Procedures",
    "number": 10,
    "question": "A critical security vulnerability is discovered that allows unauthorized remote access to the primary file server. An immediate patch must be applied outside the regular maintenance window. Which formal change category should the technician select on the change request form?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Standard change",
      "B": "Normal change",
      "C": "High-priority change",
      "D": "Emergency change"
    },
    "explanations": {
      "A": "A standard change is routine and pre-approved; an urgent response to a critical vulnerability does not fit that process.",
      "B": "Normal changes follow the regular review and scheduling process, which is too slow for the immediate security exposure described.",
      "C": "This describes urgency informally, but the formal category in the source is emergency change.",
      "D": "An emergency change is used when urgent action is necessary to address a serious incident, outage, or security vulnerability and normal scheduling cannot wait."
    },
    "tip": "Critical threat + immediate action outside the normal window = emergency change. CompTIA A+ 220-1202 - Change Management Procedures Page 12"
  },
  {
    "topic": "Change Management Procedures",
    "number": 11,
    "question": "A technician's request to perform a non-urgent database optimization is denied because the organization is currently performing a fiscal year-end audit. Which formal change management concept is being applied to this request?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Scheduled outage",
      "B": "Maintenance window",
      "C": "Change freeze",
      "D": "Operational hold"
    },
    "explanations": {
      "A": "A scheduled outage is planned service downtime, not a period in which non-emergency changes are restricted.",
      "B": "A maintenance window is an authorized time when changes may be performed; the scenario instead describes a period when changes are deliberately blocked.",
      "C": "A change freeze temporarily restricts nonessential changes during sensitive periods such as audits, major business events, or peak operations to reduce risk.",
      "D": "This phrase may describe a pause generally, but the formal change-management concept selected in the quiz is change freeze."
    },
    "tip": "Change freeze = temporarily stop nonessential changes during a sensitive business period. CompTIA A+ 220-1202 - Change Management Procedures Page 13"
  },
  {
    "topic": "Change Management Procedures",
    "number": 12,
    "question": "An organization has a policy that all non-emergency software patches must be deployed on Tuesday nights between 11:00 PM and 3:00 AM. This type of authorized timeframe is officially classified as:",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Controlled downtime",
      "B": "Scheduled outage",
      "C": "Maintenance window",
      "D": "Policy-driven delay"
    },
    "explanations": {
      "A": "Controlled downtime describes managed service interruption, but it is not the formal term for the authorized recurring period in which maintenance work is permitted.",
      "B": "A scheduled outage is a planned service interruption. A maintenance window may allow work even when a complete outage is not required.",
      "C": "A maintenance window is the approved period during which planned system changes, updates, or maintenance activities are authorized to occur.",
      "D": "This is not the formal change-management term for an authorized maintenance timeframe."
    },
    "tip": "Maintenance window = the approved clock time for planned IT changes. CompTIA A+ 220-1202 - Change Management Procedures Page 14"
  },
  {
    "topic": "Change Management Procedures",
    "number": 13,
    "question": "An administrator is preparing a change request to update the firmware on a core network switch. The request includes a list of all VLANs and servers that will lose connectivity during the reboot. Which part of the change request form should contain this information?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Request justification",
      "B": "Implementation plan",
      "C": "Affected systems/impact",
      "D": "Scope of the change"
    },
    "explanations": {
      "A": "Justification explains why the firmware update should be performed, not which systems will be interrupted.",
      "B": "The implementation plan contains the steps for applying the update, while the listed VLANs and servers describe who or what will be affected.",
      "C": "This section identifies the systems, services, users, or business functions that could be disrupted by the proposed change.",
      "D": "Scope defines what work is included in the change. The question specifically focuses on the consequences of the reboot for connected systems."
    },
    "tip": "If the form asks 'What will be disrupted?', document it under affected systems/impact. CompTIA A+ 220-1202 - Change Management Procedures Page 15"
  },
  {
    "topic": "Change Management Procedures",
    "number": 14,
    "question": "A proposed firmware update could cause temporary outages for several departments. The change request form includes a dedicated section for documenting the assessed likelihood of potential negative outcomes. Which section should record this information?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Impact analysis",
      "B": "Vulnerability assessment",
      "C": "Downtime estimate",
      "D": "Risk level"
    },
    "explanations": {
      "A": "Impact analysis focuses on the consequences and affected services if the change causes disruption; the question specifically asks for the assessed likelihood of negative outcomes.",
      "B": "A vulnerability assessment identifies security weaknesses and is not the general change-management field for probability of adverse results.",
      "C": "A downtime estimate predicts how long a service interruption may last, not how likely a negative outcome is.",
      "D": "Risk level records the assessed likelihood and seriousness of adverse outcomes associated with the proposed change."
    },
    "tip": "Risk level expresses the chance and seriousness of something going wrong. CompTIA A+ 220-1202 - Change Management Procedures Page 16"
  },
  {
    "topic": "Change Management Procedures",
    "number": 15,
    "question": "A technician submits a normal change request to upgrade the operating system on all production servers. Which element of the change management process ensures that the change is formally authorized?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Request justification",
      "B": "Managerial sign-off",
      "C": "Assignment of responsible staff members",
      "D": "Change board approvals"
    },
    "explanations": {
      "A": "Justification explains why the upgrade is needed but does not itself grant authorization.",
      "B": "A manager may participate in approval, but the source specifically identifies formal change board approvals as the authorization mechanism for this normal change.",
      "C": "Assigning staff establishes accountability for execution but does not mean the proposed change has been formally approved.",
      "D": "Formal approval by the designated change board authorizes the normal change after its purpose, scope, risk, and implementation details have been reviewed."
    },
    "tip": "A normal change is not authorized until the required change-approval body approves it. CompTIA A+ 220-1202 - Change Management Procedures Page 17"
  },
  {
    "topic": "Change Management Procedures",
    "number": 16,
    "question": "Which scenario best represents the implementation phase of the change management process?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Applying a configuration update to a server according to a documented procedure",
      "B": "Reviewing the proposed technical steps with another administrator for quality assurance",
      "C": "Testing the change in a non-production environment before deployment",
      "D": "Validating that the update resolves the documented bug after the work is complete"
    },
    "explanations": {
      "A": "Implementation is the phase in which the approved change is actually carried out on the target systems according to the approved plan.",
      "B": "Peer review occurs before implementation so the plan can be checked before production changes are made.",
      "C": "Pre-production testing validates the change before the implementation phase.",
      "D": "Post-change validation occurs after implementation to confirm the change achieved its intended result."
    },
    "tip": "Implementation is the moment the approved change is actually applied. CompTIA A+ 220-1202 - Change Management Procedures Page 18"
  },
  {
    "topic": "Change Management Procedures",
    "number": 17,
    "question": "In the change management lifecycle, formal peer review of a proposed change typically occurs:",
    "answers": [
      "C"
    ],
    "options": {
      "A": "During sandbox testing of the proposed change",
      "B": "After the change has failed in production",
      "C": "Before the implementation phase",
      "D": "After the change has been fully implemented"
    },
    "explanations": {
      "A": "Sandbox testing evaluates the change in isolation; peer review is a separate review of the proposal or technical plan.",
      "B": "Peer review is intended to catch issues before production implementation, not only after a failure.",
      "C": "Peer review normally occurs before implementation so another qualified person can evaluate the proposed steps, risks, and technical approach before live systems are changed.",
      "D": "Reviewing only after implementation would remove the preventive value of peer review."
    },
    "tip": "Peer review belongs before production implementation so problems can be caught early. CompTIA A+ 220-1202 - Change Management Procedures Page 19"
  },
  {
    "topic": "Change Management Procedures",
    "number": 18,
    "question": "In a standard change management workflow, end-user acceptance typically takes place:",
    "answers": [
      "B"
    ],
    "options": {
      "A": "During the impact analysis phase, before any changes are applied to systems",
      "B": "In a test environment before full production deployment",
      "C": "During the implementation phase, while the change is being applied",
      "D": "After the change is implemented, once all systems are live in production"
    },
    "explanations": {
      "A": "Impact analysis identifies expected consequences and affected systems; users cannot meaningfully accept a working change before it has been tested.",
      "B": "User acceptance testing lets representative users verify that the change meets expected business and functional requirements before broad production deployment.",
      "C": "Implementation is when the technical change is executed; acceptance should be evaluated in a controlled test state rather than during the live modification.",
      "D": "Waiting until full production deployment makes acceptance too late to prevent an unsuitable change from reaching all users."
    },
    "tip": "User acceptance verifies the change in testing before it is released broadly to production."
  },
  {
    "topic": "Common OS Types",
    "number": 1,
    "question": "Which workstation operating system is most widely adopted in business environments due to its strong compatibility with enterprise applications, management tools, and network infrastructure?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Windows",
      "B": "Linux",
      "C": "macOS",
      "D": "Chrome OS"
    },
    "explanations": {
      "A": "Windows is widely used on business workstations and supports a large range of enterprise applications, centralized management tools, Active Directory environments, and common corporate hardware.",
      "B": "Linux is common on servers and technical workstations, but it is not as broadly adopted as the standard desktop OS in typical business environments.",
      "C": "macOS is used in many organizations, especially creative environments, but it runs on Apple hardware and has a smaller enterprise workstation footprint than Windows.",
      "D": "Chrome OS focuses on lightweight, web-centered computing and does not provide the same broad compatibility with traditional enterprise desktop applications."
    },
    "tip": "Business workstation questions usually point to Windows when enterprise application and management compatibility are emphasized. CompTIA A+ 220-1202 - Common OS Types Page 3"
  },
  {
    "topic": "Common OS Types",
    "number": 2,
    "question": "A software development company is setting up new workstations for programmers who frequently use command-line tools, need extensive system configuration capabilities, and prefer a fully open-source platform for building and testing applications. Which OS is best suited for their needs?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Chrome OS",
      "B": "macOS",
      "C": "Linux",
      "D": "Windows"
    },
    "explanations": {
      "A": "Chrome OS is designed primarily around web and cloud applications and is not the fully configurable general-purpose development platform described here.",
      "B": "macOS provides strong command-line and development tools, but the operating system itself is not a fully open-source platform.",
      "C": "Linux is open source, provides powerful command-line tools, and gives developers extensive control over system configuration, packages, services, and development environments.",
      "D": "Windows supports development well, but it is proprietary rather than a fully open-source operating system."
    },
    "tip": "Open source + command line + deep system control strongly points to Linux. CompTIA A+ 220-1202 - Common OS Types Page 4"
  },
  {
    "topic": "Common OS Types",
    "number": 3,
    "question": "Which workstation OS runs natively only on Apple hardware?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "CentOS",
      "B": "macOS",
      "C": "ReactOS",
      "D": "Chrome OS"
    },
    "explanations": {
      "A": "CentOS is a Linux distribution and can run on compatible non-Apple computer hardware.",
      "B": "macOS is Apple's workstation operating system and is designed to run natively on Apple Mac hardware.",
      "C": "ReactOS is an independent operating-system project intended for PC-compatible hardware and is not tied to Apple computers.",
      "D": "Chrome OS is used on Chromebook-class systems from multiple manufacturers rather than only Apple hardware."
    },
    "tip": "macOS belongs to Mac hardware; iOS belongs to iPhone; iPadOS belongs to iPad. CompTIA A+ 220-1202 - Common OS Types Page 5"
  },
  {
    "topic": "Common OS Types",
    "number": 4,
    "question": "Which operating system is designed for lightweight, low-cost laptops optimized for web-based applications?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Chrome OS",
      "B": "Linux",
      "C": "macOS",
      "D": "Windows"
    },
    "explanations": {
      "A": "Chrome OS is designed around Chrome, web applications, cloud services, and lightweight Chromebook hardware, which fits low-cost web-focused laptops.",
      "B": "Linux can run efficiently on inexpensive hardware, but this description specifically refers to the Chromebook-style web-focused platform.",
      "C": "macOS is designed for Apple Mac computers and is not targeted at low-cost web-centered laptops.",
      "D": "Windows supports a broad range of traditional desktop applications and is not specifically designed around lightweight web-only laptops."
    },
    "tip": "Chromebook = Chrome OS = web and cloud focused. CompTIA A+ 220-1202 - Common OS Types Page 6"
  },
  {
    "topic": "Common OS Types",
    "number": 5,
    "question": "Which mobile operating system restricts app installation strictly to the App Store unless the device is modified?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "iOS",
      "B": "Android",
      "C": "Chrome OS",
      "D": "macOS",
      "E": "Symbian",
      "F": "webOS"
    },
    "explanations": {
      "A": "iOS normally uses Apple's App Store as its controlled application-distribution source; bypassing normal restrictions requires modification or other special mechanisms.",
      "B": "Android can allow installation from third-party sources when the appropriate permission is enabled.",
      "C": "Chrome OS is primarily a Chromebook operating system rather than the mobile OS described by this question.",
      "D": "macOS is a workstation operating system for Mac computers, not Apple's iPhone mobile OS.",
      "E": "Symbian is an older mobile operating system and is not the current Apple App Store-controlled platform.",
      "F": "webOS is not Apple's iPhone operating system and does not match the App Store restriction described."
    },
    "tip": "iPhone apps normally come through Apple's App Store; Android is more flexible about third-party sources. CompTIA A+ 220-1202 - Common OS Types Page 7"
  },
  {
    "topic": "Common OS Types",
    "number": 6,
    "question": "Which mobile OS is widely adopted by device manufacturers for its open-source base and flexible customization options?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Chrome OS",
      "B": "Android"
    },
    "explanations": {
      "A": "Chrome OS is mainly associated with Chromebook computers and is not the widely customized smartphone OS described.",
      "B": "Android has an open-source base and is used by many manufacturers that customize interfaces, features, and bundled software for their devices."
    },
    "tip": "Many phone manufacturers + customization + open-source base = Android. CompTIA A+ 220-1202 - Common OS Types Page 8"
  },
  {
    "topic": "Common OS Types",
    "number": 7,
    "question": "Which device type is iPadOS specifically developed for?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Tablet",
      "B": "Smartphone",
      "C": "Laptop",
      "D": "Smartwatch"
    },
    "explanations": {
      "A": "iPadOS is Apple's operating system specifically designed for the iPad family of tablet computers.",
      "B": "Apple smartphones use iOS rather than iPadOS.",
      "C": "Apple laptops use macOS, not iPadOS.",
      "D": "Apple Watch devices use watchOS."
    },
    "tip": "The product name is built into the OS name: iPad -> iPadOS. CompTIA A+ 220-1202 - Common OS Types Page 9"
  },
  {
    "topic": "Common OS Types",
    "number": 8,
    "question": "Which mobile OS is exclusive to Apple's iPhones?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "iPadOS",
      "B": "macOS",
      "C": "iOS",
      "D": "watchOS"
    },
    "explanations": {
      "A": "iPadOS is designed specifically for Apple iPad tablets.",
      "B": "macOS is Apple's workstation operating system for Mac computers.",
      "C": "iOS is Apple's mobile operating system used by iPhones.",
      "D": "watchOS is designed for Apple Watch devices."
    },
    "tip": "iPhone = iOS, iPad = iPadOS, Mac = macOS, Apple Watch = watchOS. CompTIA A+ 220-1202 - Common OS Types Page 10"
  },
  {
    "topic": "Common OS Types",
    "number": 9,
    "question": "A digital artist needs a mobile operating system that supports advanced stylus features. Which OS is the best fit?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "iPadOS",
      "B": "iOS",
      "C": "macOS",
      "D": "Chrome OS"
    },
    "explanations": {
      "A": "iPadOS is designed for iPads and supports Apple Pencil features used for drawing, handwriting, pressure-sensitive creative work, and other stylus-based workflows.",
      "B": "iOS is designed for iPhones and is not the Apple platform centered on large-screen Apple Pencil workflows.",
      "C": "macOS is a desktop/laptop operating system rather than the mobile tablet OS requested.",
      "D": "Some Chrome OS devices support styluses, but the source identifies iPadOS as the best fit for advanced mobile stylus use."
    },
    "tip": "Advanced Apple Pencil work belongs with iPadOS on an iPad. CompTIA A+ 220-1202 - Common OS Types Page 11"
  },
  {
    "topic": "Common OS Types",
    "number": 10,
    "question": "What are the key characteristics of Android OS? (Select 3 answers)",
    "answers": [
      "C",
      "D",
      "F"
    ],
    "options": {
      "A": "Limited customization options",
      "B": "Closed ecosystem",
      "C": "Apps installable from third-party sources (if enabled)",
      "D": "Open-source platform",
      "E": "Apps limited only to official App Store",
      "F": "High level of customization"
    },
    "explanations": {
      "A": "Android is known for extensive customization by both users and device manufacturers, so limited customization is the opposite of a key characteristic.",
      "B": "Android has an open-source base and is used across many manufacturers, so it is not defined as a closed ecosystem.",
      "C": "Android can permit app installation outside the official store when the user enables the required permission for the source.",
      "D": "Android is based on the Android Open Source Project, which provides an open-source foundation for the platform.",
      "E": "Android is not restricted only to one official app store because third-party installation can be enabled.",
      "F": "Android allows substantial customization of the interface, defaults, launchers, widgets, and manufacturer-specific features."
    },
    "tip": "Android = open-source base, high customization, and optional third-party app installation."
  },
  {
    "topic": "Common PC Security Issues Troubleshooting",
    "number": 1,
    "question": "A Windows PC suddenly cannot access network shares or the internet. The adapter has connectivity and the switch port works for other devices. Malware may have altered a system file that redirects domain names or blocks name resolution. Which file is most likely responsible?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "tcpip.sys",
      "B": "win.ini",
      "C": "hosts",
      "D": "system.ini"
    },
    "explanations": {
      "A": "tcpip.sys is a Windows networking driver. Damage to it can cause networking problems, but it is not the local text file used to manually map host names to IP addresses.",
      "B": "win.ini is a legacy Windows configuration file and is not responsible for modern hostname-to-IP mappings.",
      "C": "The Windows hosts file can manually map domain or host names to IP addresses before normal DNS resolution. Malware can alter it to redirect users to malicious addresses or prevent selected names from resolving correctly.",
      "D": "system.ini is a legacy Windows configuration file and does not provide the hostname mappings described in the question."
    },
    "tip": "Unexpected domain redirects on one PC - inspect the hosts file for unauthorized name-to-IP entries. CompTIA A+ 220-1202 - Common PC Security Issues Troubleshooting Page 3"
  },
  {
    "topic": "Common PC Security Issues Troubleshooting",
    "number": 2,
    "question": "A user's PC displays repeated desktop alerts claiming the antivirus subscription has expired, but the antivirus dashboard shows it is active. What is the most appropriate troubleshooting step?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Turn the app notifications off",
      "B": "Perform a full malware scan",
      "C": "Ignore the alerts",
      "D": "Reinstall the antivirus software"
    },
    "explanations": {
      "A": "Disabling notifications would only hide the symptom and could leave malicious software active on the system.",
      "B": "False antivirus-expiration warnings are a common scareware or malware symptom. A full scan checks whether malicious software is generating the fraudulent alerts.",
      "C": "Ignoring repeated false security warnings does not identify or remove their cause.",
      "D": "The legitimate antivirus already reports an active subscription, so reinstalling it is less targeted than checking the PC for malware."
    },
    "tip": "Security warnings that disagree with the real antivirus status can be scareware - scan the system. CompTIA A+ 220-1202 - Common PC Security Issues Troubleshooting Page 4"
  },
  {
    "topic": "Common PC Security Issues Troubleshooting",
    "number": 3,
    "question": "Many personal files suddenly have unfamiliar extensions, folders appear missing, and the files cannot be opened. After disconnecting the PC from the network, what should the technician do next to identify the cause?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Restore the files from backup",
      "B": "Perform a full malware scan",
      "C": "Adjust user permissions",
      "D": "Attempt to repair the file system"
    },
    "explanations": {
      "A": "Restoring before identifying and removing the cause could expose restored data to the same threat and may overwrite useful evidence.",
      "B": "Renamed, inaccessible files are consistent with malicious encryption or file tampering. After network isolation, scanning helps identify the malware responsible before recovery is attempted.",
      "C": "Permission problems do not normally rename many files with unfamiliar extensions.",
      "D": "Filesystem repair targets structural disk errors; the mass renaming and inaccessible files described more strongly indicate malware activity."
    },
    "tip": "Suspected ransomware: isolate the PC first, identify/remove the threat, then recover clean data. CompTIA A+ 220-1202 - Common PC Security Issues Troubleshooting Page 5"
  },
  {
    "topic": "Common PC Security Issues Troubleshooting",
    "number": 4,
    "question": "A Windows PC displays frequent alerts requesting activation of an unknown system protection tool. What step should be taken?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Disable OS notifications",
      "B": "Ignore the alerts",
      "C": "Update Windows",
      "D": "Run a full malware scan"
    },
    "explanations": {
      "A": "Turning off notifications can hide malicious alerts without removing the software producing them.",
      "B": "Unknown security-product prompts may be scareware, so ignoring them leaves the potential threat unresolved.",
      "C": "Windows updates improve security but do not directly investigate an unknown protection tool already generating suspicious prompts.",
      "D": "Unexpected prompts to activate an unfamiliar security product are characteristic of rogue security software or scareware. A full malware scan is the appropriate response."
    },
    "tip": "An unfamiliar 'security tool' demanding activation is a malware warning sign, not a product to trust. CompTIA A+ 220-1202 - Common PC Security Issues Troubleshooting Page 6"
  },
  {
    "topic": "Common PC Security Issues Troubleshooting",
    "number": 5,
    "question": "A PC cannot connect to Microsoft Update servers. Which built-in automated utility should be used to diagnose common update problems?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Windows Update service",
      "B": "System File Checker",
      "C": "Windows Update Troubleshooter",
      "D": "Network Troubleshooter"
    },
    "explanations": {
      "A": "The Windows Update service performs update-related background operations, but it is not the automated diagnostic utility requested.",
      "B": "SFC checks protected Windows system files for corruption; it is not specifically the built-in update troubleshooting wizard.",
      "C": "The Windows Update Troubleshooter is designed to automatically check and repair common Windows Update configuration and connectivity problems.",
      "D": "A network troubleshooter can diagnose general connectivity, but the question specifically asks for the tool dedicated to Microsoft Update problems."
    },
    "tip": "Update-specific failure = start with the Windows Update Troubleshooter. CompTIA A+ 220-1202 - Common PC Security Issues Troubleshooting Page 7"
  },
  {
    "topic": "Common PC Security Issues Troubleshooting",
    "number": 6,
    "question": "Which troubleshooting steps would help resolve random or frequent pop-ups in a web browser? (Select 3 answers)",
    "answers": [
      "A",
      "B",
      "C"
    ],
    "options": {
      "A": "Remove suspicious browser extensions",
      "B": "Perform a malware removal scan",
      "C": "Reset the browser to its default settings",
      "D": "Use Task Manager to end browser processes",
      "E": "Disable the browser's JavaScript engine"
    },
    "explanations": {
      "A": "Malicious or unwanted extensions can inject advertisements, redirect pages, and create repeated pop-ups.",
      "B": "Adware and other malware can generate browser pop-ups even when the browser's normal settings appear correct.",
      "C": "A browser reset can remove unwanted configuration changes and restore settings that were altered by adware or potentially unwanted software.",
      "D": "Ending the browser stops the pop-ups temporarily, but they can return as soon as the browser is reopened because the underlying cause remains.",
      "E": "Disabling JavaScript can break many legitimate websites and is not a standard targeted fix for persistent pop-ups."
    },
    "tip": "Persistent pop-ups: check extensions, scan for malware, and reset altered browser settings. CompTIA A+ 220-1202 - Common PC Security Issues Troubleshooting Page 8"
  },
  {
    "topic": "Common PC Security Issues Troubleshooting",
    "number": 7,
    "question": "A web browser warns that a website's SSL/TLS certificate is not trusted. What is the most likely cause according to this quiz?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "The website contains malware",
      "B": "The browser's proxy settings are incorrect",
      "C": "The website uses HTTP instead of HTTPS",
      "D": "The certificate has expired"
    },
    "explanations": {
      "A": "A site can contain malware with or without a valid certificate. Certificate trust warnings concern certificate validation rather than page content.",
      "B": "Proxy errors can interfere with connectivity, but they do not best explain the certificate condition selected in the source.",
      "C": "An HTTP site does not present an SSL/TLS certificate to validate, so an untrusted-certificate warning would not normally be generated for that reason.",
      "D": "An expired certificate is outside its valid date range, causing the browser to reject or warn about its trustworthiness."
    },
    "tip": "Certificate warnings can result from an expired certificate - always check its validity dates. CompTIA A+ 220-1202 - Common PC Security Issues Troubleshooting Page 9"
  },
  {
    "topic": "Common PC Security Issues Troubleshooting",
    "number": 8,
    "question": "A web browser redirects the user to a website other than the one intended. This might indicate a security issue related to:",
    "answers": [
      "D"
    ],
    "options": {
      "A": "TLS",
      "B": "HTTP",
      "C": "NAT",
      "D": "DNS"
    },
    "explanations": {
      "A": "TLS encrypts and authenticates secure network sessions; it is not the name-resolution system most directly associated with destination redirection.",
      "B": "HTTP transports web requests and responses but does not determine the IP address associated with a domain name.",
      "C": "NAT translates private and public network addresses and is not the normal cause of domain-name redirection to a different site.",
      "D": "DNS maps domain names to IP addresses. DNS poisoning, malicious DNS settings, or related manipulation can send a user to an unintended server."
    },
    "tip": "Correct name but wrong destination? Investigate DNS or local hostname mapping. CompTIA A+ 220-1202 - Common PC Security Issues Troubleshooting Page 10"
  },
  {
    "topic": "Common PC Security Issues Troubleshooting",
    "number": 9,
    "question": "Which action is least likely to improve degraded web browser performance?",
    "answers": [
      "F"
    ],
    "options": {
      "A": "Resetting the browser to its defaults",
      "B": "Closing unnecessary browser tabs",
      "C": "Emptying the browser's cache",
      "D": "Removing suspicious browser extensions",
      "E": "Updating the browser",
      "F": "Adjusting the virtual memory settings"
    },
    "explanations": {
      "A": "Resetting can remove problematic configuration changes and extensions that slow the browser.",
      "B": "Fewer open tabs can reduce browser CPU and memory usage.",
      "C": "Clearing a corrupted or oversized cache can help resolve certain browser performance and loading problems.",
      "D": "Extensions can consume resources or interfere with page loading, so removing suspicious ones can improve performance.",
      "E": "Updates can fix bugs, security problems, and performance issues.",
      "F": "Virtual-memory tuning is a system-wide memory configuration task and is much less directly related to browser-specific performance than the other listed browser maintenance actions."
    },
    "tip": "Fix browser performance with browser-focused steps before changing system-wide virtual memory."
  },
  {
    "topic": "Common Safety Procedures",
    "number": 1,
    "question": "Which action violates proper ESD strap usage?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Ensuring the strap makes skin contact",
      "B": "Connecting the strap to a grounded metal object",
      "C": "Wearing the strap on the wrist",
      "D": "Leaving the strap disconnected while working"
    },
    "explanations": {
      "A": "Direct skin contact lets the wrist strap equalize electrical potential effectively and is proper ESD practice.",
      "B": "A verified ground gives static charge a controlled path away from sensitive components.",
      "C": "The wrist is the normal location for an ESD strap because it maintains reliable contact with the technician.",
      "D": "A disconnected strap has no grounding path, so it cannot safely dissipate static charge and provides no ESD protection."
    },
    "tip": "An ESD wrist strap only protects components when it touches your skin and is connected to a verified ground. CompTIA A+ 220-1202 - Common Safety Procedures Page 3"
  },
  {
    "topic": "Common Safety Procedures",
    "number": 2,
    "question": "Which of the following statements is not true?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "An ESD mat must be connected to an unpainted, grounded metal surface to operate correctly",
      "B": "An ESD mat is designed to be used in conjunction with a grounded ESD wrist strap",
      "C": "An ESD mat alone provides complete protection against electrostatic discharge",
      "D": "An ESD mat requires a physical connection to a verified ground to function as intended"
    },
    "explanations": {
      "A": "This is true because the mat needs a reliable electrical path to ground so static charge can dissipate safely.",
      "B": "This is true because the mat and wrist strap work together to keep the technician, work surface, and components at a controlled potential.",
      "C": "This is not true. A mat reduces static risk at the work surface, but complete ESD control also requires proper grounding and handling practices such as a grounded wrist strap.",
      "D": "This is true because without a verified grounding path, accumulated static cannot be safely discharged."
    },
    "tip": "ESD protection is a system - grounded mat, grounded wrist strap, and proper component handling work together. CompTIA A+ 220-1202 - Common Safety Procedures Page 4"
  },
  {
    "topic": "Common Safety Procedures",
    "number": 3,
    "question": "An ESD mat is connected to a metal computer chassis, but the chassis is sitting on a wooden table and is not plugged into a wall outlet. Which statement is true?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "The mat is now a high-voltage hazard",
      "B": "The mat will still dissipate all static to the floor",
      "C": "The mat and chassis are at the same potential, but neither is grounded",
      "D": "The wooden table acts as a ground for the mat"
    },
    "explanations": {
      "A": "The setup lacks a verified ground, but that does not automatically turn the mat into a high-voltage source.",
      "B": "A wooden table is generally insulating, so it does not provide the verified conductive path to earth required for proper ESD grounding.",
      "C": "Connecting the mat to the chassis can equalize their electrical potential, but with the chassis isolated from earth ground, neither has a verified path to ground.",
      "D": "Wood is not a reliable electrical ground and should not be treated as the grounding path for ESD equipment."
    },
    "tip": "Equal potential is not the same as earth ground - the ESD setup still needs a verified grounding path. CompTIA A+ 220-1202 - Common Safety Procedures Page 5"
  },
  {
    "topic": "Common Safety Procedures",
    "number": 4,
    "question": "Which devices may pose a risk to electrical safety due to accumulated high voltage? (Select all that apply)",
    "answers": [
      "A",
      "B",
      "C",
      "E"
    ],
    "options": {
      "A": "CRTs",
      "B": "PSUs",
      "C": "Inverters",
      "D": "GPUs",
      "E": "Laser printers"
    },
    "explanations": {
      "A": "CRT displays can retain dangerous high voltage in internal capacitors and the picture-tube circuitry even after power is removed.",
      "B": "Power supplies contain capacitors that can retain potentially hazardous electrical charge after the unit is unplugged.",
      "C": "Inverters generate or handle high voltage and can contain components that retain hazardous charge.",
      "D": "Graphics cards use low-voltage electronic circuitry and are primarily an ESD-handling concern rather than a typical accumulated high-voltage hazard.",
      "E": "Laser printers contain high-voltage power sections used for the printing process and therefore require electrical safety precautions."
    },
    "tip": "CRTs, PSUs, inverters, and laser printers can contain high-voltage sections - do not assume unplugged means discharged. CompTIA A+ 220-1202 - Common Safety Procedures Page 6"
  },
  {
    "topic": "Common Safety Procedures",
    "number": 5,
    "question": "Which statement best describes the purpose of electrical grounding in a workstation?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Balances the electrical potential between the user and the internal components",
      "B": "Prevents voltage fluctuations from affecting internal workstation components",
      "C": "Provides a low-resistance path to earth for stray current to protect the user from shock",
      "D": "Prevents high-voltage spikes from damaging the power supply during a lightning strike"
    },
    "explanations": {
      "A": "Equalizing potential is the purpose of ESD control, such as wrist straps and mats, rather than the primary personal-safety purpose of workstation grounding.",
      "B": "Voltage regulation and surge protection address fluctuations; grounding does not regulate the incoming voltage.",
      "C": "Protective grounding directs fault current safely toward earth so exposed conductive parts are less likely to remain at a dangerous voltage.",
      "D": "Surge protection is designed to limit transient spikes; grounding supports electrical safety but cannot by itself guarantee protection from lightning."
    },
    "tip": "Electrical ground protects people by giving fault current a safer low-resistance path to earth. CompTIA A+ 220-1202 - Common Safety Procedures Page 7"
  },
  {
    "topic": "Common Safety Procedures",
    "number": 6,
    "question": "Which best practices help protect internal PC components from physical damage during handling or storage? (Select 3 answers)",
    "answers": [
      "A",
      "B",
      "C"
    ],
    "options": {
      "A": "Holding components by their edges",
      "B": "Placing components in antistatic bags for temporary storage",
      "C": "Storing components in a dry, temperature-controlled environment for long-term storage",
      "D": "Keeping components in sealed plastic bags to prevent moisture",
      "E": "Wearing cotton gloves to improve grip on components"
    },
    "explanations": {
      "A": "Handling circuit boards by the edges reduces contact with delicate chips, contacts, and traces.",
      "B": "Antistatic bags protect ESD-sensitive components while they are removed from the system.",
      "C": "Controlled temperature and low moisture reduce corrosion, condensation, and other environmental damage.",
      "D": "Ordinary plastic can accumulate static electricity and is not a safe substitute for an antistatic bag.",
      "E": "Cotton gloves are not a standard ESD or component-handling requirement and may reduce dexterity or introduce fibers."
    },
    "tip": "Protect PC parts by holding edges, using antistatic storage, and keeping the environment dry and temperature controlled. CompTIA A+ 220-1202 - Common Safety Procedures Page 8"
  },
  {
    "topic": "Common Safety Procedures",
    "number": 7,
    "question": "Which action does not align with cable-management best practices?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Securing external cables within wall-mounted raceways in an office environment",
      "B": "Routing cables away from fans and vents inside a desktop PC case",
      "C": "Providing additional slack at cable ends to reduce strain on connectors",
      "D": "Bundling power and data cables together for easier installation through wall conduits",
      "E": "Using cable ties (e.g., Velcro straps) to bundle cables loosely",
      "F": "Labeling networking cables at both ends for easy identification during maintenance"
    },
    "explanations": {
      "A": "Raceways organize and protect cables and help reduce trip and snag hazards.",
      "B": "Keeping cables away from moving fans and airflow paths prevents physical damage and supports proper cooling.",
      "C": "Reasonable service slack reduces tension on connectors and makes maintenance easier.",
      "D": "Power cables can introduce electromagnetic interference into nearby data cabling, so they should be separated when practical.",
      "E": "Loose reusable straps organize cables without crushing or sharply bending them.",
      "F": "End-to-end labels make troubleshooting and maintenance faster and reduce accidental disconnections."
    },
    "tip": "Keep power and data cabling separated to reduce electromagnetic interference. CompTIA A+ 220-1202 - Common Safety Procedures Page 9"
  },
  {
    "topic": "Common Safety Procedures",
    "number": 8,
    "question": "Which item does not require an antistatic bag for safe handling when not installed?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Motherboards",
      "B": "Expansion cards",
      "C": "Power cables",
      "D": "Memory modules"
    },
    "explanations": {
      "A": "Motherboards contain many ESD-sensitive integrated circuits and should be protected in antistatic packaging.",
      "B": "Expansion cards contain exposed electronic components and contacts that can be damaged by electrostatic discharge.",
      "C": "Passive power cables do not contain the same exposed ESD-sensitive semiconductor circuitry and do not normally require antistatic bags.",
      "D": "RAM modules are highly ESD-sensitive and should be stored in antistatic packaging when removed."
    },
    "tip": "Antistatic bags protect electronic circuit boards and memory; ordinary passive cables generally do not need them. CompTIA A+ 220-1202 - Common Safety Procedures Page 10"
  },
  {
    "topic": "Common Safety Procedures",
    "number": 9,
    "question": "Examples of devices/components regulated under special disposal procedures due to environmental/safety hazards include: (Select all that apply)",
    "answers": [
      "B",
      "C",
      "D"
    ],
    "options": {
      "A": "Heatsinks",
      "B": "CRTs",
      "C": "Toner cartridges",
      "D": "Batteries"
    },
    "explanations": {
      "A": "A normal metal heatsink is generally recyclable material and is not singled out by the quiz as requiring hazardous-material disposal procedures.",
      "B": "CRTs can contain leaded glass and other hazardous materials, so they require special e-waste handling and disposal.",
      "C": "Toner cartridges contain toner material and other components that should be recycled or disposed of through approved programs.",
      "D": "Batteries can contain corrosive, reactive, or toxic materials and should be handled through approved battery recycling or hazardous-waste procedures."
    },
    "tip": "CRTs, toner cartridges, and batteries belong in approved disposal or recycling streams - not ordinary trash. CompTIA A+ 220-1202 - Common Safety Procedures Page 11"
  },
  {
    "topic": "Common Safety Procedures",
    "number": 10,
    "question": "A technician is preparing to replace a faulty internal cooling fan inside a PC workstation. What is the most important first step to ensure personal safety?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Switch off the surge protector connected to the PC",
      "B": "Press and hold the power button for several seconds",
      "C": "Turn off the power supply switch on the back of the PC",
      "D": "Disconnect the power cable from the wall outlet"
    },
    "explanations": {
      "A": "A switched-off surge protector may reduce power, but physically disconnecting the power cable provides a clearer isolation from mains electricity.",
      "B": "This can help discharge residual low-voltage power after unplugging, but it is not the first action for electrical isolation.",
      "C": "The PSU switch reduces power to the system but still leaves the computer physically connected to the electrical source.",
      "D": "Unplugging the system removes the external mains power connection and is the most important first step before opening the case for service."
    },
    "tip": "Before internal PC service, disconnect the system from wall power first. CompTIA A+ 220-1202 - Common Safety Procedures Page 12"
  },
  {
    "topic": "Common Safety Procedures",
    "number": 11,
    "question": "Which action is considered an incorrect lifting technique according to workplace safety guidelines?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Lifting with the legs, not the back",
      "B": "Performing a team lift for heavy objects",
      "C": "Locking the knees while lifting",
      "D": "Keeping the load close to the body"
    },
    "explanations": {
      "A": "Using the legs keeps more of the load away from the lower back and is recommended lifting technique.",
      "B": "A team lift distributes a heavy load and reduces the risk of one person being injured.",
      "C": "Locked knees reduce safe leg movement and encourage the back to absorb more of the lifting force, increasing injury risk.",
      "D": "Holding the load close reduces leverage on the spine and is recommended for safer lifting."
    },
    "tip": "Bend your knees, keep the load close, and lift with your legs - never lock your knees. CompTIA A+ 220-1202 - Common Safety Procedures Page 13"
  },
  {
    "topic": "Common Safety Procedures",
    "number": 12,
    "question": "A technician encounters a small electrical fire inside a desktop PC. Which action is unsafe?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Disconnecting the PC from power",
      "B": "Using a Class C extinguisher",
      "C": "Evacuating if the fire spreads",
      "D": "Using water to extinguish the fire"
    },
    "explanations": {
      "A": "If it can be done safely, removing electrical power helps eliminate the energized source feeding the fire.",
      "B": "A Class C-rated extinguisher is intended for energized electrical equipment and is appropriate for this type of fire.",
      "C": "Leaving the area and following emergency procedures is the correct response if the fire cannot be controlled safely.",
      "D": "Water can conduct electricity and create a shock hazard when used on energized electrical equipment."
    },
    "tip": "Never use water on an energized electrical fire - use the proper electrical-fire extinguisher. CompTIA A+ 220-1202 - Common Safety Procedures Page 14"
  },
  {
    "topic": "Common Safety Procedures",
    "number": 13,
    "question": "Which type of fire extinguishing agent poses the greatest safety risk to humans due to the rapid displacement of oxygen?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Water-based foam",
      "B": "Clean agent gas",
      "C": "Dry powder chemical",
      "D": "Carbon dioxide"
    },
    "explanations": {
      "A": "Foam suppresses fire by cooling and separating fuel from oxygen, but it is not primarily hazardous because it rapidly displaces breathable oxygen.",
      "B": "Clean agents are designed for occupied electronic environments with lower residue and carefully controlled human-safety limits.",
      "C": "Dry chemical can irritate breathing and create visibility problems, but the quiz identifies oxygen displacement as the major hazard of another agent.",
      "D": "CO2 suppresses fire partly by displacing oxygen. In a confined space, a high concentration can rapidly create an asphyxiation hazard."
    },
    "tip": "CO2 can put out fire without residue, but in confined spaces it can also displace the oxygen people need to breathe. CompTIA A+ 220-1202 - Common Safety Procedures Page 15"
  },
  {
    "topic": "Common Safety Procedures",
    "number": 14,
    "question": "What is the primary reason clean agent fire suppression systems are preferred over traditional sprinkler systems in modern IT environments?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "They lower the air pressure to prevent combustion",
      "B": "They reduce the cost of fire suppression system maintenance",
      "C": "They are easier to install than traditional sprinkler systems",
      "D": "They do not damage sensitive electronic hardware"
    },
    "explanations": {
      "A": "Clean-agent systems suppress fire chemically or by controlled gas action; their primary benefit is not lowering room pressure.",
      "B": "Cost varies by installation and is not the key reason they are chosen for sensitive IT equipment.",
      "C": "Installation complexity depends on the facility and is not the primary advantage identified by the quiz.",
      "D": "Clean agents leave little or no conductive residue or water damage, making them well suited to servers and other sensitive electronics."
    },
    "tip": "Clean-agent suppression protects electronics because it avoids the water damage caused by sprinklers. CompTIA A+ 220-1202 - Common Safety Procedures Page 16"
  },
  {
    "topic": "Common Safety Procedures",
    "number": 15,
    "question": "Safety goggles reduce the risk of eye injury during tasks that involve:",
    "answers": [
      "F"
    ],
    "options": {
      "A": "Handling damaged or swollen batteries",
      "B": "Cutting or trimming cables",
      "C": "Using pressurized air",
      "D": "Grinding, cutting, or drilling metal parts",
      "E": "Soldering or desoldering components",
      "F": "All of the above"
    },
    "explanations": {
      "A": "Eye protection is useful here because damaged batteries can leak or rupture, but the question includes several tasks with eye hazards.",
      "B": "Cable fragments or clipped wire can fly toward the eyes, so goggles are appropriate.",
      "C": "Pressurized air can propel dust and debris into the eyes, making eye protection appropriate.",
      "D": "Metal chips and sparks create a direct eye hazard and require eye protection.",
      "E": "Solder splashes, clipped leads, and flux-related debris can injure the eyes, so goggles are useful.",
      "F": "Every listed task can expose the eyes to debris, chemicals, particles, or hot material, so safety goggles reduce risk in all of them."
    },
    "tip": "If a task can throw particles, liquid, dust, metal, or hot material toward your face, wear eye protection. CompTIA A+ 220-1202 - Common Safety Procedures Page 17"
  },
  {
    "topic": "Common Safety Procedures",
    "number": 16,
    "question": "While servicing a laser printer, a technician notices spilled toner inside the chassis. Which piece of safety equipment is most important to wear before beginning cleanup?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Safety goggles",
      "B": "Latex gloves",
      "C": "ESD wrist strap",
      "D": "Air filter mask"
    },
    "explanations": {
      "A": "Eye protection can be helpful, but the primary hazard emphasized by the quiz is inhalation of fine toner particles.",
      "B": "Gloves can reduce skin contact, but they do not protect the respiratory system from airborne toner.",
      "C": "An ESD strap protects electronic components from static discharge; it does not protect the technician from toner dust.",
      "D": "An air filter mask helps reduce inhalation of fine toner particles that may become airborne during cleanup."
    },
    "tip": "Spilled toner is a fine-particle hazard - protect your breathing before disturbing the powder. CompTIA A+ 220-1202 - Common Safety Procedures Page 18"
  },
  {
    "topic": "Common Safety Procedures",
    "number": 17,
    "question": "Removing jewelry, such as rings or watches, is a recommended personal safety practice when working inside a computer case.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Metal jewelry can contact energized conductors, cause shorts, heat rapidly, snag on components, or contribute to electrical injury, so removing it is recommended.",
      "B": "Leaving conductive jewelry on while servicing hardware adds avoidable electrical and physical hazards."
    },
    "tip": "Remove conductive jewelry before hardware service to reduce short-circuit, burn, and snag hazards."
  },
  {
    "topic": "Communication and Professionalism",
    "number": 1,
    "question": "Which description best defines appropriate attire in a professional IT environment?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Casual clothing with minimal branding",
      "B": "Clothing that prioritizes comfort",
      "C": "Clothing that adheres to company dress code",
      "D": "Clothing suitable for physical labor"
    },
    "explanations": {
      "A": "Casual clothing may be acceptable in some workplaces, but professionalism is determined by the employer's established dress requirements rather than branding alone.",
      "B": "Comfort is useful for long technical tasks, but it does not by itself ensure that clothing meets workplace expectations.",
      "C": "Following the organization's dress code ensures the technician meets the workplace's defined standards for appearance, safety, and professionalism.",
      "D": "Some IT jobs involve physical work, but workwear is not automatically appropriate for every professional environment."
    },
    "tip": "Professional appearance follows the employer's dress code, not a technician's personal definition of formal or casual. CompTIA A+ 220-1202 - Communication & Professionalism Page 3"
  },
  {
    "topic": "Communication and Professionalism",
    "number": 2,
    "question": "Which approach best demonstrates effective communication with a customer in a technical support scenario?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Describe the issue with precise, technical terms to avoid any ambiguity",
      "B": "Use technical abbreviations to streamline the communication process",
      "C": "Avoid using jargon, acronyms, and slang when applicable",
      "D": "Describe the issue using informal language to simplify the explanation"
    },
    "explanations": {
      "A": "Highly technical wording can confuse customers who do not share the technician's background; clarity should be adapted to the listener.",
      "B": "Unexplained abbreviations can make support conversations harder to understand.",
      "C": "Plain, professional language reduces misunderstandings and helps customers understand the problem and the proposed solution.",
      "D": "Informal wording can become vague or unprofessional; the goal is clear, respectful language rather than slang."
    },
    "tip": "Translate technical knowledge into plain language the customer can understand. CompTIA A+ 220-1202 - Communication & Professionalism Page 4"
  },
  {
    "topic": "Communication and Professionalism",
    "number": 3,
    "question": "A technician is troubleshooting a recurring software issue while the user expresses frustration. Which behavior best demonstrates maintaining a positive attitude?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Focusing exclusively on resolving the issue without engaging the user",
      "B": "Promising a definitive fix time regardless of the actual troubleshooting progress",
      "C": "Informing the user that similar issues are common and unavoidable",
      "D": "Acknowledging the user's frustration while remaining calm and respectful"
    },
    "explanations": {
      "A": "Ignoring the user's concerns may make the interaction feel dismissive even if troubleshooting continues.",
      "B": "An unsupported promise creates unrealistic expectations and can damage trust if the deadline is missed.",
      "C": "Calling the problem unavoidable does not address the customer's frustration and can sound dismissive.",
      "D": "Recognizing the customer's concern while staying composed demonstrates empathy and keeps the interaction professional and productive."
    },
    "tip": "A positive support attitude combines empathy with calm, respectful troubleshooting. CompTIA A+ 220-1202 - Communication & Professionalism Page 5"
  },
  {
    "topic": "Communication and Professionalism",
    "number": 4,
    "question": "Which of the statements listed below best describes projecting confidence in a customer support role?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Reassuring the customer by minimizing the perceived complexity of the issue",
      "B": "Providing a definitive repair timeline before completing a full diagnostic",
      "C": "Communicating assurance and competence while managing expectations",
      "D": "Minimizing the customer's questions to maintain control of the interaction"
    },
    "explanations": {
      "A": "Minimizing a problem can mislead the customer or make a legitimate concern seem unimportant.",
      "B": "Giving a firm timeline without enough information is overpromising, not professional confidence.",
      "C": "Confidence means explaining the process clearly, demonstrating competence, and being realistic about what is known and what still needs investigation.",
      "D": "Discouraging questions can prevent important details from being discovered and does not demonstrate customer-focused confidence."
    },
    "tip": "Confidence means calm competence plus realistic expectations - not guarantees. CompTIA A+ 220-1202 - Communication & Professionalism Page 6"
  },
  {
    "topic": "Communication and Professionalism",
    "number": 5,
    "question": "A customer begins describing a printing issue in detail. Which action best demonstrates active listening according to professional support standards?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Interrupting to confirm understanding of something stated earlier in the description",
      "B": "Politely cutting in to redirect a lengthy or off-topic story back to the main technical issue",
      "C": "Listening without interrupting until the customer finishes describing the problem",
      "D": "Correcting the customer's technical terminology or phrasing during their explanation"
    },
    "explanations": {
      "A": "Confirmation is useful, but interrupting too early can prevent the customer from providing important context.",
      "B": "Redirection may sometimes be necessary, but active listening begins by allowing the customer to explain the problem.",
      "C": "Allowing the customer to finish helps the technician gather complete information and shows that the concern is being taken seriously.",
      "D": "Correcting terminology while the customer is speaking can interrupt the flow and may make the customer reluctant to continue."
    },
    "tip": "Listen first; clarify after the customer finishes the initial explanation. CompTIA A+ 220-1202 - Communication & Professionalism Page 7"
  },
  {
    "topic": "Communication and Professionalism",
    "number": 6,
    "question": "Which behavior best reflects the guideline to use appropriate professional titles and designations?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Relying on generic respectful terms when unsure about the provided title",
      "B": "Applying titles or designations only when explicitly requested to do so",
      "C": "Omitting titles entirely to focus attention on the technical problem",
      "D": "Addressing a self-identified PhD holder as Dr. followed by the last name"
    },
    "explanations": {
      "A": "Generic terms may be polite, but when a known professional designation is provided, it should be used appropriately.",
      "B": "A clearly provided professional title can be respected without requiring the person to request it again.",
      "C": "Ignoring a known designation can conflict with professional courtesy.",
      "D": "Using the professional title the customer has identified is a respectful way to address the person in a professional interaction."
    },
    "tip": "When a customer provides a professional title, use it respectfully and consistently. CompTIA A+ 220-1202 - Communication & Professionalism Page 8"
  },
  {
    "topic": "Communication and Professionalism",
    "number": 7,
    "question": "Which actions best demonstrate proper time management in customer support interactions? (Select 2 answers)",
    "answers": [
      "B",
      "D"
    ],
    "options": {
      "A": "Relying on the customer to reschedule if a delay occurs",
      "B": "Planning travel and preparation to avoid delays",
      "C": "Offering extra service time to compensate for late arrival",
      "D": "Contacting the customer promptly if running late",
      "E": "Depending on customer understanding of common overruns"
    },
    "explanations": {
      "A": "The technician should take responsibility for communicating delays instead of placing the burden on the customer.",
      "B": "Allowing adequate travel and preparation time helps the technician arrive ready and on schedule.",
      "C": "Extra service time does not prevent the original delay and may disrupt later appointments.",
      "D": "Prompt notice respects the customer's time and allows expectations or scheduling to be adjusted.",
      "E": "Assuming a customer will accept delays without communication is not professional time management."
    },
    "tip": "Good time management means plan ahead and communicate immediately when the schedule changes. CompTIA A+ 220-1202 - Communication & Professionalism Page 9"
  },
  {
    "topic": "Communication and Professionalism",
    "number": 8,
    "question": "Which of the following activities are considered unprofessional distractions that should be avoided in a customer support scenario? (Select 3 answers)",
    "answers": [
      "B",
      "D",
      "E"
    ],
    "options": {
      "A": "Photographing damaged equipment",
      "B": "Texting or using social media sites",
      "C": "Answering a supervisor's call",
      "D": "Engaging in personal conversations with co-workers",
      "E": "Taking personal calls"
    },
    "explanations": {
      "A": "Documenting damaged equipment can be a legitimate service task when authorized and handled according to policy.",
      "B": "Personal texting or social media takes attention away from the customer and the technical task.",
      "C": "A work-related call from a supervisor may be necessary and is not inherently an unprofessional distraction.",
      "D": "Unrelated personal conversation distracts from the customer and can make the service interaction appear inattentive.",
      "E": "Personal calls during customer service divert attention and should be avoided except when genuinely necessary."
    },
    "tip": "During customer support, avoid personal phone, social-media, and side-conversation distractions. CompTIA A+ 220-1202 - Communication & Professionalism Page 10"
  },
  {
    "topic": "Communication and Professionalism",
    "number": 9,
    "question": "Which practice most directly supports the guideline to not argue with the customer or be defensive?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Asking the customer to remain calm before continuing",
      "B": "Redirecting the discussion to a different topic",
      "C": "Escalating the issue immediately to avoid conflict",
      "D": "Avoiding counterarguments when facing complaints"
    },
    "explanations": {
      "A": "Telling an upset customer to calm down can escalate tension rather than resolve it.",
      "B": "Changing the subject avoids the concern instead of addressing it professionally.",
      "C": "Escalation may be appropriate in some situations, but it should not replace normal professional communication simply to avoid disagreement.",
      "D": "Not responding with counterarguments helps prevent an adversarial interaction and keeps attention on understanding and resolving the customer's concern."
    },
    "tip": "Do not try to win an argument; keep the conversation focused on facts and resolution. CompTIA A+ 220-1202 - Communication & Professionalism Page 11"
  },
  {
    "topic": "Communication and Professionalism",
    "number": 10,
    "question": "Which of the actions listed below align with the guideline to avoid dismissing customer issues? (Select 3 answers)",
    "answers": [
      "A",
      "B",
      "C"
    ],
    "options": {
      "A": "Treating every reported symptom as legitimate until investigated",
      "B": "Restating the customer's concern to confirm understanding",
      "C": "Asking open-ended questions to better understand the complaint",
      "D": "Clarifying customer statements by interrupting them if necessary",
      "E": "Pointing out that the problem is common among other customers"
    },
    "explanations": {
      "A": "Taking the report seriously prevents the technician from rejecting a real problem before gathering evidence.",
      "B": "Restating shows that the technician listened and gives the customer a chance to correct any misunderstanding.",
      "C": "Open-ended questions encourage useful details and help define the problem without dismissing the customer's experience.",
      "D": "Clarification is valuable, but unnecessary interruption can make the customer feel unheard.",
      "E": "Saying the issue is common can sound as though the technician is minimizing the customer's individual concern."
    },
    "tip": "Take symptoms seriously, restate the concern, and ask questions before drawing conclusions. CompTIA A+ 220-1202 - Communication & Professionalism Page 12"
  },
  {
    "topic": "Communication and Professionalism",
    "number": 11,
    "question": "Which of the following actions align with avoiding being judgmental in a technical support scenario? (Select 3 answers)",
    "answers": [
      "B",
      "C",
      "D"
    ],
    "options": {
      "A": "Reassuring the customer that the mistake is understandable for non-technical users",
      "B": "Asking open-ended questions to better understand the complaint",
      "C": "Treating the customer's technical knowledge level without assumption or criticism",
      "D": "Focusing on facts and solutions rather than the customer's past decisions",
      "E": "Advising the customer to stop experimenting with settings they don't understand"
    },
    "explanations": {
      "A": "Calling the customer non-technical can sound patronizing and still places judgment on the person's ability.",
      "B": "Neutral questions gather information without blaming the customer.",
      "C": "Avoiding assumptions about skill level keeps the interaction respectful and allows the technician to adapt based on actual needs.",
      "D": "Concentrating on the current evidence and solution avoids blaming the customer for choices that may have contributed to the problem.",
      "E": "This wording criticizes the customer's knowledge and can sound condescending rather than constructive."
    },
    "tip": "Diagnose the technology, not the person - use neutral questions and factual solutions. CompTIA A+ 220-1202 - Communication & Professionalism Page 13"
  },
  {
    "topic": "Communication and Professionalism",
    "number": 12,
    "question": "In a customer support scenario, which actions best demonstrate the ability to clarify customer statements? (Select 3 answers)",
    "answers": [
      "A",
      "D",
      "E"
    ],
    "options": {
      "A": "Restating the customer's description to verify understanding",
      "B": "Aligning communication style with the customer's technical level",
      "C": "Correcting the customer's use of non-technical language",
      "D": "Questioning to confirm key details of the reported problem",
      "E": "Asking open-ended questions to narrow the scope of the issue"
    },
    "explanations": {
      "A": "Paraphrasing the customer's explanation lets the technician confirm that the problem was interpreted correctly.",
      "B": "Adapting communication is good practice, but it does not directly clarify the content of a specific statement.",
      "C": "The goal is understanding, not forcing the customer to use technical vocabulary.",
      "D": "Targeted questions verify important facts and remove ambiguity.",
      "E": "Open-ended questions can reveal context and symptoms that help define what the customer actually means."
    },
    "tip": "Clarify by paraphrasing, confirming key facts, and asking questions that reveal missing details. CompTIA A+ 220-1202 - Communication & Professionalism Page 14"
  },
  {
    "topic": "Communication and Professionalism",
    "number": 13,
    "question": "Which of the practices listed below do not align with the guideline on maintaining discretion when discussing past customer encounters? (Select 2 answers)",
    "answers": [
      "B",
      "D"
    ],
    "options": {
      "A": "Focusing on technical details when describing issues",
      "B": "Discussing specific customer experiences outside work",
      "C": "Avoiding specific customer names or locations",
      "D": "Posting details of a customer interaction on a personal social media account",
      "E": "Using anonymized examples in training or meetings"
    },
    "explanations": {
      "A": "Technical discussion can be appropriate when it avoids identifying or confidential customer information.",
      "B": "Sharing identifiable customer encounters outside an authorized work context can expose confidential information and violates professional discretion.",
      "C": "Removing identifying details supports discretion and reduces the risk of exposing customer information.",
      "D": "Personal social media is not an appropriate place to disclose customer interactions and can expose private or confidential information.",
      "E": "Anonymized examples can be appropriate in authorized professional settings when identifying details are removed."
    },
    "tip": "Customer stories stay private - never move identifiable service details into personal conversations or social media. CompTIA A+ 220-1202 - Communication & Professionalism Page 15"
  },
  {
    "topic": "Communication and Professionalism",
    "number": 14,
    "question": "After diagnosing a failed motherboard on a laptop that is out of warranty, a technician determines the repair cost is nearly equal to a new system. Which of the following is the most professional course of action?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Present both options but emphasize repair as better value",
      "B": "Quote only the repair cost without mentioning replacement price",
      "C": "Recommend replacing the laptop with a new system",
      "D": "Offer both repair and replacement options to the customer"
    },
    "explanations": {
      "A": "If the costs are nearly equal, claiming repair is the better value imposes the technician's preference instead of neutrally presenting the customer's choices.",
      "B": "Withholding a relevant alternative prevents the customer from making an informed decision.",
      "C": "Replacement may be reasonable, but the customer should be given the available options and relevant costs rather than having the decision made for them.",
      "D": "Presenting both options allows the customer to compare cost and value and make an informed decision based on their needs."
    },
    "tip": "Give the customer the facts and reasonable options; let the customer choose. CompTIA A+ 220-1202 - Communication & Professionalism Page 16"
  },
  {
    "topic": "Communication and Professionalism",
    "number": 15,
    "question": "After finishing a repair and verifying full system functionality, what is the most important final step to complete the service workflow?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Providing the customer with proper documentation of the services performed",
      "B": "Asking the customer to sign a waiver stating that no other components were damaged",
      "C": "Identifying potential negative impacts of the implemented solution",
      "D": "Updating internal documentation with the hardware manufacturer's information"
    },
    "explanations": {
      "A": "Service documentation records what was repaired, what work was performed, and the final outcome, giving both the customer and organization a clear record.",
      "B": "A blanket waiver is not the standard final step after a successful repair and verification.",
      "C": "Potential impacts should be considered before or during implementation; after successful verification, closing documentation is the key final workflow step.",
      "D": "Manufacturer information may already exist in asset records and does not replace documenting the actual service performed."
    },
    "tip": "A repair is not fully closed until the work and results are documented. CompTIA A+ 220-1202 - Communication & Professionalism Page 17"
  },
  {
    "topic": "Communication and Professionalism",
    "number": 16,
    "question": "After resolving a customer issue, following up at a later date to verify satisfaction is optional unless the customer reports a new problem.",
    "answers": [
      "B"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Professional support may include follow-up to confirm that the solution remains effective and that the customer is satisfied; waiting for another complaint can miss unresolved issues.",
      "B": "Follow-up is an important customer-service practice because it confirms that the repair or solution continues to work and gives the customer an opportunity to report remaining concerns."
    },
    "tip": "Resolution ends the technical problem; follow-up confirms the customer is still satisfied with the result. CompTIA A+ 220-1202 - Communication & Professionalism Page 18"
  },
  {
    "topic": "Communication and Professionalism",
    "number": 17,
    "question": "Which of the answers listed below describes appropriate handling of the customer's confidential data in a situation where troubleshooting requires access to a password-protected system?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Create a temporary account with the same permissions",
      "B": "Ask user to type in the password themselves",
      "C": "Temporarily disable password protection",
      "D": "Ask user for password and their consent to use it"
    },
    "explanations": {
      "A": "Creating an equivalent privileged account can introduce unnecessary security risk and may violate account-management policy.",
      "B": "Having the customer enter the password keeps the credential private while still allowing the technician to access the system for authorized troubleshooting.",
      "C": "Disabling authentication weakens system security and creates unnecessary exposure.",
      "D": "Even with consent, technicians should avoid learning or recording a customer's password when the customer can enter it directly."
    },
    "tip": "Technicians need access, not the customer's secret - let the user enter the password."
  },
  {
    "topic": "Data Destruction Disposal Methods",
    "number": 1,
    "question": "Which of the following answers can be used to describe degaussing when used as a data sanitization method? (Select 2 answers)",
    "answers": [
      "C",
      "E"
    ],
    "options": {
      "A": "Effective on all storage media types",
      "B": "Mechanical destruction method",
      "C": "Effective only on HDDs, tapes, and legacy storage media",
      "D": "Relies on heat to render the drive inoperable",
      "E": "Magnetic data erasure technique"
    },
    "explanations": {
      "A": "Degaussing only works on magnetic storage. It does not securely erase nonmagnetic media such as SSDs and flash storage.",
      "B": "Mechanical destruction physically damages media by shredding, crushing, or drilling. Degaussing instead uses a strong magnetic field.",
      "C": "Degaussing is effective on magnetic media such as traditional hard disk drives and magnetic tapes because their data is stored magnetically.",
      "D": "Using heat to destroy media describes thermal destruction such as incineration, not degaussing.",
      "E": "A degausser exposes magnetic media to a powerful magnetic field that disrupts the stored magnetic patterns and erases the recorded data."
    },
    "tip": "Degaussing works on magnetic media; SSDs and flash memory require another sanitization method. CompTIA A+ 220-1202 - Data Destruction & Disposal Methods Page 3"
  },
  {
    "topic": "Data Destruction Disposal Methods",
    "number": 2,
    "question": "Match each data disposal method with its corresponding mechanism.",
    "answers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "options": {
      "A": "Shredding - Mechanical",
      "B": "Incineration - Thermal",
      "C": "Drilling - Mechanical",
      "D": "Degaussing - Magnetic"
    },
    "explanations": {
      "A": "Shredding physically cuts or breaks media into small pieces, so it is a mechanical destruction method.",
      "B": "Incineration destroys media with extreme heat, making it a thermal destruction method.",
      "C": "Drilling physically damages platters or storage components, so it is mechanical destruction.",
      "D": "Degaussing uses a strong magnetic field to erase information stored on magnetic media."
    },
    "tip": "Shred and drill = mechanical; incinerate = thermal; degauss = magnetic. CompTIA A+ 220-1202 - Data Destruction & Disposal Methods Page 4"
  },
  {
    "topic": "Data Destruction Disposal Methods",
    "number": 3,
    "question": "Which data sanitization method securely removes all recoverable information from a storage device while keeping the device operational for future use?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Standard format",
      "B": "Degaussing",
      "C": "Low-level format",
      "D": "Erasing/wiping"
    },
    "explanations": {
      "A": "A standard or quick formatting process mainly rebuilds filesystem structures and can leave recoverable data behind.",
      "B": "Degaussing can erase magnetic media, but it may make some drives unusable and is not appropriate for all storage technologies.",
      "C": "Low-level formatting reinitializes physical storage structures; the quiz identifies erasing/wiping as the method intended to securely remove recoverable information while retaining device use.",
      "D": "Secure erasing or wiping overwrites or otherwise sanitizes accessible storage so the previous information cannot be recovered while allowing the device to be reused."
    },
    "tip": "Wiping sanitizes data for reuse; physical destruction is for media you do not plan to reuse. CompTIA A+ 220-1202 - Data Destruction & Disposal Methods Page 5"
  },
  {
    "topic": "Data Destruction Disposal Methods",
    "number": 4,
    "question": "Which process reinitializes the physical sector structure of a drive and returns the device to a factory-like state, preparing it for reinstallation or repurposing?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Low-level format",
      "B": "Erasing/wiping",
      "C": "Full format",
      "D": "Standard format"
    },
    "explanations": {
      "A": "Low-level formatting reinitializes the drive's physical sector organization, which is why the source associates it with returning the drive to a factory-like state.",
      "B": "Wiping focuses on removing recoverable data rather than recreating the physical sector structure described in the question.",
      "C": "A full format creates filesystem structures and may scan the disk, but it is not the physical-sector reinitialization method identified by the quiz.",
      "D": "A standard format applies filesystem structures and does not perform the low-level physical-sector initialization described."
    },
    "tip": "Low-level format deals with the drive's physical sector structure; normal formatting deals with the filesystem. CompTIA A+ 220-1202 - Data Destruction & Disposal Methods Page 6"
  },
  {
    "topic": "Data Destruction Disposal Methods",
    "number": 5,
    "question": "Which formatting type applies a new file system structure to a storage device, leaving the existing data intact and easily recoverable by data recovery tools?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Standard format",
      "B": "Full format",
      "C": "Erasing/wiping",
      "D": "Low-level format"
    },
    "explanations": {
      "A": "A standard/quick format replaces filesystem metadata without securely overwriting the underlying data, so recovery tools may still retrieve the old information.",
      "B": "A full format performs more extensive processing than the standard format and is not the answer identified by the source for leaving data easily recoverable.",
      "C": "Secure wiping is specifically intended to remove recoverable information, the opposite of what the question describes.",
      "D": "Low-level formatting concerns physical-sector initialization rather than simply placing a new filesystem over existing data."
    },
    "tip": "Formatting is not the same as secure wiping; a standard format can leave old data recoverable. CompTIA A+ 220-1202 - Data Destruction & Disposal Methods Page 7"
  },
  {
    "topic": "Data Destruction Disposal Methods",
    "number": 6,
    "question": "A technician is arranging disposal of decommissioned laptops through a certified third-party recycling vendor. What should be requested from the vendor to confirm proper disposal?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Hardware inventory manifest",
      "B": "Chain-of-custody record",
      "C": "Asset disposal log",
      "D": "Certificate of destruction"
    },
    "explanations": {
      "A": "An inventory manifest lists equipment but does not prove that the storage devices were securely destroyed.",
      "B": "Chain of custody documents who handled an asset and when, but it is not the final proof that destruction actually occurred.",
      "C": "A disposal log records disposition activity but is less specific than formal evidence that the media was destroyed.",
      "D": "A certificate of destruction provides formal documentation from the disposal vendor confirming that the specified assets or data-bearing media were destroyed according to the agreed process."
    },
    "tip": "Certificate of destruction = documented proof that a third party completed secure destruction. CompTIA A+ 220-1202 - Data Destruction & Disposal Methods Page 8"
  },
  {
    "topic": "Data Destruction Disposal Methods",
    "number": 7,
    "question": "Regulatory requirements may require secure destruction of data-bearing devices and certified recycling of hazardous electronic components rather than disposal as general electronic waste.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "This matches the source: data-protection requirements call for secure destruction of sensitive data, while environmental rules require proper recycling of hazardous components such as batteries, CRTs, toner, and circuit boards.",
      "B": "The statement accurately reflects the regulatory and environmental disposal requirements described in the quiz."
    },
    "tip": "Secure disposal protects both information and the environment - sanitize data and recycle hazardous electronics correctly."
  },
  {
    "topic": "Environmental Impacts and Controls",
    "number": 1,
    "question": "Which of the answers listed below refers to a standardized document outlining the hazards, safe handling procedures, storage requirements, and proper disposal methods for potentially hazardous materials?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "EPA",
      "B": "OSHA",
      "C": "SOP",
      "D": "MSDS"
    },
    "explanations": {
      "A": "The EPA is a U.S. government agency that develops and enforces environmental regulations; it is not the standardized hazard-information document itself.",
      "B": "OSHA is the U.S. workplace safety agency and sets safety requirements, but it is not the document containing a material's hazard, handling, storage, and disposal information.",
      "C": "A standard operating procedure documents an organization's steps for performing a task, but it is not the standardized hazardous-material information sheet described.",
      "D": "An MSDS provides standardized information about a hazardous material, including its hazards, safe handling and storage, exposure precautions, and disposal guidance."
    },
    "tip": "MSDS tells technicians what a hazardous material can do and how to handle, store, and dispose of it safely. CompTIA A+ 220-1202 - Environmental Impacts & Controls Page 3"
  },
  {
    "topic": "Environmental Impacts and Controls",
    "number": 2,
    "question": "A technician is decommissioning a variety of older hardware components. Which of the following items should not be placed in standard electronic waste due to special handling requirements? (Select all that apply)",
    "answers": [
      "B",
      "C",
      "E"
    ],
    "options": {
      "A": "Optical media drives",
      "B": "CRT display units",
      "C": "Laser printer toner cartridges",
      "D": "USB flash drives",
      "E": "Lithium-ion battery packs"
    },
    "explanations": {
      "A": "An optical drive is ordinary electronic hardware and does not contain the specific hazardous materials highlighted by the quiz for special disposal.",
      "B": "CRT displays can contain leaded glass and other hazardous materials, so they require specialized e-waste handling.",
      "C": "Toner cartridges contain toner and other materials that should be handled through approved recycling or disposal programs rather than ordinary e-waste.",
      "D": "USB flash drives are electronic waste but do not normally require the special hazardous-material handling identified for CRTs, toner cartridges, or batteries.",
      "E": "Lithium-ion batteries can present fire, chemical, and environmental hazards and require approved battery recycling or hazardous-waste procedures."
    },
    "tip": "CRTs, toner cartridges, and lithium-ion batteries need specialized disposal or recycling. CompTIA A+ 220-1202 - Environmental Impacts & Controls Page 4"
  },
  {
    "topic": "Environmental Impacts and Controls",
    "number": 3,
    "question": "Which of the terms listed below refers to an environmental control system?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "SCADA",
      "B": "DCS",
      "C": "TEMPEST",
      "D": "HVAC"
    },
    "explanations": {
      "A": "SCADA supervises and controls industrial processes and infrastructure; it is broader than the building environmental-control system asked for here.",
      "B": "A distributed control system manages industrial processes through distributed controllers; it is not specifically the standard building climate-control system.",
      "C": "TEMPEST concerns protection against information leakage through electromagnetic emissions, not temperature or ventilation control.",
      "D": "HVAC controls heating, ventilation, and air conditioning, making it the environmental system used to regulate temperature and airflow."
    },
    "tip": "HVAC controls the room environment: heating, ventilation, and air conditioning. CompTIA A+ 220-1202 - Environmental Impacts & Controls Page 5"
  },
  {
    "topic": "Environmental Impacts and Controls",
    "number": 4,
    "question": "A user reports that a high-performance workstation's speed drops significantly during the afternoon when the office's ambient temperature rises. What is the most likely cause of this performance decrease?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "System fan failure",
      "B": "Thermal paste degradation",
      "C": "Drop in voltage from the power utility",
      "D": "Thermal throttling"
    },
    "explanations": {
      "A": "A failed fan can cause overheating, but the scenario ties the slowdown specifically to rising ambient temperature rather than a failed cooling component.",
      "B": "Poor thermal paste can raise CPU temperatures continuously, but it does not best explain a slowdown that appears when room temperature rises.",
      "C": "Undervoltage is a power-quality problem and does not directly match the temperature-related pattern in the scenario.",
      "D": "When a processor or other component becomes too hot, it can automatically reduce its clock speed to limit heat and protect the hardware, lowering performance."
    },
    "tip": "When heat rises and performance falls, think thermal throttling. CompTIA A+ 220-1202 - Environmental Impacts & Controls Page 6"
  },
  {
    "topic": "Environmental Impacts and Controls",
    "number": 5,
    "question": "A server room is experiencing an unusually high number of component failures due to ESD. Which environmental condition is the most likely cause?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Humidity levels that are too high",
      "B": "Ambient temperature that is too low",
      "C": "Humidity levels that are too low",
      "D": "Ambient temperature that is too high"
    },
    "explanations": {
      "A": "High humidity can encourage condensation and corrosion, but static charge tends to dissipate more readily when moisture is present in the air.",
      "B": "Low temperature alone is not the main environmental factor that increases electrostatic charge buildup.",
      "C": "Dry air allows static electricity to accumulate more easily, increasing the risk of electrostatic discharge damaging sensitive components.",
      "D": "High temperature can cause overheating but is not the primary environmental cause of increased ESD events."
    },
    "tip": "Dry air increases static buildup; very low humidity means greater ESD risk. CompTIA A+ 220-1202 - Environmental Impacts & Controls Page 7"
  },
  {
    "topic": "Environmental Impacts and Controls",
    "number": 6,
    "question": "A data center hardware audit reveals recurring corrosion and oxidation on metal connectors used in network and server equipment. Which environmental condition would most likely explain this issue?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Humidity levels that are too low",
      "B": "Ambient temperature that is too high",
      "C": "Humidity levels that are too high",
      "D": "Ambient temperature that is too low"
    },
    "explanations": {
      "A": "Low humidity mainly increases static-electricity risk rather than promoting corrosion.",
      "B": "High temperature can stress equipment, but moisture is the environmental factor most directly associated with oxidation and corrosion.",
      "C": "Excess moisture in the air can promote oxidation and corrosion on metal contacts and connectors.",
      "D": "Low temperature by itself is not the primary cause; corrosion is more closely linked to excessive moisture."
    },
    "tip": "Too little humidity causes ESD; too much humidity encourages corrosion and condensation. CompTIA A+ 220-1202 - Environmental Impacts & Controls Page 8"
  },
  {
    "topic": "Environmental Impacts and Controls",
    "number": 7,
    "question": "Which of the following is not considered a best-practice guideline for proper equipment placement to ensure adequate temperature and ventilation?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Maintain clear airflow around intake and exhaust vents",
      "B": "Avoid placing equipment near heat-generating sources",
      "C": "Ensure all exhaust fans are pushing air into the cold aisle",
      "D": "Position equipment in a climate-controlled environment",
      "E": "Ensure adequate clearance around all sides of the device"
    },
    "explanations": {
      "A": "Keeping vents unobstructed allows cool air in and hot air out, which is a proper ventilation practice.",
      "B": "Separating equipment from heat sources reduces the thermal load and helps cooling systems work effectively.",
      "C": "Exhaust fans should remove hot air toward the hot-air side, not push heated exhaust into a cold aisle; doing so disrupts proper airflow design.",
      "D": "Climate control helps maintain safe operating temperature and humidity.",
      "E": "Clearance prevents blocked vents and allows airflow around the equipment."
    },
    "tip": "Cold air should feed equipment intakes; hot exhaust should be directed away from the cold-air path. CompTIA A+ 220-1202 - Environmental Impacts & Controls Page 9"
  },
  {
    "topic": "Environmental Impacts and Controls",
    "number": 8,
    "question": "What is the primary risk associated with excessive dust accumulation inside a workstation's chassis?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Power supply voltage fluctuations",
      "B": "Increased electromagnetic interference",
      "C": "Reduced Wi-Fi signal strength",
      "D": "Thermal buildup due to insulation"
    },
    "explanations": {
      "A": "Dust does not normally cause utility voltage to fluctuate; voltage problems originate in the power source or power-conditioning system.",
      "B": "Dust is not a primary source of electromagnetic interference.",
      "C": "Internal chassis dust does not normally cause a significant reduction in wireless signal strength.",
      "D": "Dust can coat heatsinks, fans, and vents, restricting airflow and acting as insulation, which traps heat and raises component temperatures."
    },
    "tip": "Dust blocks airflow and coats cooling surfaces, so the biggest hardware risk is heat buildup. CompTIA A+ 220-1202 - Environmental Impacts & Controls Page 10"
  },
  {
    "topic": "Environmental Impacts and Controls",
    "number": 9,
    "question": "Which precautions should be followed to avoid moisture-related damage when using compressed air to clean computer hardware? (Select 3 answers)",
    "answers": [
      "A",
      "B",
      "D"
    ],
    "options": {
      "A": "Avoid shaking the can during use",
      "B": "Keep the can upright",
      "C": "Apply long, continuous sprays to ensure all dust is dislodged",
      "D": "Use short, controlled bursts",
      "E": "Shake the can frequently during use to maintain high pressure",
      "F": "Keep the can tilted to prevent liquid leakage"
    },
    "explanations": {
      "A": "Shaking an aerosol duster can increase the chance that liquid propellant reaches the nozzle instead of remaining properly separated.",
      "B": "Holding the can upright helps prevent liquid propellant from being expelled onto electronic components.",
      "C": "Long sprays can cool the can rapidly and increase the chance of propellant or condensation reaching the hardware.",
      "D": "Short bursts reduce rapid cooling and help minimize the chance of liquid propellant or moisture being sprayed onto components.",
      "E": "Shaking is specifically something to avoid because it can mix liquid propellant toward the outlet.",
      "F": "Tilting or inverting the can makes liquid propellant more likely to escape; it should remain upright."
    },
    "tip": "With canned air: keep it upright, do not shake it, and use short bursts. CompTIA A+ 220-1202 - Environmental Impacts & Controls Page 11"
  },
  {
    "topic": "Environmental Impacts and Controls",
    "number": 10,
    "question": "A technician is cleaning a laser printer and notices toner dust mixed with regular dust inside the device. What is the safest course of action?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Shake the toner cartridge to loosen debris",
      "B": "Use a wet cloth to wipe the toner",
      "C": "Blow the toner out with compressed air",
      "D": "Use an ESD-safe vacuum designed for toner"
    },
    "explanations": {
      "A": "Shaking can spread additional toner into the printer and air instead of safely removing the contamination.",
      "B": "Adding liquid inside a printer can damage components, and toner cleanup should follow methods designed for fine toner particles.",
      "C": "Compressed air can aerosolize toner and spread fine particles through the room, increasing inhalation and contamination risk.",
      "D": "A toner-rated ESD-safe vacuum is designed to capture fine toner particles without spreading them and while reducing static risk around electronic components."
    },
    "tip": "Never blow toner around; capture it with a toner-rated ESD-safe vacuum. CompTIA A+ 220-1202 - Environmental Impacts & Controls Page 12"
  },
  {
    "topic": "Environmental Impacts and Controls",
    "number": 11,
    "question": "The term \"Brownout\" refers to what kind of situation?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Power fluctuation",
      "B": "Power sag",
      "C": "Prolonged undervoltage",
      "D": "Power outage"
    },
    "explanations": {
      "A": "Power fluctuation is a broad term for changing electrical conditions; a brownout specifically describes sustained low voltage.",
      "B": "A sag is generally a shorter-duration voltage reduction, while the quiz defines a brownout as a prolonged undervoltage condition.",
      "C": "A brownout is an extended reduction in supplied voltage below the normal level.",
      "D": "A power outage is a complete loss of power, which is a blackout rather than a brownout."
    },
    "tip": "Brownout = power is still present, but the voltage stays too low. CompTIA A+ 220-1202 - Environmental Impacts & Controls Page 13"
  },
  {
    "topic": "Environmental Impacts and Controls",
    "number": 12,
    "question": "What does the term \"Blackout\" refer to?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Intermittent power loss",
      "B": "Drop in voltage",
      "C": "Power sag",
      "D": "Complete loss of power"
    },
    "explanations": {
      "A": "Intermittent loss describes power repeatedly cutting in and out rather than one complete outage.",
      "B": "A voltage drop can describe undervoltage without complete loss of electricity.",
      "C": "A sag is a temporary voltage reduction, not a total loss of power.",
      "D": "A blackout means electrical power is completely unavailable for a period of time."
    },
    "tip": "Blackout = zero power; brownout = reduced voltage. CompTIA A+ 220-1202 - Environmental Impacts & Controls Page 14"
  },
  {
    "topic": "Environmental Impacts and Controls",
    "number": 13,
    "question": "Which of the answers listed below best describes the primary function of a UPS?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Filters electrical noise from the power line",
      "B": "Ensures consistent voltage delivery to hardware",
      "C": "Provides battery-backed power during an outage",
      "D": "Regulates incoming voltage to a stable level"
    },
    "explanations": {
      "A": "Some UPS models provide filtering, but noise filtering is not their primary purpose.",
      "B": "Certain UPS designs provide voltage regulation, but the defining primary function is temporary battery power when utility power fails.",
      "C": "A UPS supplies temporary battery power when utility power is lost, allowing equipment to remain running briefly or shut down safely.",
      "D": "Voltage regulation is associated with line conditioning and may be a UPS feature, but it is not the primary function identified by the quiz."
    },
    "tip": "UPS buys time during a power failure by switching to battery-backed power. CompTIA A+ 220-1202 - Environmental Impacts & Controls Page 15"
  },
  {
    "topic": "Environmental Impacts and Controls",
    "number": 14,
    "question": "A technician is setting up a new workstation in an area prone to frequent lightning storms. Which device should be installed to protect the computer's power supply from sudden, high-voltage spikes?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Line conditioner",
      "B": "Standby power supply",
      "C": "Power strip",
      "D": "Surge suppressor"
    },
    "explanations": {
      "A": "A line conditioner smooths voltage variations and electrical noise, but a surge suppressor is specifically designed to divert or limit sudden voltage spikes.",
      "B": "A standby power supply provides backup power when utility power fails; it is not primarily the device for suppressing high-voltage surges.",
      "C": "A basic power strip only provides additional outlets unless it explicitly includes surge-protection circuitry.",
      "D": "A surge suppressor limits transient high-voltage spikes before they can reach and damage the workstation's power supply and electronics."
    },
    "tip": "Lightning-related voltage spike protection = surge suppressor; outage backup = UPS."
  },
  {
    "topic": "Filesystem Types",
    "number": 1,
    "question": "Which Microsoft-developed file system provides advanced features such as file and folder permissions, encryption, compression, and support for very large files and partitions?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "FAT32",
      "B": "HFS+",
      "C": "exFAT",
      "D": "NTFS"
    },
    "explanations": {
      "A": "FAT32 is an older file system with broad compatibility, but it lacks NTFS features such as file-level permissions, native compression, and advanced security.",
      "B": "HFS+ is an Apple file system and was used by macOS before APFS; it is not the Microsoft file system described.",
      "C": "exFAT is Microsoft-developed and supports large files, but it is designed mainly for removable storage and does not provide the full permissions, compression, and security feature set of NTFS.",
      "D": "NTFS is Microsoft's standard modern Windows file system and supports ACL permissions, EFS encryption, compression, journaling, and very large files and volumes."
    },
    "tip": "NTFS is the Windows file system to remember for permissions, encryption, compression, and journaling. CompTIA A+ 220-1202 - Filesystem Types Page 3"
  },
  {
    "topic": "Filesystem Types",
    "number": 2,
    "question": "Which Microsoft file system was specifically designed for maximum resilience, data integrity, and large-scale storage deployments in enterprise environments?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "XFS",
      "B": "Btrfs",
      "C": "ZFS",
      "D": "ReFS",
      "E": "NTFS"
    },
    "explanations": {
      "A": "XFS is a high-performance file system commonly used on Linux and UNIX-like systems, not a Microsoft enterprise file system.",
      "B": "Btrfs is a Linux copy-on-write file system with advanced integrity and snapshot features, but it is not Microsoft-developed.",
      "C": "ZFS is known for strong data-integrity and storage-pool features, but it originated outside Microsoft and is not the Windows file system asked for.",
      "D": "ReFS, or Resilient File System, was created by Microsoft for resilient storage, integrity checking, large data sets, and enterprise/server storage scenarios.",
      "E": "NTFS is the common Windows general-purpose file system, but ReFS is the Microsoft file system specifically focused on resilience and large-scale storage."
    },
    "tip": "ReFS literally means Resilient File System - associate it with integrity and large enterprise storage. CompTIA A+ 220-1202 - Filesystem Types Page 4"
  },
  {
    "topic": "Filesystem Types",
    "number": 3,
    "question": "Which file system is known for its 4 GB maximum file size and 2 TB maximum volume size limitations?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "FAT32",
      "B": "NFS",
      "C": "exFAT",
      "D": "APFS"
    },
    "explanations": {
      "A": "FAT32 has a maximum individual file size of about 4 GB and is commonly associated with a 2 TB maximum volume size under typical implementations.",
      "B": "NFS is a network file-sharing protocol, not a local disk file system with the FAT32 limits described.",
      "C": "exFAT was designed to overcome FAT32's small-file limitation and supports files much larger than 4 GB.",
      "D": "APFS is Apple's modern file system and supports much larger files and storage capacities than FAT32."
    },
    "tip": "FAT32's famous exam limitation is 4 GB per file. CompTIA A+ 220-1202 - Filesystem Types Page 5"
  },
  {
    "topic": "Filesystem Types",
    "number": 4,
    "question": "Which file system is the default choice for many modern Linux distributions?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "ext4",
      "B": "HFS+",
      "C": "exFAT",
      "D": "ReFS",
      "E": "DFS"
    },
    "explanations": {
      "A": "ext4 is a mature journaling file system and has long been the default or common standard choice for many Linux distributions.",
      "B": "HFS+ is an older Apple file system and is not a normal Linux default.",
      "C": "exFAT is useful for removable drives and cross-platform compatibility, but it is not the normal default Linux system file system.",
      "D": "ReFS is a Microsoft file system intended for resilient Windows storage scenarios.",
      "E": "DFS is Microsoft's Distributed File System technology for organizing and replicating network shares; it is not a Linux disk file system."
    },
    "tip": "ext4 is the common CompTIA answer for a standard modern Linux file system. CompTIA A+ 220-1202 - Filesystem Types Page 6"
  },
  {
    "topic": "Filesystem Types",
    "number": 5,
    "question": "Which file system is a high-performance choice commonly used in UNIX-like operating systems such as Linux to handle very large files and storage volumes?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "XFS",
      "B": "exFAT",
      "C": "FAT32",
      "D": "NFS"
    },
    "explanations": {
      "A": "XFS is a high-performance 64-bit journaling file system designed to scale well for large files, large volumes, and demanding Linux storage workloads.",
      "B": "exFAT is primarily intended for flash and removable media and does not provide the same Linux enterprise-scale journaling design as XFS.",
      "C": "FAT32 has significant file-size and volume limitations and is not designed for large high-performance Linux storage.",
      "D": "NFS is a network file-sharing protocol that provides remote filesystem access; it is not the local high-performance disk file system described."
    },
    "tip": "XFS = high-performance Linux/UNIX-like storage for very large files and volumes. CompTIA A+ 220-1202 - Filesystem Types Page 7"
  },
  {
    "topic": "Filesystem Types",
    "number": 6,
    "question": "A Microsoft-developed file system designed for flash storage and large removable drives is known as:",
    "answers": [
      "A"
    ],
    "options": {
      "A": "exFAT",
      "B": "CDFS",
      "C": "ReFS",
      "D": "HFS+",
      "E": "EFS"
    },
    "explanations": {
      "A": "exFAT was developed by Microsoft for flash memory and removable media and supports files larger than FAT32's 4 GB limit.",
      "B": "CDFS refers to a file system used with compact discs and is not intended for large flash drives.",
      "C": "ReFS is focused on resilient enterprise storage rather than removable flash media.",
      "D": "HFS+ is an Apple-developed file system and is not Microsoft's removable-media format.",
      "E": "EFS is the Encrypting File System feature used with NTFS for file encryption; it is not a standalone removable-drive file system."
    },
    "tip": "exFAT is the FAT-family choice for modern large flash drives and files over 4 GB. CompTIA A+ 220-1202 - Filesystem Types Page 8"
  },
  {
    "topic": "Filesystem Types",
    "number": 7,
    "question": "Which file system is the default macOS file system optimized for SSDs and encryption?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "APFS",
      "B": "FAT32",
      "C": "ext4",
      "D": "NTFS",
      "E": "exFAT"
    },
    "explanations": {
      "A": "APFS, the Apple File System, is Apple's modern default and was designed with flash/SSD storage, encryption, snapshots, and modern Apple devices in mind.",
      "B": "FAT32 is used mainly for compatibility and removable media and is not the default macOS system file system.",
      "C": "ext4 is associated with Linux, not macOS.",
      "D": "NTFS is Microsoft's standard Windows file system and is not the default for macOS.",
      "E": "exFAT is useful for sharing removable drives across operating systems, but it is not macOS's default system file system."
    },
    "tip": "APFS = Apple File System; remember Apple + SSD + encryption. CompTIA A+ 220-1202 - Filesystem Types Page 9"
  },
  {
    "topic": "Filesystem Types",
    "number": 8,
    "question": "Which file systems offer the broadest cross-platform compatibility across Windows, macOS, and Linux systems? (Select 2 answers)",
    "answers": [
      "A",
      "D"
    ],
    "options": {
      "A": "FAT32",
      "B": "ext4",
      "C": "NTFS",
      "D": "exFAT",
      "E": "APFS"
    },
    "explanations": {
      "A": "FAT32 is widely readable and writable across Windows, macOS, Linux, and many other devices, although it has a 4 GB per-file limit.",
      "B": "ext4 is primarily a Linux file system and is not natively writable by standard Windows or macOS installations.",
      "C": "NTFS is native to Windows; other operating systems may support it to varying degrees, but it is not as universally read/write compatible as FAT32 and exFAT.",
      "D": "exFAT is widely supported by Windows, modern macOS, and Linux and avoids FAT32's 4 GB file-size limit, making it useful for shared removable drives.",
      "E": "APFS is Apple's modern file system and does not provide broad native cross-platform support on Windows and Linux."
    },
    "tip": "For sharing removable storage across Windows, macOS, and Linux, remember FAT32 and exFAT."
  },
  {
    "topic": "Incident Response",
    "number": 1,
    "question": "Which of the following best describes the primary purpose of maintaining a chain of custody?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "To provide a step-by-step log of the incident remediation process",
      "B": "To track the movement of corporate assets for inventory management purposes",
      "C": "To track which systems were affected during an incident",
      "D": "To preserve the integrity of evidence for potential legal proceedings"
    },
    "explanations": {
      "A": "Remediation documentation records how an incident was contained and resolved. Chain of custody instead focuses on the possession and handling of evidence.",
      "B": "Asset tracking records where organizational equipment is assigned or located. It is separate from forensic evidence handling.",
      "C": "Identifying affected systems is part of incident scoping and documentation, but it does not establish who possessed evidence and when.",
      "D": "Chain of custody documents who collected, handled, transferred, and controlled evidence so its integrity and authenticity can be demonstrated if it is used in an investigation or legal proceeding."
    },
    "tip": "Chain of custody proves where evidence has been, who handled it, and that it remained controlled. CompTIA A+ 220-1202 - Incident Response Page 3"
  },
  {
    "topic": "Incident Response",
    "number": 2,
    "question": "Which items must always be included when documenting a chain of custody? (Select 2 answers)",
    "answers": [
      "C",
      "D"
    ],
    "options": {
      "A": "Description of the location where the evidence was found",
      "B": "Method used to collect the evidence",
      "C": "Chronological log of everyone who handled the evidence",
      "D": "Date and time of evidence transfer",
      "E": "List of remediation steps taken after evidence collection"
    },
    "explanations": {
      "A": "The discovery location can be useful forensic documentation, but the source specifically identifies the handling history and transfer timing as the required chain-of-custody items.",
      "B": "Collection methodology may be recorded in forensic notes, but it is not one of the two required chain-of-custody entries selected in this quiz.",
      "C": "A chain of custody must identify each person who possessed or handled the evidence so responsibility can be traced continuously.",
      "D": "Recording when evidence changes possession establishes the timeline of custody and helps show that there were no undocumented gaps.",
      "E": "Remediation steps describe how the incident was addressed and are not part of documenting the evidence's custody history."
    },
    "tip": "Chain of custody needs WHO handled the evidence and WHEN custody changed. CompTIA A+ 220-1202 - Incident Response Page 4"
  },
  {
    "topic": "Incident Response",
    "number": 3,
    "question": "A technician discovers evidence of credit card data theft on a company server. What is the most appropriate next step?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Shut down the server to preserve its current state",
      "B": "Contact local law enforcement directly",
      "C": "Disconnect the server from the network to prevent further access",
      "D": "Notify management and follow escalation procedures"
    },
    "explanations": {
      "A": "Immediately shutting down the server can destroy volatile evidence in memory and may violate the organization's incident-response procedures.",
      "B": "A technician should follow the organization's reporting and escalation process rather than independently contacting law enforcement unless policy specifically directs that action.",
      "C": "Isolation may later be part of containment, but the source expects the technician first to notify the appropriate organizational authorities and follow established escalation procedures.",
      "D": "Suspected theft of regulated financial data is a serious incident. The technician should promptly notify management or the designated incident-response authority and follow the organization's escalation process."
    },
    "tip": "For serious security incidents, follow the organization's escalation path before taking unapproved actions that could alter evidence. CompTIA A+ 220-1202 - Incident Response Page 5"
  },
  {
    "topic": "Incident Response",
    "number": 4,
    "question": "Which of the terms listed below is used to describe a forensic copy of a storage device that captures every sector of the drive, including deleted files, hidden partitions, and unallocated space?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Disk mirroring",
      "B": "File system dump",
      "C": "Bit-by-bit image",
      "D": "Snapshot image"
    },
    "explanations": {
      "A": "Disk mirroring duplicates active data for redundancy and availability, but it is not specifically a forensic sector-by-sector acquisition.",
      "B": "A file-system-level copy generally focuses on recognized files and structures and may omit deleted data or unallocated sectors.",
      "C": "A bit-by-bit forensic image copies every readable sector of the storage device, preserving allocated files, deleted remnants, hidden areas, partitions, and unallocated space for analysis.",
      "D": "A snapshot captures a point-in-time state of a system or volume, but it is not necessarily a complete sector-level forensic copy of the physical drive."
    },
    "tip": "Forensics needs more than visible files - a bit-by-bit image captures the entire readable storage surface. CompTIA A+ 220-1202 - Incident Response Page 6"
  },
  {
    "topic": "Incident Response",
    "number": 5,
    "question": "During an incident investigation, a technician must acquire data from a suspect's storage drive without altering any information. Which of the following ensures the contents of the drive cannot be modified during this process?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Disk encryption",
      "B": "Password-protected access",
      "C": "Checksum verification",
      "D": "Write blocker"
    },
    "explanations": {
      "A": "Encryption protects data confidentiality but does not prevent an authorized acquisition system from writing changes to the source drive.",
      "B": "A password controls access but does not technically block write operations after access is granted.",
      "C": "A checksum can help detect whether data changed, but it does not prevent the acquisition computer from writing to the source.",
      "D": "A write blocker permits read operations needed for forensic acquisition while preventing write commands from reaching the source drive, protecting the original evidence from modification."
    },
    "tip": "A write blocker protects the original evidence by allowing reads but stopping writes. CompTIA A+ 220-1202 - Incident Response Page 7"
  },
  {
    "topic": "Incident Response",
    "number": 6,
    "question": "A technician needs to confirm that a forensic image has not been altered since its creation. Which method provides this assurance?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Running a disk integrity check",
      "B": "Checking the system event logs",
      "C": "Examining the evidence transfer records",
      "D": "Comparing hash values"
    },
    "explanations": {
      "A": "A disk integrity check looks for filesystem or storage errors; it does not establish that the forensic image is byte-for-byte unchanged from its original acquisition.",
      "B": "Event logs can show system activity, but they do not cryptographically verify the forensic image's contents.",
      "C": "Transfer records support chain of custody, but documentation alone cannot prove that the image's digital contents have not changed.",
      "D": "A cryptographic hash acts as a digital fingerprint. Matching the current image hash to the hash recorded at acquisition provides strong evidence that the image has not been altered."
    },
    "tip": "Hash before and after handling - matching hashes support evidence integrity. CompTIA A+ 220-1202 - Incident Response Page 8"
  },
  {
    "topic": "Incident Response",
    "number": 7,
    "question": "When documenting a security incident, which type of detail should be strictly avoided to maintain the integrity of the report?",
    "answers": [
      "E"
    ],
    "options": {
      "A": "Timeline of events",
      "B": "Actions taken during remediation",
      "C": "Personnel involved in the incident",
      "D": "Collected evidence",
      "E": "Speculative statements"
    },
    "explanations": {
      "A": "A factual timeline is essential because it records when relevant events and actions occurred.",
      "B": "Documenting actual remediation actions provides an auditable record of the response.",
      "C": "Identifying relevant personnel can be necessary for accountability and follow-up when recorded factually.",
      "D": "The evidence gathered during the investigation should be documented so the report reflects the factual basis of the investigation.",
      "E": "Speculation introduces unsupported assumptions and can undermine the accuracy and credibility of an incident report. Documentation should distinguish verified facts from anything not yet established."
    },
    "tip": "Incident reports should record observable facts and verified actions - not guesses. CompTIA A+ 220-1202 - Incident Response Page 9"
  },
  {
    "topic": "Incident Response",
    "number": 8,
    "question": "Which of the answers listed below shows the basic order of volatility for a typical system?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Archival media, Disk, RAM, CPU registers/cache",
      "B": "RAM, CPU registers/cache, Disk, Archival media",
      "C": "Disk, Archival media, CPU registers/cache, RAM",
      "D": "CPU registers/cache, RAM, Disk, Archival media"
    },
    "explanations": {
      "A": "This sequence is reversed: archival media is among the least volatile evidence, while CPU registers and cache can disappear almost immediately.",
      "B": "RAM is highly volatile, but CPU registers and cache are even more volatile and should be captured first.",
      "C": "This begins with relatively persistent storage and delays collection of volatile CPU and memory data, risking evidence loss.",
      "D": "Forensic collection generally proceeds from the most volatile data to the least volatile. CPU registers/cache change fastest, followed by RAM, then persistent disk storage, with archival media being less volatile."
    },
    "tip": "Collect evidence from fastest-to-disappear to most persistent: CPU/cache -> RAM -> disk -> archival media."
  },
  {
    "topic": "Linux Command Line",
    "number": 1,
    "question": "Which Linux command is used to display files and directories in the current working directory?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "pwd",
      "B": "ls",
      "C": "grep",
      "D": "ps"
    },
    "explanations": {
      "A": "pwd prints the path of the current working directory; it does not list its contents.",
      "B": "ls lists files and directories in the current directory, with options available for details, hidden files, sorting, and more.",
      "C": "grep searches text for matching patterns rather than listing directory contents.",
      "D": "ps displays information about running processes."
    },
    "tip": "ls = list directory contents; pwd = print where you are. CompTIA A+ 220-1202 - Linux Command Line Quiz Page 3"
  },
  {
    "topic": "Linux Command Line",
    "number": 2,
    "question": "Which command in Linux displays the absolute path of the current working directory?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "mv",
      "B": "pwd",
      "C": "rm",
      "D": "dir"
    },
    "explanations": {
      "A": "mv moves or renames files and directories.",
      "B": "pwd means print working directory and outputs the full absolute path of the current location.",
      "C": "rm removes files and, with options, directories.",
      "D": "dir can list directory contents on some Linux systems but does not print the current path."
    },
    "tip": "pwd answers: What directory am I currently in? CompTIA A+ 220-1202 - Linux Command Line Quiz Page 4"
  },
  {
    "topic": "Linux Command Line",
    "number": 3,
    "question": "Which Linux command is used for moving or renaming files and directories?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "rm",
      "B": "cp",
      "C": "ln",
      "D": "mv"
    },
    "explanations": {
      "A": "rm deletes files or directories rather than relocating them.",
      "B": "cp creates a copy while leaving the original in place.",
      "C": "ln creates hard or symbolic links.",
      "D": "mv changes a file or directory location and also performs renaming when the destination is a new name."
    },
    "tip": "mv = move, and moving to a new name also renames. CompTIA A+ 220-1202 - Linux Command Line Quiz Page 5"
  },
  {
    "topic": "Linux Command Line",
    "number": 4,
    "question": "Which command is used for copying files and directories in Linux?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "cp",
      "B": "copy",
      "C": "xcopy",
      "D": "robocopy"
    },
    "explanations": {
      "A": "cp copies files, and with recursive options it can copy directory trees.",
      "B": "copy is not the standard Linux command used in the source.",
      "C": "xcopy is a Windows command-line copying utility.",
      "D": "robocopy is a Windows robust file-copy utility."
    },
    "tip": "cp = copy on Linux. CompTIA A+ 220-1202 - Linux Command Line Quiz Page 6"
  },
  {
    "topic": "Linux Command Line",
    "number": 5,
    "question": "A command-line command in Linux used for deleting files and directories is known as:",
    "answers": [
      "B"
    ],
    "options": {
      "A": "erase",
      "B": "rm",
      "C": "del",
      "D": "edit"
    },
    "explanations": {
      "A": "erase is not the standard Linux removal command in the source.",
      "B": "rm removes files and can remove directories when used with appropriate recursive options.",
      "C": "del is associated with Windows/DOS rather than standard Linux file removal.",
      "D": "edit does not represent the Linux deletion command."
    },
    "tip": "rm = remove; be careful because command-line deletion may not use a Trash folder. CompTIA A+ 220-1202 - Linux Command Line Quiz Page 7"
  },
  {
    "topic": "Linux Command Line",
    "number": 6,
    "question": "What is the function of the Linux chmod command?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Alters group membership for a user",
      "B": "Changes the owner and/or group of a file or directory",
      "C": "Sets or modifies permissions for files and directories",
      "D": "Updates the default shell for a user"
    },
    "explanations": {
      "A": "User group membership is managed with account-management tools, not chmod.",
      "B": "chown changes ownership; chmod changes permission bits.",
      "C": "chmod changes read, write, and execute permissions using symbolic or numeric modes.",
      "D": "Changing a login shell is handled by tools such as chsh or usermod, not chmod."
    },
    "tip": "chmod = change mode/permissions; chown = change owner. CompTIA A+ 220-1202 - Linux Command Line Quiz Page 8"
  },
  {
    "topic": "Linux Command Line",
    "number": 7,
    "question": "What does the chown command do in Linux?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Sets or modifies permissions for files and directories",
      "B": "Displays user identity and group information",
      "C": "Changes the owner and/or group of a file or directory",
      "D": "Modifies default file creation permissions"
    },
    "explanations": {
      "A": "chmod handles permission modes.",
      "B": "id displays user and group identity information.",
      "C": "chown changes file or directory ownership and can also set the group.",
      "D": "umask controls default permission masks for newly created files and directories."
    },
    "tip": "chown = change ownership. CompTIA A+ 220-1202 - Linux Command Line Quiz Page 9"
  },
  {
    "topic": "Linux Command Line",
    "number": 8,
    "question": "Which Linux command enables searching within file contents for specific text patterns?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "search",
      "B": "find",
      "C": "grep",
      "D": "locate"
    },
    "explanations": {
      "A": "search is not the standard command selected by the source.",
      "B": "find searches the filesystem for files/directories based on names and other attributes.",
      "C": "grep scans text and returns lines that match a specified pattern.",
      "D": "locate searches an indexed database for filesystem paths rather than searching inside file contents."
    },
    "tip": "grep searches inside text; find searches for filesystem objects. CompTIA A+ 220-1202 - Linux Command Line Quiz Page 10"
  },
  {
    "topic": "Linux Command Line",
    "number": 9,
    "question": "A Linux command-line utility used to search for files and directories is called:",
    "answers": [
      "A"
    ],
    "options": {
      "A": "find",
      "B": "path",
      "C": "search",
      "D": "grep"
    },
    "explanations": {
      "A": "find searches directory trees for files and directories using criteria such as name, type, size, and time.",
      "B": "path is not the standard Linux search utility selected here.",
      "C": "search is not the standard command in the source.",
      "D": "grep searches text content, not primarily filesystem names and locations."
    },
    "tip": "find locates files/directories; grep locates matching text. CompTIA A+ 220-1202 - Linux Command Line Quiz Page 11"
  },
  {
    "topic": "Linux Command Line",
    "number": 10,
    "question": "The fsck command in Linux can be used for: (Select 2 answers)",
    "answers": [
      "B",
      "D"
    ],
    "options": {
      "A": "Formatting new partitions",
      "B": "Verifying filesystem integrity",
      "C": "Securely deleting files",
      "D": "Repairing filesystem errors",
      "E": "Checking available disk space"
    },
    "explanations": {
      "A": "Filesystem creation is performed with mkfs-family tools, not fsck.",
      "B": "fsck checks a filesystem for structural inconsistencies and errors.",
      "C": "fsck is a filesystem check/repair tool, not a secure-erasure utility.",
      "D": "Depending on filesystem and options, fsck can repair detected filesystem inconsistencies.",
      "E": "df reports filesystem free/used capacity; fsck does not serve that purpose."
    },
    "tip": "fsck = filesystem check and repair. CompTIA A+ 220-1202 - Linux Command Line Quiz Page 12"
  },
  {
    "topic": "Linux Command Line",
    "number": 11,
    "question": "The mount command makes a filesystem accessible by attaching it to a directory called a mount point.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Linux uses one filesystem tree, and mount attaches another filesystem at a chosen directory so its contents become accessible there.",
      "B": "The statement correctly describes the role of the mount command."
    },
    "tip": "mount connects a filesystem to the Linux directory tree. CompTIA A+ 220-1202 - Linux Command Line Quiz Page 13"
  },
  {
    "topic": "Linux Command Line",
    "number": 12,
    "question": "Which Linux command allows a user to assume another system user identity and operate within that user's shell environment?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "login",
      "B": "id",
      "C": "usermod",
      "D": "su"
    },
    "explanations": {
      "A": "login starts/authenticates a login session but is not the source answer for switching identity from an existing shell.",
      "B": "id reports user and group identifiers.",
      "C": "usermod changes user-account properties.",
      "D": "su switches user identity and can start a shell as the target user, commonly root when no username is supplied."
    },
    "tip": "su = switch user; sudo = run a command with elevated privileges. CompTIA A+ 220-1202 - Linux Command Line Quiz Page 14"
  },
  {
    "topic": "Linux Command Line",
    "number": 13,
    "question": "Which command lets a permitted Linux user execute a single command with elevated privileges, typically as root?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "chmod",
      "B": "su",
      "C": "usermod",
      "D": "sudo"
    },
    "explanations": {
      "A": "chmod changes permissions on filesystem objects.",
      "B": "su changes the shell identity/session; the source asks for executing a single privileged command.",
      "C": "usermod modifies user account settings.",
      "D": "sudo runs an authorized command with another user's privileges, commonly root, without permanently switching the shell identity."
    },
    "tip": "sudo = elevate one command; su = switch user shell. CompTIA A+ 220-1202 - Linux Command Line Quiz Page 15"
  },
  {
    "topic": "Linux Command Line",
    "number": 14,
    "question": "Which utility installs, upgrades, and removes software packages on Debian and Debian-based Linux distributions?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "rpm",
      "B": "apt",
      "C": "dnf",
      "D": "yum"
    },
    "explanations": {
      "A": "RPM is a package format/tool associated primarily with Red Hat-family distributions.",
      "B": "APT is the high-level package-management system widely used on Debian and Debian-based distributions.",
      "C": "DNF is the modern package manager used on Red Hat/Fedora-family systems.",
      "D": "YUM is associated with older Red Hat-family package management."
    },
    "tip": "Debian/Ubuntu = apt; modern Red Hat/Fedora = dnf. CompTIA A+ 220-1202 - Linux Command Line Quiz Page 16"
  },
  {
    "topic": "Linux Command Line",
    "number": 15,
    "question": "Which software package manager is used in modern Red Hat and Red Hat-based Linux distributions?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "pkg",
      "B": "dnf",
      "C": "dpkg",
      "D": "apt"
    },
    "explanations": {
      "A": "pkg is used by other Unix-like systems and is not the source answer for modern Red Hat.",
      "B": "DNF is the modern package manager used by Fedora and current Red Hat-family distributions.",
      "C": "dpkg is the low-level package tool used by Debian-family systems.",
      "D": "APT is associated with Debian and Debian-based distributions."
    },
    "tip": "dnf = modern Red Hat-family package management. CompTIA A+ 220-1202 - Linux Command Line Quiz Page 17"
  },
  {
    "topic": "Linux Command Line",
    "number": 16,
    "question": "Which modern Linux command-line utility displays and manages network configuration settings?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "ipconfig",
      "B": "route",
      "C": "ip",
      "D": "netstat"
    },
    "explanations": {
      "A": "ipconfig is a Windows TCP/IP configuration command.",
      "B": "route focuses on routing tables and is an older/specialized networking utility rather than the modern all-purpose command requested.",
      "C": "The ip command manages and displays interfaces, IP addresses, routes, and other network configuration.",
      "D": "netstat displays connections, statistics, and routing information but is not the modern configuration utility selected by the source."
    },
    "tip": "Linux ip command handles addresses, links, and routes. CompTIA A+ 220-1202 - Linux Command Line Quiz Page 18"
  },
  {
    "topic": "Linux Command Line",
    "number": 17,
    "question": "A Linux network diagnostic utility used to test the reachability of a host on an IP network is known as:",
    "answers": [
      "A"
    ],
    "options": {
      "A": "ping",
      "B": "tracert",
      "C": "dig",
      "D": "netstat"
    },
    "explanations": {
      "A": "ping sends ICMP echo requests and measures whether a remote host responds.",
      "B": "tracert is the Windows route-tracing command; Linux commonly uses traceroute.",
      "C": "dig queries DNS records.",
      "D": "netstat displays network connections and statistics."
    },
    "tip": "ping asks whether a host is reachable. CompTIA A+ 220-1202 - Linux Command Line Quiz Page 19"
  },
  {
    "topic": "Linux Command Line",
    "number": 18,
    "question": "Which Linux tool is specifically designed to transfer data using protocols such as HTTP, FTP, or SMTP?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "curl",
      "B": "wget",
      "C": "scp",
      "D": "rsync"
    },
    "explanations": {
      "A": "curl transfers data to or from servers and supports many protocols, including HTTP, FTP, and SMTP.",
      "B": "wget is primarily a non-interactive downloader and supports fewer protocol/use cases than the broad curl description in the source.",
      "C": "scp securely copies files over SSH rather than supporting the wide range of internet protocols described.",
      "D": "rsync synchronizes files/directories locally or remotely and is not the multi-protocol transfer utility requested."
    },
    "tip": "curl = versatile URL/data transfer tool across many protocols. CompTIA A+ 220-1202 - Linux Command Line Quiz Page 20"
  },
  {
    "topic": "Linux Command Line",
    "number": 19,
    "question": "Which Linux network administration utility queries DNS servers, retrieves DNS records, and troubleshoots DNS resolution?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "mtr",
      "B": "whois",
      "C": "nc",
      "D": "dig"
    },
    "explanations": {
      "A": "mtr combines route tracing and continuous latency/loss measurement.",
      "B": "whois queries registration information for domains and IP resources.",
      "C": "nc/netcat reads and writes network connections and can test ports.",
      "D": "dig sends DNS queries and displays detailed DNS responses and record information."
    },
    "tip": "dig = DNS investigation. CompTIA A+ 220-1202 - Linux Command Line Quiz Page 21"
  },
  {
    "topic": "Linux Command Line",
    "number": 20,
    "question": "In Linux, tracert maps packet paths and hop times to remote hosts.",
    "answers": [
      "B"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The described function is route tracing, but tracert is the Windows command name.",
      "B": "On Linux the commonly used command is traceroute, while tracert is the Windows equivalent."
    },
    "tip": "Windows = tracert; Linux = traceroute. CompTIA A+ 220-1202 - Linux Command Line Quiz Page 22"
  },
  {
    "topic": "Linux Command Line",
    "number": 21,
    "question": "Which Linux command provides access to documentation and help pages for other commands?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "[command] usage",
      "B": "man [command]",
      "C": "[command] info",
      "D": "docs [command]"
    },
    "explanations": {
      "A": "This is not the standard manual-page syntax in the source.",
      "B": "man opens the manual page for a command, providing syntax, options, descriptions, and related documentation.",
      "C": "Some GNU tools have info documentation, but this is not the source-selected standard syntax.",
      "D": "docs is not the standard Linux manual command."
    },
    "tip": "man = manual pages. CompTIA A+ 220-1202 - Linux Command Line Quiz Page 23"
  },
  {
    "topic": "Linux Command Line",
    "number": 22,
    "question": "Which are common functions of the Linux cat command? (Select 2 answers)",
    "answers": [
      "C",
      "D"
    ],
    "options": {
      "A": "Listing files and directories in a folder",
      "B": "Searching for specific text patterns within a file",
      "C": "Displaying contents of one or more files to the terminal",
      "D": "Concatenating contents of multiple files into a single output stream or file",
      "E": "Renaming or moving a file to a new location"
    },
    "explanations": {
      "A": "ls performs directory listing.",
      "B": "grep performs pattern searching.",
      "C": "cat writes file contents to standard output, so it can display files in the terminal.",
      "D": "cat means concatenate and can combine multiple input files sequentially.",
      "E": "mv performs moving and renaming."
    },
    "tip": "cat = display and concatenate file contents. CompTIA A+ 220-1202 - Linux Command Line Quiz Page 24"
  },
  {
    "topic": "Linux Command Line",
    "number": 23,
    "question": "Which Linux utility provides a real-time, interactive view of CPU, memory, and active processes?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "top",
      "B": "vmstat",
      "C": "ps",
      "D": "tasklist",
      "E": "dstat"
    },
    "explanations": {
      "A": "top continuously refreshes an interactive process list and system utilization statistics.",
      "B": "vmstat reports virtual memory and system statistics but is not the source's interactive process monitor.",
      "C": "ps gives a static process snapshot at execution time.",
      "D": "tasklist is a Windows process-listing command.",
      "E": "dstat can report system resource statistics but is not the source-selected standard interactive process viewer."
    },
    "tip": "top = live process view; ps = snapshot. CompTIA A+ 220-1202 - Linux Command Line Quiz Page 25"
  },
  {
    "topic": "Linux Command Line",
    "number": 24,
    "question": "Which Linux command provides a static snapshot of currently running processes at the moment it is executed?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "tasklist",
      "B": "ps",
      "C": "top"
    },
    "explanations": {
      "A": "tasklist is a Windows command.",
      "B": "ps reports process information at the moment the command runs.",
      "C": "top is an interactive continuously refreshing process monitor."
    },
    "tip": "ps = process snapshot. CompTIA A+ 220-1202 - Linux Command Line Quiz Page 26"
  },
  {
    "topic": "Linux Command Line",
    "number": 25,
    "question": "Which Linux command estimates and displays disk space used by individual files and directories?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "du",
      "B": "fdisk",
      "C": "parted",
      "D": "df"
    },
    "explanations": {
      "A": "du means disk usage and estimates space consumed by files and directory trees.",
      "B": "fdisk manages disk partition tables.",
      "C": "parted creates and modifies disk partitions.",
      "D": "df reports used and available space for mounted filesystems, not per-directory usage in the way requested."
    },
    "tip": "du = directory/file usage; df = filesystem free space. CompTIA A+ 220-1202 - Linux Command Line Quiz Page 27"
  },
  {
    "topic": "Linux Command Line",
    "number": 26,
    "question": "The df command can determine the disk space used by a specific directory and its contents.",
    "answers": [
      "B"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "df reports capacity and free/used space for the filesystem containing a path; it does not total the directory tree itself.",
      "B": "du is the command used to calculate space consumed by a directory and its contents, while df reports filesystem-level usage."
    },
    "tip": "Need a folder size? Use du. Need free disk space? Use df."
  },
  {
    "topic": "Linux OS Features and Tools",
    "number": 1,
    "question": "Which of the answers listed below refers to a command-line text editor for Linux?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "gedit",
      "B": "cat",
      "C": "nano",
      "D": "touch"
    },
    "explanations": {
      "A": "gedit is primarily a graphical text editor, not the command-line editor identified by the quiz.",
      "B": "cat displays or concatenates file contents; it is not an interactive text editor.",
      "C": "nano is a terminal-based text editor that lets users create and modify text files directly from the Linux command line.",
      "D": "touch creates an empty file or updates file timestamps; it does not edit file contents."
    },
    "tip": "nano = edit text in the terminal; cat = display text. CompTIA A+ 220-1202 - Linux OS Features & Tools Page 3"
  },
  {
    "topic": "Linux OS Features and Tools",
    "number": 2,
    "question": "Which plain-text system file contains essential information about Linux user accounts?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "/etc/shadow",
      "B": "/etc/users",
      "C": "/etc/passwd",
      "D": "/etc/sudoers"
    },
    "explanations": {
      "A": "/etc/shadow stores protected password hashes and password-aging information rather than the general account fields requested.",
      "B": "/etc/users is not the standard Linux account database file used by the quiz.",
      "C": "/etc/passwd contains account records such as username, UID, GID, home directory, and default shell.",
      "D": "/etc/sudoers defines sudo authorization rules, not the general list of user accounts."
    },
    "tip": "/etc/passwd = account details; /etc/shadow = protected password data. CompTIA A+ 220-1202 - Linux OS Features & Tools Page 4"
  },
  {
    "topic": "Linux OS Features and Tools",
    "number": 3,
    "question": "Which Linux system file stores encrypted password hashes and additional password-related settings?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "/etc/sysconfig",
      "B": "/etc/passwd",
      "C": "/etc/login.defs",
      "D": "/etc/shadow"
    },
    "explanations": {
      "A": "/etc/sysconfig is associated with system configuration on some distributions, not password hashes.",
      "B": "Modern Linux systems normally place password hashes in /etc/shadow rather than /etc/passwd.",
      "C": "/etc/login.defs defines defaults and policies for account/login tools but does not store each user's password hash.",
      "D": "/etc/shadow stores protected password hashes along with password aging and expiration fields."
    },
    "tip": "Shadow protects password hashes by keeping them out of the world-readable account file. CompTIA A+ 220-1202 - Linux OS Features & Tools Page 5"
  },
  {
    "topic": "Linux OS Features and Tools",
    "number": 4,
    "question": "In Linux, the system file used for local hostname-to-IP-address resolution is located in:",
    "answers": [
      "A"
    ],
    "options": {
      "A": "/etc/hosts",
      "B": "/etc/sysconfig/network",
      "C": "/etc/network/interfaces",
      "D": "/etc/resolv.conf"
    },
    "explanations": {
      "A": "/etc/hosts contains static mappings between hostnames and IP addresses and can be checked before DNS depending on name-service configuration.",
      "B": "This file may contain network configuration on some systems but is not the local hostname mapping table.",
      "C": "This file is used for network interface configuration on some Debian-based systems.",
      "D": "/etc/resolv.conf specifies DNS resolver settings such as nameserver addresses rather than local static hostname mappings."
    },
    "tip": "/etc/hosts = local name-to-IP entries; /etc/resolv.conf = DNS resolver settings. CompTIA A+ 220-1202 - Linux OS Features & Tools Page 6"
  },
  {
    "topic": "Linux OS Features and Tools",
    "number": 5,
    "question": "The /etc/fstab file lists storage devices and partitions, their mount points, and options so filesystems can be mounted automatically at boot.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "This correctly describes the filesystem table and its role in defining persistent mount configuration.",
      "B": "The statement matches the function of /etc/fstab described in the quiz."
    },
    "tip": "fstab = filesystem table for persistent mount definitions. CompTIA A+ 220-1202 - Linux OS Features & Tools Page 7"
  },
  {
    "topic": "Linux OS Features and Tools",
    "number": 6,
    "question": "Which Linux system file specifies the IP addresses of DNS servers used to resolve domain names?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "/etc/hostname",
      "B": "/etc/network/interfaces",
      "C": "/etc/resolv.conf",
      "D": "/etc/sysconfig/network"
    },
    "explanations": {
      "A": "/etc/hostname stores the system's own hostname.",
      "B": "This file configures network interfaces on some distributions, not primarily resolver nameservers.",
      "C": "/etc/resolv.conf contains resolver configuration, including nameserver entries that identify DNS servers.",
      "D": "This is a network configuration file on some distributions but is not the resolver file selected by the quiz."
    },
    "tip": "resolv.conf tells the resolver which DNS servers to ask. CompTIA A+ 220-1202 - Linux OS Features & Tools Page 8"
  },
  {
    "topic": "Linux OS Features and Tools",
    "number": 7,
    "question": "Which answer refers to the standard Linux system and service manager that handles the boot process and manages system resources?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "bootmgr",
      "B": "systemd",
      "C": "init",
      "D": "systemctl"
    },
    "explanations": {
      "A": "bootmgr is associated with the Windows boot process.",
      "B": "systemd is the modern init and service-management system used by many Linux distributions to initialize the system and manage services.",
      "C": "Traditional init systems perform system initialization, but the quiz specifically identifies the modern standard system/service manager as systemd.",
      "D": "systemctl is the command used to control and query systemd; it is not the service manager itself."
    },
    "tip": "systemd is the manager; systemctl is the command used to control it. CompTIA A+ 220-1202 - Linux OS Features & Tools Page 9"
  },
  {
    "topic": "Linux OS Features and Tools",
    "number": 8,
    "question": "Which core Linux component manages hardware resources and acts as an interface between applications and hardware?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Kernel",
      "B": "Device driver",
      "C": "Shell",
      "D": "Daemon"
    },
    "explanations": {
      "A": "The kernel manages CPU, memory, devices, processes, and other hardware resources while providing system services to software.",
      "B": "A device driver controls a particular hardware device but is only one part of the kernel/hardware interface.",
      "C": "The shell interprets user commands and launches programs; it does not manage the system's hardware resources.",
      "D": "A daemon is a background service process, not the core hardware-resource manager."
    },
    "tip": "Kernel = core bridge between software and hardware. CompTIA A+ 220-1202 - Linux OS Features & Tools Page 10"
  },
  {
    "topic": "Linux OS Features and Tools",
    "number": 9,
    "question": "Which Linux component is responsible for loading the OS kernel into memory during startup?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Kernel loader",
      "B": "Systemd",
      "C": "BIOS/UEFI firmware",
      "D": "Bootloader"
    },
    "explanations": {
      "A": "This is a descriptive phrase, but the quiz identifies the standard component category as the bootloader.",
      "B": "systemd starts after the kernel has been loaded and takes over system/service initialization.",
      "C": "Firmware initializes hardware and locates boot code, but the bootloader performs the kernel-loading role requested.",
      "D": "The bootloader loads the Linux kernel into memory and transfers execution to it during startup."
    },
    "tip": "Firmware starts the boot chain; the bootloader loads the kernel. CompTIA A+ 220-1202 - Linux OS Features & Tools Page 11"
  },
  {
    "topic": "Linux OS Features and Tools",
    "number": 10,
    "question": "A Linux user account with unrestricted access to system files, commands, and administrative functions is called:",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Admin",
      "B": "System",
      "C": "Root",
      "D": "Sudoer"
    },
    "explanations": {
      "A": "Admin is a generic term and is not the standard Linux superuser account name.",
      "B": "System is not the Linux superuser account name used by the quiz.",
      "C": "root is the Linux superuser account with UID 0 and unrestricted administrative authority.",
      "D": "A sudoer is a user authorized to run selected commands with elevated privileges, but that account is not inherently the root account."
    },
    "tip": "root = UID 0 and full Linux administrative authority. CompTIA A+ 220-1202 - Linux OS Features & Tools Page 12"
  },
  {
    "topic": "Linux OS Features and Tools",
    "number": 11,
    "question": "An administrator needs password hashes, password aging policies, and expiration data for each Linux account. Which file stores this information?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "/etc/passwd",
      "B": "/etc/group",
      "C": "/etc/shadow",
      "D": "/etc/sudoers"
    },
    "explanations": {
      "A": "/etc/passwd stores general account information but normally references protected password data with an x.",
      "B": "/etc/group stores group definitions and membership information.",
      "C": "/etc/shadow contains password hashes plus fields for password changes, aging, warnings, inactivity, and expiration.",
      "D": "/etc/sudoers defines who can use sudo and what commands they may run."
    },
    "tip": "Password hash + aging/expiration fields = /etc/shadow. CompTIA A+ 220-1202 - Linux OS Features & Tools Page 13"
  },
  {
    "topic": "Linux OS Features and Tools",
    "number": 12,
    "question": "In /etc/passwd, what does an 'x' in the second field of a user's entry indicate?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "The account is disabled",
      "B": "The user's password hash is stored in /etc/shadow",
      "C": "The user has a blank password",
      "D": "The user is not part of a group"
    },
    "explanations": {
      "A": "An x by itself in this field does not mean the account is disabled.",
      "B": "The x is a placeholder indicating that the protected password hash is maintained in /etc/shadow.",
      "C": "A blank password field would not be represented simply by the x meaning used here.",
      "D": "Group membership is unrelated to the x in the password field."
    },
    "tip": "x in /etc/passwd points you to /etc/shadow for the protected password hash. CompTIA A+ 220-1202 - Linux OS Features & Tools Page 14"
  },
  {
    "topic": "Linux OS Features and Tools",
    "number": 13,
    "question": "Which file lists Linux user accounts with information such as UID, GID, home directory, and default shell?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "/etc/shadow",
      "B": "/etc/group",
      "C": "/etc/login.defs",
      "D": "/etc/passwd"
    },
    "explanations": {
      "A": "/etc/shadow focuses on protected password and aging data.",
      "B": "/etc/group contains group records rather than the complete user-account fields requested.",
      "C": "/etc/login.defs provides defaults for account-management tools, not the actual account list.",
      "D": "/etc/passwd contains one record per account with fields including username, UID, GID, home directory, and login shell."
    },
    "tip": "Need the user list and home/shell information? Check /etc/passwd. CompTIA A+ 220-1202 - Linux OS Features & Tools Page 15"
  },
  {
    "topic": "Linux OS Features and Tools",
    "number": 14,
    "question": "A technician wants to determine whether a hostname is being resolved from a local static entry rather than DNS. Which file should be inspected?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "/etc/hostname",
      "B": "/etc/nsswitch.conf",
      "C": "/etc/hosts",
      "D": "/etc/resolv.conf"
    },
    "explanations": {
      "A": "/etc/hostname stores the local computer's hostname, not a table of static hostname-to-IP mappings.",
      "B": "/etc/nsswitch.conf can define the order of name-resolution sources, but it does not contain the static hostname mapping itself.",
      "C": "/etc/hosts contains local static hostname-to-IP mappings and is the file to inspect for a manually defined entry.",
      "D": "/etc/resolv.conf identifies DNS resolver settings, not static local host mappings."
    },
    "tip": "Static hostname entry = /etc/hosts. CompTIA A+ 220-1202 - Linux OS Features & Tools Page 16"
  },
  {
    "topic": "Linux OS Features and Tools",
    "number": 15,
    "question": "What is the main functional difference between the mount command and /etc/fstab?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "mount is for local drives; /etc/fstab is for network drives",
      "B": "mount is for read-only mounts; /etc/fstab is for read/write mounts",
      "C": "mount creates temporary mounts; /etc/fstab defines mounts that persist across reboots",
      "D": "mount requires a restart to take effect; /etc/fstab does not"
    },
    "explanations": {
      "A": "Both mechanisms can be used with local or network filesystems depending on filesystem support and configuration.",
      "B": "Either can specify read-only or read/write options.",
      "C": "mount attaches a filesystem for the current running system, while /etc/fstab records persistent mount definitions that can be applied automatically at boot.",
      "D": "The mount command takes effect immediately; editing fstab alone does not require this reversed behavior."
    },
    "tip": "mount = do it now; fstab = remember the mount configuration for boot. CompTIA A+ 220-1202 - Linux OS Features & Tools Page 17"
  },
  {
    "topic": "Linux OS Features and Tools",
    "number": 16,
    "question": "Hostname lookups fail even though /etc/hosts has valid entries. Which file determines the DNS servers queried for names not resolved locally?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "/etc/nsswitch.conf",
      "B": "/etc/network/interfaces",
      "C": "/etc/resolv.conf",
      "D": "/etc/hostname"
    },
    "explanations": {
      "A": "nsswitch.conf can control which name-service sources are consulted and in what order, but the quiz asks which file specifies the DNS servers themselves.",
      "B": "This file configures network interfaces on some systems, not the resolver nameserver list.",
      "C": "/etc/resolv.conf provides resolver settings, including the nameserver IP addresses used for DNS queries.",
      "D": "/etc/hostname defines the local machine's hostname rather than DNS server addresses."
    },
    "tip": "/etc/hosts holds local answers; /etc/resolv.conf identifies DNS servers."
  },
  {
    "topic": "Logical Security Concepts",
    "number": 1,
    "question": "A security rule that prevents users from accessing information and resources beyond the scope of their responsibilities is referred to as:",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Implicit deny policy",
      "B": "Zero Trust model",
      "C": "Principle of least privilege",
      "D": "Separation of duties"
    },
    "explanations": {
      "A": "Implicit deny blocks access that has not been explicitly allowed, but it does not specifically define how much access a user should receive for job duties.",
      "B": "Zero Trust requires continuous verification and removes implicit trust, but the question focuses on limiting permissions to job requirements.",
      "C": "Least privilege gives users only the permissions and resources necessary to perform their assigned responsibilities, reducing unnecessary access.",
      "D": "Separation of duties divides sensitive tasks among multiple people so one person cannot control an entire critical process."
    },
    "tip": "Least privilege = only the access needed to do the job. CompTIA A+ 220-1202 - Logical Security Concepts Page 3"
  },
  {
    "topic": "Logical Security Concepts",
    "number": 2,
    "question": "Which security approach eliminates implicit trust and requires users and devices to be continuously verified before access is granted?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Least privilege access",
      "B": "AAA framework",
      "C": "Zero Trust model",
      "D": "Policy-driven access control"
    },
    "explanations": {
      "A": "Least privilege limits permissions but does not by itself define continuous verification of every access request.",
      "B": "AAA provides authentication, authorization, and accounting services but is not the trust model described.",
      "C": "Zero Trust follows the idea of never automatically trusting a user or device and requires verification before granting access to resources.",
      "D": "Policies can control access decisions, but the specific model that rejects implicit trust is Zero Trust."
    },
    "tip": "Zero Trust = never trust automatically; verify access requests. CompTIA A+ 220-1202 - Logical Security Concepts Page 4"
  },
  {
    "topic": "Logical Security Concepts",
    "number": 3,
    "question": "Which acronym refers to a logical security rule set that controls access to objects and specifies allowed operations?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "AUP",
      "B": "SSO",
      "C": "ACL",
      "D": "OTP"
    },
    "explanations": {
      "A": "An Acceptable Use Policy defines permitted user behavior, not object-level access permissions.",
      "B": "Single sign-on lets one authentication session provide access to multiple connected services.",
      "C": "An Access Control List defines which users or groups can access an object and what operations, such as read or write, they are allowed to perform.",
      "D": "A one-time password is a temporary authentication code, not an object permission list."
    },
    "tip": "ACL = who can access an object and what they can do with it. CompTIA A+ 220-1202 - Logical Security Concepts Page 5"
  },
  {
    "topic": "Logical Security Concepts",
    "number": 4,
    "question": "Authentication can use knowledge, possession, inherence, and location factors, and MFA requires factors from two or more distinct categories.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "This matches the source: examples include passwords, security keys, biometrics, and location, and multifactor authentication combines distinct factor categories.",
      "B": "Using two items from the same factor category does not meet the distinct-factor definition given in the source."
    },
    "tip": "MFA means different factor types, not simply two passwords. CompTIA A+ 220-1202 - Logical Security Concepts Page 6"
  },
  {
    "topic": "Logical Security Concepts",
    "number": 5,
    "question": "After a password, the user enters a one-time verification code sent to the account inbox. Which MFA method is being used?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "TOTP",
      "B": "SMS",
      "C": "Email",
      "D": "PIN code"
    },
    "explanations": {
      "A": "TOTP codes are generated from a shared secret and time, usually by an authenticator app or token, rather than delivered to an inbox.",
      "B": "SMS delivers the code through a text message to a phone number.",
      "C": "The second-factor code is delivered to the user through the associated email inbox.",
      "D": "A PIN is a memorized knowledge factor and is not the delivery channel described."
    },
    "tip": "Inbox code = email MFA; text-message code = SMS MFA. CompTIA A+ 220-1202 - Logical Security Concepts Page 7"
  },
  {
    "topic": "Logical Security Concepts",
    "number": 6,
    "question": "A login prompts for a USB-based cryptographic key after the password. What type of MFA device is being used?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Software token",
      "B": "OTP display key fob",
      "C": "Hardware token",
      "D": "USB flash drive"
    },
    "explanations": {
      "A": "A software token is normally an application that generates or stores authentication credentials rather than a dedicated USB device.",
      "B": "An OTP fob displays a changing code but is not the USB cryptographic key described.",
      "C": "A USB security key is a physical authentication device, so it is a hardware token and represents something the user has.",
      "D": "A standard flash drive stores files; it is not necessarily a cryptographic authentication token."
    },
    "tip": "A dedicated USB security key is a hardware authentication token. CompTIA A+ 220-1202 - Logical Security Concepts Page 8"
  },
  {
    "topic": "Logical Security Concepts",
    "number": 7,
    "question": "A user enters an incorrect code from an authenticator application. What is the most likely cause?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "The user is not connected to the internet",
      "B": "The user's phone is set to the wrong time",
      "C": "The user's password was entered incorrectly",
      "D": "The MFA service is experiencing an outage"
    },
    "explanations": {
      "A": "TOTP authenticator applications can usually generate codes offline because they use a shared secret and local time.",
      "B": "TOTP depends on matching time intervals between the authenticator and server, so incorrect device time can cause otherwise valid-looking codes to fail.",
      "C": "The scenario states the failure involves the authenticator code after the login process reached MFA.",
      "D": "An outage is possible in general, but the quiz identifies clock mismatch as the most likely issue for an authenticator-generated TOTP code."
    },
    "tip": "TOTP failures often point to a clock that is out of sync. CompTIA A+ 220-1202 - Logical Security Concepts Page 9"
  },
  {
    "topic": "Logical Security Concepts",
    "number": 8,
    "question": "After a password, a user receives a text message with a one-time verification code. Which delivery method is used?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "PIN code",
      "B": "Email",
      "C": "SMS",
      "D": "TOTP app"
    },
    "explanations": {
      "A": "A PIN is a knowledge factor rather than a message delivery method.",
      "B": "Email would deliver the code to an inbox, not through a phone text message.",
      "C": "SMS is the text-messaging service used to deliver the one-time code to the user’s phone.",
      "D": "A TOTP app generates the code locally instead of receiving it by text message."
    },
    "tip": "Text message = SMS. CompTIA A+ 220-1202 - Logical Security Concepts Page 10"
  },
  {
    "topic": "Logical Security Concepts",
    "number": 9,
    "question": "In voice call multifactor authentication, a user can receive a one-time code or approval prompt through an automated or live telephone call.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "This accurately describes voice-call MFA as presented in the source.",
      "B": "The source explicitly states that telephone calls can deliver a verification code or approval prompt."
    },
    "tip": "Voice-call MFA uses the phone call itself as the delivery channel. CompTIA A+ 220-1202 - Logical Security Concepts Page 11"
  },
  {
    "topic": "Logical Security Concepts",
    "number": 10,
    "question": "Which statement about TOTP is NOT true?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Generated offline using a shared secret and the current time",
      "B": "Requires time synchronization between client and server",
      "C": "Its validity does not depend on short, recurring time intervals",
      "D": "Commonly implemented in authenticator apps and hardware tokens"
    },
    "explanations": {
      "A": "This is a normal TOTP characteristic: the authenticator can calculate the code locally from the shared secret and time.",
      "B": "This is true because both sides must calculate the code for approximately the same time window.",
      "C": "This is false. Time-based one-time passwords are valid only for short recurring time windows, which is a defining property of TOTP.",
      "D": "This is true; both software authenticators and some hardware devices can generate TOTP codes."
    },
    "tip": "The T in TOTP means time-based, so the code expires on a repeating timer. CompTIA A+ 220-1202 - Logical Security Concepts Page 12"
  },
  {
    "topic": "Logical Security Concepts",
    "number": 11,
    "question": "Which acronym describes a general category of single-use authentication codes?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "MFA",
      "B": "PIV",
      "C": "OTP",
      "D": "SSO"
    },
    "explanations": {
      "A": "MFA is the overall use of multiple authentication factors, not the name of a single-use code.",
      "B": "PIV refers to Personal Identity Verification credentials, commonly implemented with smart cards.",
      "C": "OTP means One-Time Password, a code intended for a single authentication event or limited use.",
      "D": "SSO means Single Sign-On and allows one login to provide access to multiple connected systems."
    },
    "tip": "OTP = One-Time Password; TOTP is one time-based type of OTP. CompTIA A+ 220-1202 - Logical Security Concepts Page 13"
  },
  {
    "topic": "Logical Security Concepts",
    "number": 12,
    "question": "Which markup language is used for exchanging authentication and authorization data?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "OAuth",
      "B": "XML",
      "C": "SAML",
      "D": "XHTML"
    },
    "explanations": {
      "A": "OAuth is an authorization framework/protocol, not a markup language.",
      "B": "XML is a general-purpose markup language, but the security-specific standard asked for is SAML.",
      "C": "Security Assertion Markup Language uses XML-based assertions to exchange authentication and authorization information between identity and service providers.",
      "D": "XHTML is a markup language for web documents, not a federated authentication assertion standard."
    },
    "tip": "SAML = Security Assertion Markup Language for identity assertions. CompTIA A+ 220-1202 - Logical Security Concepts Page 14"
  },
  {
    "topic": "Logical Security Concepts",
    "number": 13,
    "question": "An authentication subsystem that lets a user access multiple connected systems after one login is called:",
    "answers": [
      "B"
    ],
    "options": {
      "A": "NAC",
      "B": "SSO",
      "C": "AAA",
      "D": "MFA"
    },
    "explanations": {
      "A": "Network Access Control governs whether devices/users may connect to a network based on policy and security state.",
      "B": "Single Sign-On allows one authentication event to provide access to multiple connected applications or systems.",
      "C": "AAA is the authentication, authorization, and accounting framework, not specifically the one-login/many-services experience.",
      "D": "MFA strengthens a login with multiple factor categories but does not mean one login grants access to multiple systems."
    },
    "tip": "SSO = sign in once, then use multiple connected services. CompTIA A+ 220-1202 - Logical Security Concepts Page 15"
  },
  {
    "topic": "Logical Security Concepts",
    "number": 14,
    "question": "Which security measure grants temporary, on-demand, limited-time access to privileged accounts?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Zero Trust architecture",
      "B": "Context-based authentication",
      "C": "Principle of least privilege",
      "D": "Just-in-time access"
    },
    "explanations": {
      "A": "Zero Trust governs verification and access decisions broadly, not specifically temporary privilege activation.",
      "B": "Context-based authentication evaluates signals such as device, location, or risk during authentication.",
      "C": "Least privilege limits permissions to what is necessary, but it does not specifically require temporary on-demand activation.",
      "D": "Just-in-time access provides elevated privileges only when needed and for a limited period, reducing standing privileged access."
    },
    "tip": "JIT access = privilege only when needed and only for a limited time. CompTIA A+ 220-1202 - Logical Security Concepts Page 16"
  },
  {
    "topic": "Logical Security Concepts",
    "number": 15,
    "question": "Which cybersecurity tool manages, monitors, and secures access to critical systems and elevated-privilege accounts?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "OAuth",
      "B": "IAM",
      "C": "RBAC",
      "D": "PAM"
    },
    "explanations": {
      "A": "OAuth delegates authorization to resources and is not a privileged-account management platform.",
      "B": "IAM manages identities and access broadly, while the question specifically focuses on privileged accounts.",
      "C": "Role-Based Access Control assigns permissions according to roles but is not itself the dedicated privileged-account management tool.",
      "D": "Privileged Access Management controls and monitors privileged credentials, sessions, and access to high-value systems."
    },
    "tip": "PAM = Privileged Access Management for administrator and other elevated accounts. CompTIA A+ 220-1202 - Logical Security Concepts Page 17"
  },
  {
    "topic": "Logical Security Concepts",
    "number": 16,
    "question": "Which software is specifically designed to centrally manage, monitor, and secure smartphones and tablets?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "UEM",
      "B": "EDR",
      "C": "IAM",
      "D": "MDM"
    },
    "explanations": {
      "A": "Unified Endpoint Management can manage many endpoint types, including mobile devices, but the quiz asks for the solution specifically focused on mobile-device management.",
      "B": "Endpoint Detection and Response detects and investigates endpoint threats rather than primarily managing mobile configurations and policies.",
      "C": "Identity and Access Management controls identities and resource access rather than device configuration itself.",
      "D": "Mobile Device Management centrally applies settings, restrictions, security policies, and management controls to smartphones and tablets."
    },
    "tip": "MDM = Mobile Device Management. CompTIA A+ 220-1202 - Logical Security Concepts Page 18"
  },
  {
    "topic": "Logical Security Concepts",
    "number": 17,
    "question": "Which acronym refers to a software- or hardware-based security solution designed to detect and prevent unauthorized use or transmission of confidential information?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "DEP",
      "B": "IPS",
      "C": "DLP",
      "D": "UTM"
    },
    "explanations": {
      "A": "DEP commonly refers to Data Execution Prevention, which helps block execution of malicious code in protected memory areas.",
      "B": "An Intrusion Prevention System detects and blocks malicious network or system activity but is not specifically focused on preventing confidential-data leakage.",
      "C": "Data Loss Prevention identifies sensitive information and can monitor or block unauthorized copying, use, or transmission of that data.",
      "D": "Unified Threat Management combines several network security functions but is not the dedicated data-loss control described."
    },
    "tip": "DLP = stop sensitive data from leaving where it is allowed to be. CompTIA A+ 220-1202 - Logical Security Concepts Page 19"
  },
  {
    "topic": "Logical Security Concepts",
    "number": 18,
    "question": "Which framework manages the full lifecycle of a digital identity and controls its access to organizational resources?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "AAA",
      "B": "SSO",
      "C": "RADIUS",
      "D": "IAM"
    },
    "explanations": {
      "A": "AAA describes authentication, authorization, and accounting functions but does not by itself represent the full identity lifecycle framework.",
      "B": "SSO simplifies authentication across connected services but does not manage identity creation, changes, permissions, and retirement as a complete lifecycle.",
      "C": "RADIUS is a network AAA protocol used for centralized authentication and related services.",
      "D": "Identity and Access Management manages digital identities throughout their lifecycle and governs authentication, authorization, and access to organizational resources."
    },
    "tip": "IAM = identity lifecycle plus access management across the organization."
  },
  {
    "topic": "MS Windows Basic Features",
    "number": 1,
    "question": "Which of the statements listed below apply to Windows domains? (Select 3 answers)",
    "answers": [
      "B",
      "D",
      "F"
    ],
    "options": {
      "A": "Each computer on a Windows domain is governed by its own security policy",
      "B": "Logging into any computer on a Windows domain requires a single set of credentials",
      "C": "Windows domains are based on P2P networking architecture",
      "D": "Security policies and permissions on a Windows domain are administered centrally",
      "E": "All members of a Windows domain must be on the same local network or subnet",
      "F": "Windows domains are based on client-server networking architecture"
    },
    "explanations": {
      "A": "In a domain, administrators can centrally enforce policies through domain services. Individual computers can have local policies, but centralized administration is a defining domain feature.",
      "B": "A domain account is centrally authenticated, allowing a user to use the same domain credentials on authorized domain-joined computers.",
      "C": "Peer-to-peer networking describes workgroups. Domains use centralized servers and directory services.",
      "D": "Domain administrators can centrally manage users, permissions, and policies instead of configuring every PC independently.",
      "E": "Domain members can communicate across routed networks and do not have to occupy one physical LAN or subnet.",
      "F": "Domains rely on servers such as domain controllers to provide centralized authentication and administration for client systems."
    },
    "tip": "Domain = centralized accounts, centralized policy, and client-server management. CompTIA A+ 220-1202 - MS Windows Basic Features Page 3"
  },
  {
    "topic": "MS Windows Basic Features",
    "number": 2,
    "question": "Which of the following answers apply to Windows workgroups? (Select 3 answers)",
    "answers": [
      "C",
      "E",
      "F"
    ],
    "options": {
      "A": "Security policies and permissions in workgroups are administered centrally",
      "B": "Logging into any computer on a workgroup requires a single account (single sign-on feature)",
      "C": "Workgroups are typically recommended for small networks of fewer than twenty computers",
      "D": "There is no limit on the number of hosts that can become a part of a single workgroup",
      "E": "Logging into any computer in a workgroup requires an account on that computer",
      "F": "Each computer in a workgroup has its own security policy"
    },
    "explanations": {
      "A": "Workgroups do not provide a central domain controller for account and policy administration; each computer is managed separately.",
      "B": "A workgroup has no centralized single sign-on. A user normally needs an account on each computer they access.",
      "C": "Workgroups are simple peer-to-peer arrangements that are practical for small environments where centralized domain management is unnecessary.",
      "D": "The source does not identify unlimited membership as a workgroup characteristic; workgroups are intended for relatively small networks.",
      "E": "Because accounts are stored locally, a user needs appropriate local credentials on each workgroup computer being accessed.",
      "F": "Without centralized domain policy, each workgroup computer maintains its own local accounts, permissions, and security configuration."
    },
    "tip": "Workgroup = peer-to-peer, local accounts, and local security settings on each PC. CompTIA A+ 220-1202 - MS Windows Basic Features Page 4"
  },
  {
    "topic": "MS Windows Basic Features",
    "number": 3,
    "question": "Which of the statements listed below are true? (Select 3 answers)",
    "answers": [
      "B",
      "C",
      "E"
    ],
    "options": {
      "A": "Windows-based computers on home networks must be part of a HomeGroup",
      "B": "Windows-based computers on a network must be part of a workgroup or a domain",
      "C": "Windows-based computers on workplace networks are usually part of a domain",
      "D": "Windows-based computers on workplace networks are usually part of a workgroup",
      "E": "Windows-based computers on home networks are usually part of a workgroup",
      "F": "Windows-based computers on home networks are usually part of a domain"
    },
    "explanations": {
      "A": "HomeGroup is not a requirement for Windows home networking; computers can operate in a workgroup without it.",
      "B": "The source classifies Windows network membership using the workgroup or domain models.",
      "C": "Business networks commonly use domains because centralized authentication, permissions, and policy management scale better than independent local administration.",
      "D": "Workgroups are better suited to smaller peer-to-peer environments and are not the usual model for centrally managed workplace networks.",
      "E": "Home networks typically use the simpler workgroup model rather than deploying domain controllers and centralized directory services.",
      "F": "Domains require centralized server infrastructure and are more typical of business environments than ordinary home networks."
    },
    "tip": "Home network usually means workgroup; managed workplace network usually means domain. CompTIA A+ 220-1202 - MS Windows Basic Features Page 5"
  },
  {
    "topic": "MS Windows Basic Features",
    "number": 4,
    "question": "Which of the following tools, available in the premium editions of Microsoft Windows, enables administrative control of desktop and user interface settings for all users on a device?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Control Panel",
      "B": "System Configuration",
      "C": "Group Policy Editor",
      "D": "Registry Editor"
    },
    "explanations": {
      "A": "Control Panel provides many system configuration settings, but it is not the centralized policy tool used to enforce user-interface restrictions for users.",
      "B": "System Configuration, or msconfig, is mainly used for startup and boot troubleshooting rather than enforcing desktop policies.",
      "C": "Group Policy Editor provides administrative policy settings that can restrict or standardize desktop, Start menu, system, and user-interface behavior.",
      "D": "Registry Editor can change low-level settings, but it does not provide the organized administrative policy framework described in the question."
    },
    "tip": "Group Policy Editor is the Windows tool for enforcing user and computer policy settings. CompTIA A+ 220-1202 - MS Windows Basic Features Page 6"
  },
  {
    "topic": "MS Windows Basic Features",
    "number": 5,
    "question": "Which Microsoft-proprietary protocol enables remote access and administration of another networked host through a graphical user interface?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "VDI",
      "B": "RDP",
      "C": "SSH",
      "D": "VNC"
    },
    "explanations": {
      "A": "VDI is an architecture for hosting virtual desktops; it is not the Microsoft remote-display protocol itself.",
      "B": "Remote Desktop Protocol is Microsoft's protocol for remotely displaying and controlling a Windows graphical desktop over a network.",
      "C": "SSH provides secure remote command-line access and is an open standard commonly associated with Linux and network devices, not Microsoft's GUI remote desktop protocol.",
      "D": "VNC provides graphical remote control, but it is not the Microsoft-proprietary protocol asked for."
    },
    "tip": "RDP = Microsoft graphical remote desktop; SSH = secure command line. CompTIA A+ 220-1202 - MS Windows Basic Features Page 7"
  },
  {
    "topic": "MS Windows Basic Features",
    "number": 6,
    "question": "Most client editions of 32-bit Microsoft Windows are limited to 4 GB of usable RAM, regardless of the version or edition.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "A 32-bit address space can represent about 4 GB of addresses, which creates the familiar memory ceiling for most 32-bit client Windows editions.",
      "B": "The statement matches the common 32-bit Windows memory limitation emphasized by the source."
    },
    "tip": "32-bit Windows - remember the approximately 4 GB RAM ceiling. CompTIA A+ 220-1202 - MS Windows Basic Features Page 8"
  },
  {
    "topic": "MS Windows Basic Features",
    "number": 7,
    "question": "What is the name of a Microsoft Windows feature that enables encryption of entire drives?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "FileVault",
      "B": "DriveCrypt",
      "C": "BitLocker",
      "D": "TrueCrypt"
    },
    "explanations": {
      "A": "FileVault is Apple's full-disk encryption technology for macOS.",
      "B": "DriveCrypt is not the built-in Microsoft Windows full-drive encryption feature identified by the source.",
      "C": "BitLocker is Microsoft's Windows drive-encryption feature for protecting entire supported volumes, including operating-system and data drives.",
      "D": "TrueCrypt was third-party encryption software and is not the built-in Microsoft Windows feature."
    },
    "tip": "BitLocker = Windows full-drive encryption; FileVault = macOS full-drive encryption. CompTIA A+ 220-1202 - MS Windows Basic Features Page 9"
  },
  {
    "topic": "MS Windows Basic Features",
    "number": 8,
    "question": "A Microsoft Windows MMC snap-in that allows local administrators to manage system and user configuration policies is called:",
    "answers": [
      "A"
    ],
    "options": {
      "A": "gpedit.msc",
      "B": "compmgmt.msc",
      "C": "gpmc.msc",
      "D": "lusrmgr.msc"
    },
    "explanations": {
      "A": "gpedit.msc launches the Local Group Policy Editor, where administrators configure local computer and user policy settings.",
      "B": "compmgmt.msc opens Computer Management, which combines tools such as Event Viewer, Disk Management, and local account management rather than focusing on Group Policy.",
      "C": "gpmc.msc opens Group Policy Management Console for managing Group Policy in Active Directory domain environments, not the local policy editor asked for.",
      "D": "lusrmgr.msc opens Local Users and Groups for managing local user and group accounts, not system and user configuration policies."
    },
    "tip": "gpedit.msc = local Group Policy; gpmc.msc = domain Group Policy management."
  },
  {
    "topic": "Malware",
    "number": 1,
    "question": "A Trojan horse is a type of software that performs harmful actions under the guise of a legitimate and useful program. It may offer expected functionality while containing concealed malicious code the user does not know about.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "This matches the quiz definition: a Trojan disguises malicious code as legitimate or useful software so the user is persuaded to run it.",
      "B": "The statement accurately describes the defining disguise and hidden malicious behavior of a Trojan horse."
    },
    "tip": "Trojan = malicious code disguised as something legitimate. CompTIA A+ 220-1202 - Malware Quiz Page 3"
  },
  {
    "topic": "Malware",
    "number": 2,
    "question": "Which answer refers to a collection of software tools used by a hacker to mask intrusion and obtain administrator-level access on a computer or network?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Rootkit",
      "B": "Spyware",
      "C": "Backdoor",
      "D": "Trojan"
    },
    "explanations": {
      "A": "A rootkit is a collection of malicious tools designed to maintain privileged access while hiding the attacker, processes, files, or other evidence of compromise.",
      "B": "Spyware secretly collects information about users, but its defining purpose is surveillance rather than hiding privileged system access.",
      "C": "A backdoor provides a hidden method of bypassing normal authentication, but it is not the broader collection of concealment tools described.",
      "D": "A Trojan disguises malicious software as legitimate software; it does not specifically mean a toolkit for hiding administrator-level intrusion."
    },
    "tip": "Rootkit = root-level access plus concealment. CompTIA A+ 220-1202 - Malware Quiz Page 4"
  },
  {
    "topic": "Malware",
    "number": 3,
    "question": "Which statements apply to the definition of a computer virus? (Select 2 answers)",
    "answers": [
      "A",
      "B"
    ],
    "options": {
      "A": "A self-replicating computer program that contains a malicious segment",
      "B": "Malicious code that typically attaches itself to an application or executable component",
      "C": "A standalone malicious program that replicates itself over a network",
      "D": "Malware that can operate independently without any interaction",
      "E": "A self-contained malicious program that does not require a host to propagate"
    },
    "explanations": {
      "A": "A virus can replicate its malicious code and spread when its infected host is executed or shared.",
      "B": "A virus normally depends on a host file or executable component and inserts or attaches its code to that host.",
      "C": "That description is characteristic of a worm, which can spread independently over networks.",
      "D": "A traditional virus normally relies on a host and some execution event rather than being defined as completely independent malware.",
      "E": "Self-contained propagation without a host is a key characteristic of a worm, not a traditional virus."
    },
    "tip": "Virus attaches to a host; worm is standalone and self-propagating. CompTIA A+ 220-1202 - Malware Quiz Page 5"
  },
  {
    "topic": "Malware",
    "number": 4,
    "question": "Malicious software collecting information about users without their knowledge or consent is referred to as:",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Adware",
      "B": "Cryptomalware",
      "C": "Ransomware",
      "D": "Spyware"
    },
    "explanations": {
      "A": "Adware primarily displays or delivers advertising; while some adware tracks users, secret information collection is more specifically spyware.",
      "B": "Cryptomalware uses cryptographic functions for malicious purposes, often associated with encrypting data, rather than primarily spying on users.",
      "C": "Ransomware blocks access to data or systems and demands an action or payment for restoration.",
      "D": "Spyware secretly monitors users or collects information such as activity, credentials, or other data without informed consent."
    },
    "tip": "Spyware = secret monitoring and information collection. CompTIA A+ 220-1202 - Malware Quiz Page 6"
  },
  {
    "topic": "Malware",
    "number": 5,
    "question": "Malware that restricts access to a computer system by encrypting files or locking the entire system until the user performs a requested action is known as:",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Grayware",
      "B": "Adware",
      "C": "Ransomware",
      "D": "Spyware"
    },
    "explanations": {
      "A": "Grayware is unwanted or potentially harmful software that may not meet the definition of outright malware; it does not specifically hold data or systems hostage.",
      "B": "Adware focuses on displaying advertisements rather than locking files or the operating system.",
      "C": "Ransomware denies access to files or a system, commonly through encryption or screen locking, and demands payment or another action from the victim.",
      "D": "Spyware gathers information covertly rather than primarily preventing access to the victim’s data."
    },
    "tip": "Ransomware = deny access, then demand something for restoration. CompTIA A+ 220-1202 - Malware Quiz Page 7"
  },
  {
    "topic": "Malware",
    "number": 6,
    "question": "Which answers refer to examples of spyware? (Select 2 answers)",
    "answers": [
      "B",
      "C"
    ],
    "options": {
      "A": "Backdoor",
      "B": "Stalkerware",
      "C": "Keylogger",
      "D": "Port scanner",
      "E": "Rootkit"
    },
    "explanations": {
      "A": "A backdoor bypasses normal authentication to provide hidden system access; it is not primarily a user-surveillance tool.",
      "B": "Stalkerware secretly monitors a person’s device activity, communications, location, or other private information and is a form of spyware.",
      "C": "A keylogger records keystrokes, which can expose passwords, messages, and other sensitive user information.",
      "D": "A port scanner identifies open network ports and services; it is a network reconnaissance tool rather than spyware.",
      "E": "A rootkit hides malicious activity and privileged access; concealment is its defining role rather than direct user surveillance."
    },
    "tip": "Stalkerware watches the person; a keylogger watches what they type. CompTIA A+ 220-1202 - Malware Quiz Page 8"
  },
  {
    "topic": "Malware",
    "number": 7,
    "question": "A type of malware that infects the storage drive area containing the necessary data and code used to start the OS is called:",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Rootkit",
      "B": "Worm",
      "C": "Boot sector virus",
      "D": "Trojan horse"
    },
    "explanations": {
      "A": "A rootkit may hide deeply in a system, but the question specifically describes infection of the boot area of a storage drive.",
      "B": "A worm is self-contained malware designed to replicate and spread, often through networks.",
      "C": "A boot sector virus infects the boot sector or related startup area containing code needed during the operating system boot process.",
      "D": "A Trojan is defined by disguising malicious code as legitimate software, not by specifically infecting the boot sector."
    },
    "tip": "Boot sector virus = malware in the disk area used to start the computer. CompTIA A+ 220-1202 - Malware Quiz Page 9"
  },
  {
    "topic": "Malware",
    "number": 8,
    "question": "Which answer refers to a malware type designed to exploit computing resources without the owner's consent?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Adware",
      "B": "PUP",
      "C": "Fileless malware",
      "D": "Cryptominer"
    },
    "explanations": {
      "A": "Adware consumes some resources while showing ads, but its defining purpose is advertising rather than unauthorized computational work.",
      "B": "A potentially unwanted program may be undesirable or intrusive but does not specifically describe hijacking processing resources.",
      "C": "Fileless malware describes how malicious code executes, often from memory or trusted tools, rather than the specific goal of consuming resources for mining.",
      "D": "A malicious cryptominer hijacks CPU or GPU resources to perform cryptocurrency mining for an attacker without the device owner’s permission."
    },
    "tip": "Cryptominer = stolen CPU/GPU power for cryptocurrency mining. CompTIA A+ 220-1202 - Malware Quiz Page 10"
  },
  {
    "topic": "Malware",
    "number": 9,
    "question": "Which answer best describes the key characteristics of stalkerware?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Provides hidden remote access while transmitting user activity to an external party",
      "B": "Captures on-screen output and periodic screenshots to reveal user activity",
      "C": "Installs tracking cookies and monitors user activity across websites for profiling",
      "D": "Collects location data, call logs, messages, and app usage for continuous monitoring"
    },
    "explanations": {
      "A": "Hidden remote access is more characteristic of a backdoor or remote-access Trojan; stalkerware focuses specifically on monitoring a person.",
      "B": "Screenshot capture can be one surveillance capability, but it is narrower than the broader monitoring behavior identified by the quiz.",
      "C": "This describes web tracking and profiling rather than the invasive device-level personal surveillance typical of stalkerware.",
      "D": "Stalkerware is designed for persistent surveillance of another person and commonly gathers location, communications, and device-usage information."
    },
    "tip": "Stalkerware continuously monitors a person’s location, communications, and device activity. CompTIA A+ 220-1202 - Malware Quiz Page 11"
  },
  {
    "topic": "Malware",
    "number": 10,
    "question": "Fileless malware: (Select 3 answers)",
    "answers": [
      "C",
      "D",
      "E"
    ],
    "options": {
      "A": "Modifies the boot sector of the storage drive for persistence",
      "B": "Requires a rootkit to hide its presence on a drive",
      "C": "Abuses legitimate operating system tools to execute code",
      "D": "Operates entirely in RAM without writing its payload to storage",
      "E": "Evades traditional signature-based antivirus detection"
    },
    "explanations": {
      "A": "Boot-sector modification describes boot-sector malware and conflicts with the fileless emphasis on avoiding a conventional stored payload.",
      "B": "Fileless malware does not require a rootkit; it can avoid traditional file scanning by operating through memory and legitimate system tools.",
      "C": "Fileless attacks commonly use trusted tools such as PowerShell, WMI, or other built-in components to execute malicious commands.",
      "D": "A key fileless technique is executing malicious code in memory rather than installing a traditional malicious executable on disk.",
      "E": "By avoiding conventional malicious files and abusing trusted tools, fileless malware can be harder for traditional file-signature scanning to detect."
    },
    "tip": "Fileless malware lives in memory and abuses trusted tools, making file-signature detection harder."
  },
  {
    "topic": "Malware Removal Procedures",
    "number": 1,
    "question": "A user reports slow system performance and suspicious pop-ups, and a technician confirms a malware infection. Which action should the technician perform immediately after investigating and verifying the malware symptoms?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Remediate the infected system",
      "B": "Update the anti-malware software",
      "C": "Quarantine the infected system",
      "D": "Create a system restore point"
    },
    "explanations": {
      "A": "Remediation comes after containment. Starting removal while the computer is still connected can allow malware to communicate or spread.",
      "B": "Updating security tools is important during remediation, but the infected host should first be isolated to limit further damage.",
      "C": "Quarantining or isolating the infected computer helps stop malware from spreading to other systems and prevents unnecessary network communication before remediation begins.",
      "D": "Creating a restore point after infection could preserve malicious files or settings and is not the immediate containment step."
    },
    "tip": "Confirm infection, then isolate the computer before trying to clean it. CompTIA A+ 220-1202 - Malware Removal Procedures Page 3"
  },
  {
    "topic": "Malware Removal Procedures",
    "number": 2,
    "question": "After confirming a malware infection on a Windows Home PC, which action related to System Restore should be performed before beginning remediation?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Delete user data but keep restore points intact",
      "B": "Create a new system restore point immediately before removal",
      "C": "Disable System Restore to prevent reinfection from infected restore points",
      "D": "Leave System Restore enabled to preserve recovery options"
    },
    "explanations": {
      "A": "Deleting user data is not the required System Restore action and could cause unnecessary data loss.",
      "B": "A new restore point could capture infected system files and provide a path for malware to return later.",
      "C": "Disabling System Restore prevents the technician from later restoring the system to a snapshot that may contain the malware being removed.",
      "D": "Keeping potentially infected restore points available creates a risk that the malware could be reintroduced after cleanup."
    },
    "tip": "Do not preserve an infected snapshot - disable System Restore before remediation when the procedure calls for it. CompTIA A+ 220-1202 - Malware Removal Procedures Page 4"
  },
  {
    "topic": "Malware Removal Procedures",
    "number": 3,
    "question": "A technician suspects a Windows 11 host is infected with persistent malware that prevents standard removal tools from running effectively. Which solution provides a minimal Windows environment that enables malware scanning and removal with reduced risk of interference?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Clean Boot",
      "B": "Windows Sandbox",
      "C": "Recovery Console",
      "D": "Safe Mode"
    },
    "explanations": {
      "A": "A clean boot reduces third-party startup software, but it still runs the installed Windows environment and may not sufficiently isolate persistent malware.",
      "B": "Windows Sandbox creates an isolated temporary environment for running applications; it is not the quiz answer for cleaning the infected host OS.",
      "C": "Recovery tools can help repair startup and system problems, but the source identifies Safe Mode as the minimal Windows environment for this question.",
      "D": "Safe Mode loads Windows with a minimal set of drivers and services, which can prevent some malware components from starting and make scanning or removal easier."
    },
    "tip": "Safe Mode loads fewer services and drivers, giving malware fewer chances to interfere with cleanup. CompTIA A+ 220-1202 - Malware Removal Procedures Page 5"
  },
  {
    "topic": "Malware Removal Procedures",
    "number": 4,
    "question": "Windows Preinstallation Environment (WinPE) can be booted from removable media and used for offline malware scanning outside the installed operating system.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The source explains that WinPE runs outside the installed OS and avoids loading its normal services, drivers, and resident processes, reducing malware interference during offline remediation.",
      "B": "The statement matches the source description of WinPE and its usefulness against persistent infections."
    },
    "tip": "WinPE cleans from outside the installed OS, so resident malware is less able to defend itself. CompTIA A+ 220-1202 - Malware Removal Procedures Page 6"
  },
  {
    "topic": "Malware Removal Procedures",
    "number": 5,
    "question": "Which scenario best justifies performing a full OS reinstall or system reimage?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Slow operating system performance",
      "B": "Failed major OS upgrades or feature updates",
      "C": "Corrupted user profiles",
      "D": "Persistent malware surviving multiple scans"
    },
    "explanations": {
      "A": "Slowness can have many causes and should be diagnosed before taking the destructive step of reinstalling the OS.",
      "B": "Upgrade failures may require repair or recovery, but the quiz identifies persistent malware as the strongest justification for a complete reimage.",
      "C": "A corrupted profile can often be repaired or replaced without reinstalling the entire operating system.",
      "D": "If malware remains after repeated scans and remediation attempts, reimaging or reinstalling provides a clean operating-system baseline and removes hidden persistence mechanisms."
    },
    "tip": "Reimage when you cannot trust that malware has been completely removed. CompTIA A+ 220-1202 - Malware Removal Procedures Page 7"
  },
  {
    "topic": "Malware Removal Procedures",
    "number": 6,
    "question": "Which steps are part of the remediation phase in the malware removal process? (Select 3 answers)",
    "answers": [
      "B",
      "C",
      "E"
    ],
    "options": {
      "A": "Quarantining the infected system",
      "B": "Malware scanning and removal",
      "C": "Updating the anti-malware software",
      "D": "Disabling system restore points",
      "E": "Reimaging/reinstalling the system"
    },
    "explanations": {
      "A": "Quarantine is a containment step performed to isolate the infection before the main remediation work.",
      "B": "Scanning identifies malicious components and removal eliminates them from the affected system, making this a core remediation activity.",
      "C": "Current security definitions and software improve the ability of the remediation tools to recognize and remove known threats.",
      "D": "Disabling System Restore is a preparatory step intended to prevent reinfection from contaminated restore points.",
      "E": "When normal cleaning cannot establish a trusted system, reimaging or reinstalling is a remediation method that replaces the compromised installation."
    },
    "tip": "Remediation means update the tools, remove the malware, and reimage if cleaning cannot restore trust. CompTIA A+ 220-1202 - Malware Removal Procedures Page 8"
  },
  {
    "topic": "Malware Removal Procedures",
    "number": 7,
    "question": "After successfully removing malware from a client’s Windows PC, which step should a technician perform next to maintain ongoing system protection?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Reimage the system",
      "B": "Create a restore point",
      "C": "Schedule scans and run updates",
      "D": "Educate the user"
    },
    "explanations": {
      "A": "A reimage is unnecessary if the malware has already been successfully removed and system trust has been restored.",
      "B": "A clean restore point can be useful later, but the source identifies ongoing scans and updates as the next protection step.",
      "C": "Scheduling malware scans and applying updates helps keep detection current and closes vulnerabilities that could lead to reinfection.",
      "D": "User education is important and is the final procedure step in this quiz, but ongoing technical protection should first be maintained through scans and updates."
    },
    "tip": "After cleanup, keep protection current with scheduled scans and security updates. CompTIA A+ 220-1202 - Malware Removal Procedures Page 9"
  },
  {
    "topic": "Malware Removal Procedures",
    "number": 8,
    "question": "In the malware removal process on the Windows Home PC, the primary security reason for delaying the enabling of System Restore until after all security updates have been applied is to ensure the new restore point is completely clean and patched against known vulnerabilities.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Waiting until cleanup and updates are complete helps ensure the newly created restore state does not preserve malware or an avoidably vulnerable system configuration.",
      "B": "The statement accurately describes why System Restore should be re-enabled only after the system has been cleaned and updated."
    },
    "tip": "Re-enable System Restore only after cleanup and patching so the new restore point represents a trusted state. CompTIA A+ 220-1202 - Malware Removal Procedures Page 10"
  },
  {
    "topic": "Malware Removal Procedures",
    "number": 9,
    "question": "According to CompTIA's best practice procedures for malware removal, the last step of the malware removal process should be:",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Implementing preventive measures",
      "B": "Documenting findings, actions, outcomes, and conclusions",
      "C": "Verifying full system functionality",
      "D": "Educating the user"
    },
    "explanations": {
      "A": "Preventive measures are important after remediation, but the source places user education after the technical recovery steps.",
      "B": "Documentation is valuable for support records and incident history, but it is not the final answer identified by this quiz.",
      "C": "Functionality should be verified after remediation, before the process is fully closed out.",
      "D": "The final step is educating the user about safer practices and how to avoid behaviors that could cause another malware infection."
    },
    "tip": "Finish malware removal by teaching the user how to reduce the chance of reinfection."
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 1,
    "question": "Which of the answers listed below refers to Windows command-line command used for directory traversal?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "pwd",
      "B": "dir",
      "C": "cd",
      "D": "path"
    },
    "explanations": {
      "A": "pwd prints the current working directory on Unix/Linux systems; it is not the Windows directory-navigation command.",
      "B": "dir lists files and folders in a directory but does not change the current directory.",
      "C": "cd (change directory) moves the command prompt to another directory and is the standard Windows command for directory traversal.",
      "D": "path displays or sets the executable search path; it does not navigate between folders."
    },
    "tip": "cd changes location; dir shows what is inside the current location. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 3"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 2,
    "question": "Which of the following Windows command-line commands can be used to list all files and subdirectories in the current directory?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "dir /all",
      "B": "dir",
      "C": "dir /list",
      "D": "dir /?"
    },
    "explanations": {
      "A": "/all is not the standard dir syntax for listing the current directory.",
      "B": "dir displays the files and subdirectories contained in the current directory.",
      "C": "/list is not the normal Windows dir option for this task.",
      "D": "dir /? displays help for the dir command instead of the directory contents."
    },
    "tip": "dir = directory listing. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 4"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 3,
    "question": "What is the name of a Windows command-line utility that can be used to display TCP/IP configuration settings?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "ifconfig",
      "B": "nslookup",
      "C": "ipconfig",
      "D": "netstat"
    },
    "explanations": {
      "A": "ifconfig is traditionally a Unix/Linux network-interface command, not the standard Windows utility.",
      "B": "nslookup queries DNS servers and resolves DNS names; it does not display the local adapter TCP/IP configuration.",
      "C": "ipconfig displays Windows TCP/IP configuration information such as IP address, subnet mask, and default gateway.",
      "D": "netstat displays connections, listening ports, routing information, and protocol statistics rather than the adapter configuration."
    },
    "tip": "ipconfig = IP configuration; nslookup = DNS lookup. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 5"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 4,
    "question": "A Windows command-line utility used for checking the reachability of a remote network host is called:",
    "answers": [
      "A"
    ],
    "options": {
      "A": "ping",
      "B": "tracert",
      "C": "dig",
      "D": "netstat"
    },
    "explanations": {
      "A": "ping sends ICMP echo requests and checks whether the target responds, making it a basic reachability test.",
      "B": "tracert identifies the intermediate hops to a destination rather than serving as the basic reachability command.",
      "C": "dig is primarily a DNS query tool and is not the standard Windows reachability utility.",
      "D": "netstat displays local network connections and statistics; it does not send a reachability probe to a remote host."
    },
    "tip": "ping asks 'Can I reach it?'; tracert asks 'Which path did I take?'. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 6"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 5,
    "question": "The netstat command-line utility is used for: (Select 2 answers)",
    "answers": [
      "A",
      "E"
    ],
    "options": {
      "A": "Displaying active TCP/IP connections",
      "B": "Testing the reachability of a remote host",
      "C": "Displaying intermediary points on the packet route",
      "D": "Viewing the TCP/IP configuration details",
      "E": "Displaying network protocol statistics"
    },
    "explanations": {
      "A": "netstat can list current TCP connections and related endpoint information.",
      "B": "ping is the standard tool for testing basic remote-host reachability.",
      "C": "tracert displays the routers or hops along a route.",
      "D": "ipconfig displays the local TCP/IP adapter configuration.",
      "E": "netstat can report protocol statistics in addition to active connections."
    },
    "tip": "netstat = network connections and network statistics. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 7"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 6,
    "question": "Which of the network command-line tools listed below resolves a domain name to an IP address?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "netstat",
      "B": "nslookup",
      "C": "tracert",
      "D": "pathping"
    },
    "explanations": {
      "A": "netstat reports connections and statistics rather than performing DNS name resolution.",
      "B": "nslookup queries DNS to translate a hostname or domain name into an IP address and can also perform other DNS queries.",
      "C": "tracert traces the network path to a destination.",
      "D": "pathping analyzes the route and packet loss/latency across hops."
    },
    "tip": "nslookup = name-server lookup. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 8"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 7,
    "question": "Which of the Windows command-line commands is used to manage connections to network resources?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "net map",
      "B": "net share",
      "C": "net use",
      "D": "net mount"
    },
    "explanations": {
      "A": "net map is not the Windows command selected for connecting to shared network resources.",
      "B": "net share creates, displays, or removes resources shared from the local computer.",
      "C": "net use connects to, disconnects from, and displays shared network resources such as mapped drives.",
      "D": "net mount is not the standard Windows command for mapping network resources."
    },
    "tip": "net use = use a remote share; net share = share a local resource. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 9"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 8,
    "question": "A network command-line utility in Windows that tracks and displays the route taken by IP packets on their way to another host is known as:",
    "answers": [
      "B"
    ],
    "options": {
      "A": "nslookup",
      "B": "tracert",
      "C": "ping",
      "D": "traceroute"
    },
    "explanations": {
      "A": "nslookup is used for DNS queries.",
      "B": "tracert displays the sequence of network hops between the Windows host and a destination.",
      "C": "ping checks reachability and round-trip response but does not list the intermediate routers.",
      "D": "traceroute is the common Unix/Linux command name; Windows uses tracert."
    },
    "tip": "Windows says tracert; Linux commonly says traceroute. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 10"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 9,
    "question": "Which network command-line utility in Windows combines the features of ping and traceroute?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "pathping",
      "B": "netcfg",
      "C": "dig",
      "D": "rpcping"
    },
    "explanations": {
      "A": "pathping traces the route and then gathers latency and packet-loss statistics for the hops, combining characteristics of ping and tracert.",
      "B": "netcfg is used for network component configuration, not route and packet-loss analysis.",
      "C": "dig performs DNS queries.",
      "D": "rpcping tests RPC connectivity and is not the ping/traceroute combination described."
    },
    "tip": "pathping = path plus ping statistics. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 11"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 10,
    "question": "Which of the following command-line utilities in Windows is used to verify file system integrity and fix logical file system errors?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "grep",
      "B": "chkdsk",
      "C": "sfc",
      "D": "dism"
    },
    "explanations": {
      "A": "grep searches text for matching patterns and is not a Windows disk-repair utility.",
      "B": "chkdsk checks a volume's file system and, with repair options such as /f, can correct logical file-system errors.",
      "C": "sfc verifies protected Windows system files, not the logical structure of a disk file system.",
      "D": "DISM services and repairs Windows images and components rather than checking a volume's file-system integrity."
    },
    "tip": "chkdsk = check disk/file system; sfc = check protected Windows system files. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 12"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 11,
    "question": "Which command-line tool in Windows initializes a drive by setting it up with a structure that supports file storage?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "gpart",
      "B": "sfdisk",
      "C": "mount",
      "D": "format"
    },
    "explanations": {
      "A": "gpart is not the Windows formatting command selected in the source.",
      "B": "sfdisk is associated with Linux partition-table management.",
      "C": "mount attaches a file system for access; it does not create the file system structure.",
      "D": "format prepares a Windows volume with a file system so files and folders can be stored on it."
    },
    "tip": "format creates the file-system structure; diskpart manages disk partitions. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 13"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 12,
    "question": "Which of the commands in Windows launches a text-based, command-line partitioning utility?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "sfdisk",
      "B": "diskutil",
      "C": "gpart",
      "D": "diskpart"
    },
    "explanations": {
      "A": "sfdisk is a Linux disk-partitioning utility.",
      "B": "diskutil is a macOS command-line storage utility.",
      "C": "gpart is not the Windows partitioning utility identified here.",
      "D": "diskpart is Windows' command-line utility for managing disks, partitions, and volumes."
    },
    "tip": "diskpart = Windows command-line disk and partition manager. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 14"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 13,
    "question": "Which of the answers listed below refers to a Windows command-line command used to create a directory or subdirectory?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "mkdr",
      "B": "md",
      "C": "mkd",
      "D": "mdir"
    },
    "explanations": {
      "A": "mkdr is not the valid command shown in the source.",
      "B": "md creates a directory and is an alias of mkdir in Windows.",
      "C": "mkd is not the standard Windows directory-creation command.",
      "D": "mdir is not the standard Windows command for creating a directory."
    },
    "tip": "md and mkdir both make directories. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 15"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 14,
    "question": "Which of the following command-line commands in Windows can be used to delete a directory?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "del",
      "B": "rmdir",
      "C": "dir /d",
      "D": "popd"
    },
    "explanations": {
      "A": "del deletes files, not directories.",
      "B": "rmdir removes directories; switches can be added when deleting directory trees.",
      "C": "dir lists directory contents; /d changes its display format.",
      "D": "popd returns to a directory stored by pushd and does not delete folders."
    },
    "tip": "del = files; rmdir = directories. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 16"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 15,
    "question": "Which copying utility accessible via Windows command line interface offers the widest range of options?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "xcopy",
      "B": "move",
      "C": "robocopy",
      "D": "copy"
    },
    "explanations": {
      "A": "xcopy supports directory-tree copying but has fewer advanced resilience and synchronization options than robocopy.",
      "B": "move relocates files or directories rather than serving as the most capable copy utility.",
      "C": "Robocopy provides extensive options for recursive copying, retries, restartability, mirroring, attributes, logging, and other advanced copy operations.",
      "D": "copy handles basic file copying and has a much smaller feature set."
    },
    "tip": "robocopy = robust copy for advanced or large Windows copy jobs. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 17"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 16,
    "question": "Which command-line command in Windows displays the name of the current computer a user is connected to?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "host",
      "B": "hosts",
      "C": "hostname",
      "D": "localhost"
    },
    "explanations": {
      "A": "host is not the Windows command used to print the local computer name.",
      "B": "The hosts file maps names to addresses; hosts is not the command for displaying the machine name.",
      "C": "hostname prints the computer's host name, helping a technician confirm which Windows machine is being used.",
      "D": "localhost is a loopback hostname, not a command that reports the computer's configured host name."
    },
    "tip": "hostname tells you 'Which computer am I on?'. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 18"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 17,
    "question": "Which of the Windows command-line commands, when run on a Windows computer without additional parameters, lists all local user accounts configured on that specific computer?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "net view",
      "B": "net session",
      "C": "net user",
      "D": "net accounts"
    },
    "explanations": {
      "A": "net view displays network computers or shared resources.",
      "B": "net session displays or manages sessions between the local computer and other computers.",
      "C": "net user without a username lists the local user accounts on the computer.",
      "D": "net accounts displays or changes account and password policy settings rather than listing individual users."
    },
    "tip": "net user = local user accounts; net user username = details for one account. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 19"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 18,
    "question": "Which of the command-line commands in Windows launches a pop-up window containing a brief summary of the installed operating system?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "msinfo32",
      "B": "systeminfo",
      "C": "winver",
      "D": "msconfig"
    },
    "explanations": {
      "A": "msinfo32 opens the detailed System Information application.",
      "B": "systeminfo prints extensive OS and hardware information in the command-line window.",
      "C": "winver opens the About Windows dialog with the Windows version and build information.",
      "D": "msconfig opens System Configuration for boot and startup troubleshooting."
    },
    "tip": "winver = quick Windows version pop-up; systeminfo = detailed console report. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 20"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 19,
    "question": "Which command-line utility provides information about the currently logged-on Windows user?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "hostname",
      "B": "whoami",
      "C": "id",
      "D": "logname"
    },
    "explanations": {
      "A": "hostname displays the computer name, not the user's identity.",
      "B": "whoami reports the identity of the currently logged-on user and supports parameters for security-context details.",
      "C": "id is primarily a Unix/Linux command for user and group identity information.",
      "D": "logname is associated with Unix-like systems rather than the Windows command in the source."
    },
    "tip": "whoami answers 'Which user am I running as?'. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 21"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 20,
    "question": "What is the standard syntax in Windows command line for displaying help or usage information related to a specific utility?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "[command name] info",
      "B": "[command name] man",
      "C": "[command name] /?",
      "D": "[command name] help"
    },
    "explanations": {
      "A": "info is not the standard Windows syntax shown for command-specific usage help.",
      "B": "man is associated with Unix/Linux manual pages.",
      "C": "Appending /? to many Windows commands displays their syntax, switches, and usage information.",
      "D": "The source identifies /? as the standard appended syntax; Windows also supports a separate help command for many commands."
    },
    "tip": "Unsure about a Windows command? Try command /?. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 22"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 21,
    "question": "A Windows command-line utility that refreshes Group Policy settings on a local computer without requiring a restart or logoff is called:",
    "answers": [
      "B"
    ],
    "options": {
      "A": "net user",
      "B": "gpupdate",
      "C": "bcdedit",
      "D": "gpresult"
    },
    "explanations": {
      "A": "net user manages user accounts.",
      "B": "gpupdate refreshes Group Policy settings and can update user and computer policy without waiting for the normal background refresh.",
      "C": "bcdedit manages boot configuration data.",
      "D": "gpresult reports applied Group Policy settings; it does not refresh them."
    },
    "tip": "gpupdate updates policy; gpresult reports policy. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 23"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 22,
    "question": "Which of the answers listed below refers to a command-line tool in Windows that can be used to display current Group Policy settings for a user or computer?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "gpresult",
      "B": "net view",
      "C": "verify",
      "D": "gpupdate"
    },
    "explanations": {
      "A": "gpresult displays Resultant Set of Policy information showing Group Policy settings applied to a user or computer.",
      "B": "net view displays network computers and shares.",
      "C": "verify controls whether Windows verifies that files are written correctly to disk.",
      "D": "gpupdate refreshes policy rather than reporting the currently applied settings."
    },
    "tip": "result in gpresult = see the resulting applied Group Policy. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 24"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 23,
    "question": "The sfc command-line utility in Windows: (Select 2 answers)",
    "answers": [
      "D",
      "E"
    ],
    "options": {
      "A": "Scans disk volumes for file system errors",
      "B": "Identifies and recovers readable data from bad sectors on a drive",
      "C": "Encrypts files to prevent unauthorized access to sensitive data",
      "D": "Replaces incorrect system file versions with correct Microsoft versions",
      "E": "Scans the integrity of all protected system files"
    },
    "explanations": {
      "A": "chkdsk checks disk volumes and file-system errors.",
      "B": "chkdsk /r is used to locate bad sectors and attempt recovery of readable data.",
      "C": "sfc does not provide file encryption.",
      "D": "System File Checker can restore protected Windows system files when incorrect or corrupted versions are detected.",
      "E": "sfc verifies the integrity of protected Windows system files."
    },
    "tip": "sfc protects Windows system files; chkdsk protects file-system integrity. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 25"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 24,
    "question": "Which command-line command in MS Windows moves the command-line prompt one folder up in the directory tree?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "cd \\",
      "B": "cd .",
      "C": "cd /^",
      "D": "cd .."
    },
    "explanations": {
      "A": "cd \\ jumps to the root directory of the current drive.",
      "B": "A single dot refers to the current directory, so it does not move up.",
      "C": "This is not the Windows parent-directory syntax.",
      "D": "Two dots represent the parent directory, so cd .. moves the prompt up one folder."
    },
    "tip": "one dot = here; two dots = parent folder. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 26"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 25,
    "question": "Which of the following Windows command-line commands changes the current directory to the root directory?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "cd /^",
      "B": "cd ..",
      "C": "cd /r",
      "D": "cd \\"
    },
    "explanations": {
      "A": "This is not the valid Windows syntax for the root directory.",
      "B": "cd .. moves only one level up to the parent directory.",
      "C": "/r is not the standard cd option for moving to the drive root.",
      "D": "A backslash represents the root of the current drive, so cd \\ changes directly to it."
    },
    "tip": "cd \\ = root; cd .. = one level up. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 27"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 26,
    "question": "A Windows technician needs to locate all .exe files within a directory, including those in its subdirectories. Which command should they use?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "dir *.exe /a:s",
      "B": "dir v *.exe",
      "C": "dir *.exe",
      "D": "dir /s *.exe"
    },
    "explanations": {
      "A": "/a:s filters by the System file attribute; it does not mean search all subdirectories.",
      "B": "This is not the recursive dir syntax in the source.",
      "C": "This lists matching .exe files only in the current directory.",
      "D": "The /s switch makes dir search the current directory and all subdirectories for files matching *.exe."
    },
    "tip": "dir /s = search through subdirectories. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 28"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 27,
    "question": "Which of the answers listed below refers to an ipconfig parameter used for displaying the full TCP/IP configuration information for all adapters?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "-a",
      "B": "/?",
      "C": "/all",
      "D": "/-a"
    },
    "explanations": {
      "A": "-a is not the ipconfig switch for full adapter configuration.",
      "B": "/? displays command help.",
      "C": "ipconfig /all displays detailed TCP/IP configuration for all adapters, including DHCP and DNS information.",
      "D": "/-a is not the correct ipconfig option."
    },
    "tip": "ipconfig /all = the full adapter details. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 29"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 28,
    "question": "Which command-line commands in MS Windows are used to refresh the DHCP configuration for all network adapters? (Select 2 answers)",
    "answers": [
      "C",
      "D"
    ],
    "options": {
      "A": "ipconfig /flush",
      "B": "ifconfig eth0 down",
      "C": "ipconfig /release",
      "D": "ipconfig /renew",
      "E": "ifconfig eth0 up",
      "F": "ipconfig /register"
    },
    "explanations": {
      "A": "The standard DNS cache command is /flushdns; /flush is not the DHCP refresh operation selected here.",
      "B": "ifconfig is a Unix/Linux utility, not the Windows DHCP command.",
      "C": "/release gives up the current DHCP-assigned address information.",
      "D": "/renew requests fresh DHCP configuration for adapters.",
      "E": "This is a Unix/Linux interface command.",
      "F": "The Windows option is /registerdns for DNS registration; it is not the release/renew DHCP cycle."
    },
    "tip": "DHCP refresh = release the old lease, then renew it. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 30"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 29,
    "question": "A user reports an inability to access any websites or network shares. As the first troubleshooting step, a technician needs to verify whether the TCP/IP stack on the local Windows machine is functioning correctly. Which ping command should they use for this initial test?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "ping 8.8.8.8",
      "B": "ping 192.168.1.1",
      "C": "ping 1.1.1.1",
      "D": "ping 127.0.0.1"
    },
    "explanations": {
      "A": "This tests reachability to an external Google DNS address and depends on the local network path working.",
      "B": "This typically tests a local gateway, which is useful after confirming the local TCP/IP stack.",
      "C": "This tests an external address and therefore checks more than just the local TCP/IP stack.",
      "D": "127.0.0.1 is the IPv4 loopback address. A successful response confirms that the local TCP/IP stack can process loopback traffic."
    },
    "tip": "127.0.0.1 = loopback = test this computer's TCP/IP stack. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 31"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 30,
    "question": "Which netstat parameter is used to display all active TCP/UDP connections and listening ports?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "-a",
      "B": "-p",
      "C": "-e",
      "D": "-r"
    },
    "explanations": {
      "A": "netstat -a displays active connections and ports on which the computer is listening.",
      "B": "-p is used with protocol-related filtering/syntax rather than simply displaying all connections and listening ports.",
      "C": "-e displays Ethernet statistics.",
      "D": "-r displays the routing table."
    },
    "tip": "netstat -a = all connections and listening ports. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 32"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 31,
    "question": "The -b netstat parameter in Microsoft Windows allows users to view the name of the application associated with each active connection or listening port.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "netstat -b shows the executable involved in creating each connection or listening port, although elevated privileges may be required.",
      "B": "The statement correctly describes the purpose of the Windows netstat -b option."
    },
    "tip": "netstat -b = binary/executable behind the connection. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 33"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 32,
    "question": "Which parameter, when used with the netstat command, displays addresses and port numbers in numerical form?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "-b",
      "B": "-n",
      "C": "-q",
      "D": "-r"
    },
    "explanations": {
      "A": "-b displays the executable involved in connections or listening ports.",
      "B": "-n prevents name resolution and shows addresses and port numbers numerically.",
      "C": "-q is not the numerical-display option selected here.",
      "D": "-r displays the routing table."
    },
    "tip": "netstat -n = numeric names and ports. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 34"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 33,
    "question": "Which of the command-line tools listed below can be used for troubleshooting DNS-related problems?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "pathping",
      "B": "tracert",
      "C": "arp",
      "D": "nslookup"
    },
    "explanations": {
      "A": "pathping diagnoses route latency and packet loss, not DNS records.",
      "B": "tracert traces network hops and does not directly query DNS records.",
      "C": "arp displays or modifies the IP-to-MAC address cache.",
      "D": "nslookup directly queries DNS servers, making it useful for checking name resolution and DNS records."
    },
    "tip": "DNS problem? Use nslookup to ask the DNS server directly. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 35"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 34,
    "question": "A technician needs to map a network share located at \\\\SERVER\\Data to the drive letter Z: on a user's computer. Which of the following commands should the technician use?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "net share Z: \\\\SERVER\\Data",
      "B": "net use Z: \\\\SERVER\\Data",
      "C": "map drive Z: \\\\SERVER\\Data",
      "D": "net use \\\\SERVER\\Data Z:"
    },
    "explanations": {
      "A": "net share creates or manages shares hosted by the local computer; it does not map a remote share to a drive letter.",
      "B": "net use maps the remote UNC share to the specified local drive letter.",
      "C": "map drive is not the standard Windows command-line syntax.",
      "D": "The source expects the drive letter first, followed by the UNC path."
    },
    "tip": "net use drive-letter: \\\\server\\share. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 36"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 35,
    "question": "The output of the Windows tracert command-line utility primarily displays a list of all intermediate routers (hops) that an IP packet traverses to reach a specified destination, along with the round-trip time (latency) to each of those hops.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "tracert displays the hop-by-hop route toward a destination and timing information that can help locate delay or routing problems.",
      "B": "The statement accurately describes the primary troubleshooting information produced by tracert."
    },
    "tip": "tracert = hop-by-hop route and response times. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 37"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 36,
    "question": "What are the most important functionalities provided by the pathping utility? (Select 2 answers)",
    "answers": [
      "C",
      "E"
    ],
    "options": {
      "A": "Tests connectivity to a specific port",
      "B": "Displays network statistics",
      "C": "Traces the path to the destination",
      "D": "Sends broadcast messages over the network",
      "E": "Measures latency and packet loss"
    },
    "explanations": {
      "A": "pathping does not test an application-specific TCP or UDP port.",
      "B": "Although pathping produces statistics, the source specifically identifies route tracing plus latency/packet-loss measurement as the two key functions.",
      "C": "pathping first discovers the intermediate route to the target.",
      "D": "Broadcast messaging is not a pathping function.",
      "E": "pathping sends probes over time to estimate latency and packet loss at the hops along the route."
    },
    "tip": "pathping = trace the path, then measure loss and delay along it. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 38"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 37,
    "question": "The /f switch of the chkdsk command-line utility in MS Windows instructs the utility to:",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Scan the system for corrupted or missing system files",
      "B": "Automatically repair detected file system errors on the disk",
      "C": "Identify bad sectors on the disk and attempt to recover any readable data from them",
      "D": "Optimize disk usage by consolidating fragmented file data"
    },
    "explanations": {
      "A": "sfc is used to scan protected Windows system files.",
      "B": "chkdsk /f fixes logical file-system errors found on the target volume.",
      "C": "That behavior is associated with chkdsk /r.",
      "D": "Drive optimization/defragmentation is a different maintenance task."
    },
    "tip": "chkdsk /f = fix file-system errors; /r = bad-sector recovery work. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 39"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 38,
    "question": "The chkdsk /r command in Windows: (Select 2 answers)",
    "answers": [
      "B",
      "E"
    ],
    "options": {
      "A": "Compresses files on the disk to save space",
      "B": "Attempts to recover any readable data from bad sectors",
      "C": "Optimizes disk usage by consolidating fragmented file data",
      "D": "Scans for and repairs corrupted system files",
      "E": "Identifies bad sectors on the disk"
    },
    "explanations": {
      "A": "chkdsk does not compress files.",
      "B": "The /r option tries to recover readable information from damaged sectors.",
      "C": "That is a drive optimization/defragmentation task.",
      "D": "sfc handles protected Windows system-file integrity.",
      "E": "The /r option locates bad sectors as part of its surface/error checking."
    },
    "tip": "chkdsk /r = locate bad sectors and recover readable data. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 40"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 39,
    "question": "A technician is preparing to reinstall Windows on a user's PC. They want to quickly prepare the D: drive by removing all file system references to existing data without performing a thorough overwrite. Which variant of the format command should they use?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "format d: /p",
      "B": "format d: /f",
      "C": "format d: /q",
      "D": "format d: /d"
    },
    "explanations": {
      "A": "/p performs overwrite passes and is not the quick operation requested.",
      "B": "/f is not the quick-format switch in the supplied choices.",
      "C": "/q performs a quick format, recreating file-system structures without the more thorough full-format process.",
      "D": "/d is not the quick-format option in the source."
    },
    "tip": "format /q = quick format. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 41"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 40,
    "question": "A user is trying to clean and repartition a disk with the diskpart command-line utility in Windows, but encounters an 'Access is denied' error. What is the most likely cause of this problem?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "The drive is offline and needs to be brought online first",
      "B": "The utility is trying to access a non-existent drive",
      "C": "The drive is currently in use by another application and is locked",
      "D": "The utility was not launched with administrative privileges"
    },
    "explanations": {
      "A": "An offline disk can prevent some operations, but the source identifies missing elevation as the most likely cause of Access is denied.",
      "B": "A nonexistent target normally produces a different selection or device error.",
      "C": "A locked or in-use volume can block specific operations, but it is not the source's expected cause here.",
      "D": "DiskPart performs privileged storage operations and should be run from an elevated administrator command prompt."
    },
    "tip": "DiskPart changes disks, so run it elevated as Administrator. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 42"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 41,
    "question": "What is the difference between md and mkdir command-line commands in MS Windows?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "The md command supports creating multiple directories at once, while mkdir does not",
      "B": "The mkdir command requires administrative privileges, while md does not",
      "C": "The md command is specific to older MS DOS versions, mkdir is for modern Windows",
      "D": "There is no difference, as both commands provide the same functionality"
    },
    "explanations": {
      "A": "The commands are aliases and do not differ in this way.",
      "B": "Neither command has this privilege distinction; permissions depend on the target location.",
      "C": "Both command names remain supported in Windows.",
      "D": "md and mkdir are equivalent Windows commands for creating directories."
    },
    "tip": "md = mkdir = make directory. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 43"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 42,
    "question": "A user wants to delete the entire directory named Data located at C:\\Files\\Data along with all its subdirectories and files using the Windows command-line. Which variant of the rmdir command should they run?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "rmdir C:\\Files /s",
      "B": "rmdir C:\\Files /q",
      "C": "rmdir C:\\Files /r",
      "D": "None of the above"
    },
    "explanations": {
      "A": "This targets C:\\Files rather than the requested C:\\Files\\Data directory and would remove too much if executed.",
      "B": "/q suppresses confirmation when used with /s, but this option also targets the wrong directory and does not by itself provide the recursive deletion requested.",
      "C": "/r is not the rmdir recursive switch used by Windows.",
      "D": "The required command would target the Data directory and use /s, for example rmdir C:\\Files\\Data /s (optionally with /q). None of the listed commands does that correctly."
    },
    "tip": "rmdir folder /s removes the directory tree; verify the path before pressing Enter. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 44"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 43,
    "question": "A Windows technician is setting up an automated nightly task to copy an entire folder tree, including all subdirectories and empty folders, from a network drive to a local backup location. The process must retry failed copies automatically. Which command-line utility should they use?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "move",
      "B": "xcopy",
      "C": "robocopy",
      "D": "copy"
    },
    "explanations": {
      "A": "move relocates data and is not designed as a resilient backup-copy tool.",
      "B": "xcopy can copy directory trees, but robocopy provides stronger built-in retry and resilience features.",
      "C": "Robocopy is designed for robust directory-tree copying and supports empty directories, retry behavior, logging, restartability, and automation.",
      "D": "copy is a basic file-copy command and does not provide the advanced directory-tree and retry behavior requested."
    },
    "tip": "For automated folder-tree backups, think robocopy. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 45"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 44,
    "question": "A user needs to copy a very large volume of files from one Windows host to another. The task must resume automatically if interrupted due to network issues. Which command-line tool is best suited for this task?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "copy",
      "B": "robocopy",
      "C": "move",
      "D": "xcopy"
    },
    "explanations": {
      "A": "copy is a basic file-copy utility without Robocopy's robust restart and retry capabilities.",
      "B": "Robocopy is designed for large and resilient copy jobs and supports restartable copying and automatic retries.",
      "C": "move relocates data and is not the preferred resilient network-copy tool.",
      "D": "xcopy handles directory trees but is less capable than robocopy for interruption-resistant large transfers."
    },
    "tip": "Large or unreliable network copy = robocopy. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 46"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 45,
    "question": "A technician suspects that a Windows user account named guest has been locked out or disabled due to multiple failed login attempts. The technician also needs to check when the account last logged in and whether it requires a password. Which command will provide this information?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "net view guest",
      "B": "whoami /user",
      "C": "net user guest",
      "D": "net accounts guest"
    },
    "explanations": {
      "A": "net view is for network computers and shared resources, not local account details.",
      "B": "whoami /user displays the current user's SID, not detailed information about another named account.",
      "C": "net user guest displays detailed properties for the guest account, including status and account/password information.",
      "D": "net accounts displays account-policy settings rather than the detailed properties of a specified user."
    },
    "tip": "net user username = inspect one local user's account details. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 47"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 46,
    "question": "A support technician is remotely connected to multiple Windows machines and needs to confirm the network identity of the computer they are currently operating on. Which command should they use to verify this?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "hostname",
      "B": "winver",
      "C": "localhost",
      "D": "msconfig"
    },
    "explanations": {
      "A": "hostname prints the current computer's host name, which quickly identifies the Windows machine.",
      "B": "winver reports the Windows version and build, not the computer's network host name.",
      "C": "localhost refers to the local loopback host but does not reveal the configured computer name.",
      "D": "msconfig opens System Configuration and is unrelated to identifying the host name."
    },
    "tip": "Remote session confusion? Run hostname. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 48"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 47,
    "question": "An IT technician needs to confirm the Windows OS version and build number to verify its compatibility with an upcoming system patch. Which command-line command should they run?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "msconfig",
      "B": "whoami",
      "C": "hostname",
      "D": "winver"
    },
    "explanations": {
      "A": "msconfig is for startup and boot troubleshooting.",
      "B": "whoami identifies the current user.",
      "C": "hostname identifies the computer name.",
      "D": "winver opens the About Windows dialog and shows the Windows version and OS build information."
    },
    "tip": "Patch compatibility often starts with winver for version and build. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 49"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 48,
    "question": "A Windows technician wants to view a comprehensive snapshot of the current user's security context, including its privileges, group memberships, logon ID, and security identifiers. Which whoami parameter should they use?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "/groups",
      "B": "/user",
      "C": "/logonid",
      "D": "/all"
    },
    "explanations": {
      "A": "/groups focuses on group memberships and does not include the complete security-context information requested.",
      "B": "/user displays the current user and SID but not all groups and privileges.",
      "C": "/logonid focuses on the current logon identifier.",
      "D": "whoami /all combines the user's identity, groups, privileges, logon information, and related security identifiers in one report."
    },
    "tip": "whoami /all = full security identity snapshot. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 50"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 49,
    "question": "In the Windows command line environment, which common syntax can be used as an alternative to appending /? after a command name to display help?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "[command name] help",
      "B": "man [command name]",
      "C": "[command name] about",
      "D": "help [command name]"
    },
    "explanations": {
      "A": "This reverses the standard help syntax expected by the source.",
      "B": "man is the common Unix/Linux manual-page command.",
      "C": "about is not the standard Windows help syntax.",
      "D": "Windows supports the help command followed by many command names as another way to display command usage information."
    },
    "tip": "Windows help can be command /? or help command. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 51"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 50,
    "question": "Used without any parameters, the help command in MS Windows displays a list of available system commands along with a brief description of each command.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Running help by itself displays a list of supported command-shell commands with short descriptions.",
      "B": "The statement correctly describes the default behavior of the Windows help command."
    },
    "tip": "help alone = command list; help command = details for one command. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 52"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 51,
    "question": "What is the default behavior of the gpupdate command-line command in Windows if no parameters are specified?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "It refreshes only computer policies",
      "B": "It does not refresh any policies",
      "C": "It refreshes both user and computer policies",
      "D": "It refreshes only user policies"
    },
    "explanations": {
      "A": "Default gpupdate is not limited to computer policy.",
      "B": "gpupdate is specifically used to refresh Group Policy.",
      "C": "Without limiting switches, gpupdate processes both user and computer Group Policy settings.",
      "D": "Default gpupdate is not limited to user policy."
    },
    "tip": "Plain gpupdate refreshes both halves: user and computer policy. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 53"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 52,
    "question": "During a routine audit, an IT technician needs a concise report of all Group Policy settings that have been applied to a specific host. Which gpresult parameter in Windows command line instructs the utility to provide this summary?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "/s",
      "B": "/u",
      "C": "/p",
      "D": "/r"
    },
    "explanations": {
      "A": "/s specifies a remote system for gpresult rather than selecting the summary report format.",
      "B": "/u supplies user credentials/context for remote operations rather than requesting the report summary.",
      "C": "/p supplies a password in applicable remote-command syntax rather than selecting the report format.",
      "D": "gpresult /r displays Resultant Set of Policy summary data for the user and computer."
    },
    "tip": "gpresult /r = readable policy result summary. CompTIA A+ 220-1202 - Microsoft Command-Line Tools Page 54"
  },
  {
    "topic": "Microsoft Command-Line Tools",
    "number": 53,
    "question": "Which parameter of the sfc command in Windows command line enables a file check that scans integrity of all protected system files and attempts to repair corrupted files?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "/scannow",
      "B": "/verify",
      "C": "/scanfile",
      "D": "/verifyfile"
    },
    "explanations": {
      "A": "sfc /scannow immediately scans all protected system files and attempts to replace corrupted files with correct versions.",
      "B": "The source does not identify /verify as the repair scan; SFC verification options do not perform the same full scan-and-repair action as /scannow.",
      "C": "/scanfile targets a specific file rather than scanning all protected system files.",
      "D": "/verifyfile verifies a specified file and does not perform the complete repair scan requested."
    },
    "tip": "sfc /scannow = scan all protected system files and repair problems."
  },
  {
    "topic": "Microsoft Windows Editions",
    "number": 1,
    "question": "Windows 10 and Windows 11 N editions are special regional versions for the European market. They retain core Windows functionality but exclude Windows Media Player and related multimedia components.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The N editions were created for the European market and omit certain Microsoft multimedia technologies while otherwise corresponding closely to their standard editions.",
      "B": "The statement accurately describes the defining difference of Windows N editions: missing bundled media components rather than a different Windows core."
    },
    "tip": "Windows N = normal Windows edition minus certain built-in media technologies. CompTIA A+ 220-1202 - Microsoft Windows Editions Page 3"
  },
  {
    "topic": "Microsoft Windows Editions",
    "number": 2,
    "question": "Windows 10 and Windows 11 Home editions support workgroups but do not support joining Active Directory domains.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Home editions can participate in peer-to-peer workgroups, but traditional Active Directory domain join is a business feature found in higher editions such as Pro and Enterprise.",
      "B": "Home does not include the standard Active Directory domain-join capability described in the question."
    },
    "tip": "Windows Home = workgroup; Windows Pro and above = domain-join features. CompTIA A+ 220-1202 - Microsoft Windows Editions Page 4"
  },
  {
    "topic": "Microsoft Windows Editions",
    "number": 3,
    "question": "Premium editions of Windows 10 and 11 allow administrators to customize, restrict, or lock down specific user-interface elements beyond the basic personalization available in Home.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Higher Windows editions provide administrative policy capabilities that can enforce standardized settings and restrict interface options in managed environments.",
      "B": "The statement reflects the broader management and policy controls available in premium/business editions compared with Home."
    },
    "tip": "Higher Windows editions add business management and policy controls, not just cosmetic features. CompTIA A+ 220-1202 - Microsoft Windows Editions Page 5"
  },
  {
    "topic": "Microsoft Windows Editions",
    "number": 4,
    "question": "Which edition of Windows 10 and Windows 11 by default cannot function as an RDP host for incoming Remote Desktop connections?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Home",
      "B": "Pro",
      "C": "Pro for Workstations",
      "D": "Enterprise"
    },
    "explanations": {
      "A": "Windows Home includes the Remote Desktop client but does not provide the built-in Remote Desktop host/server capability for accepting incoming RDP sessions.",
      "B": "Windows Pro can act as an RDP host and accept incoming Remote Desktop connections when enabled.",
      "C": "Pro for Workstations includes the business capabilities of Pro, including Remote Desktop hosting.",
      "D": "Enterprise supports Remote Desktop hosting and extensive centralized administration features."
    },
    "tip": "Home can connect out with RDP, but Pro and higher can also accept incoming RDP connections. CompTIA A+ 220-1202 - Microsoft Windows Editions Page 6"
  },
  {
    "topic": "Microsoft Windows Editions",
    "number": 5,
    "question": "All editions of Windows 10 and Windows 11, including their N versions, come with the preinstalled RDP client software.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The Remote Desktop client is available across the listed Windows editions; the major edition difference is whether the system can also act as an RDP host.",
      "B": "The client is not restricted to Pro or Enterprise; Home users can initiate Remote Desktop connections to supported hosts."
    },
    "tip": "RDP client and RDP host are different capabilities - Home has the client, not the host. CompTIA A+ 220-1202 - Microsoft Windows Editions Page 7"
  },
  {
    "topic": "Microsoft Windows Editions",
    "number": 6,
    "question": "Which 32-bit editions of Windows 10 have a physical memory limit of 4 GB?",
    "answers": [
      "E"
    ],
    "options": {
      "A": "Home",
      "B": "Pro",
      "C": "Pro for Workstations",
      "D": "Enterprise",
      "E": "All of the above"
    },
    "explanations": {
      "A": "Home is limited to 4 GB in its 32-bit form, but it is not the only listed 32-bit edition with that architectural limit.",
      "B": "The 32-bit Pro edition also shares the 4 GB physical-address-space limit.",
      "C": "The source groups all listed 32-bit Windows 10 editions under the same 4 GB limit.",
      "D": "Enterprise does not escape the 32-bit address-space limitation.",
      "E": "The source identifies all listed 32-bit Windows 10 editions as having a 4 GB physical memory limit."
    },
    "tip": "32-bit Windows = think about the 4 GB address-space ceiling regardless of edition. CompTIA A+ 220-1202 - Microsoft Windows Editions Page 8"
  },
  {
    "topic": "Microsoft Windows Editions",
    "number": 7,
    "question": "Which 64-bit editions of Windows 10 and Windows 11 have a maximum RAM limit of 128 GB?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Home",
      "B": "Pro",
      "C": "Pro for Workstations",
      "D": "Enterprise"
    },
    "explanations": {
      "A": "The quiz identifies the 64-bit Home editions of Windows 10 and Windows 11 as supporting up to 128 GB of physical memory.",
      "B": "The quiz assigns a higher 2 TB maximum to 64-bit Pro editions.",
      "C": "The quiz assigns Pro for Workstations a much higher 6 TB maximum.",
      "D": "The quiz also assigns Enterprise a 6 TB maximum rather than 128 GB."
    },
    "tip": "In this quiz, Home = 128 GB; Pro and enterprise-oriented editions scale much higher. CompTIA A+ 220-1202 - Microsoft Windows Editions Page 9"
  },
  {
    "topic": "Microsoft Windows Editions",
    "number": 8,
    "question": "What is the maximum physical memory supported by the 64-bit Pro editions of Windows 10 and Windows 11?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "2 TB",
      "B": "4 TB",
      "C": "6 TB",
      "D": "8 TB"
    },
    "explanations": {
      "A": "The source identifies 2 TB as the maximum physical memory for the 64-bit Pro editions in this comparison.",
      "B": "4 TB is not the Pro memory limit given by the source.",
      "C": "The source associates 6 TB with higher-end editions such as Pro for Workstations and Enterprise.",
      "D": "8 TB is not the listed maximum for Windows Pro in the supplied quiz."
    },
    "tip": "For this exam set, remember the progression: Home 128 GB, Pro 2 TB, higher workstation/enterprise editions 6 TB. CompTIA A+ 220-1202 - Microsoft Windows Editions Page 10"
  },
  {
    "topic": "Microsoft Windows Editions",
    "number": 9,
    "question": "Which answer refers to the physical memory limit for Windows 10 Pro for Workstations?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "2 TB",
      "B": "4 TB",
      "C": "6 TB",
      "D": "8 TB"
    },
    "explanations": {
      "A": "The quiz associates 2 TB with standard Windows Pro rather than Pro for Workstations.",
      "B": "4 TB is not the value provided for Pro for Workstations in the source.",
      "C": "The supplied quiz identifies 6 TB as the physical memory limit for Windows 10 Pro for Workstations.",
      "D": "8 TB is not the source-provided value for this edition."
    },
    "tip": "Pro for Workstations is designed for high-end hardware, so its memory ceiling is higher than standard Pro. CompTIA A+ 220-1202 - Microsoft Windows Editions Page 11"
  },
  {
    "topic": "Microsoft Windows Editions",
    "number": 10,
    "question": "What is the maximum physical memory supported by the 64-bit Enterprise editions of Windows 10 and Windows 11?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "2 TB",
      "B": "4 TB",
      "C": "6 TB",
      "D": "8 TB"
    },
    "explanations": {
      "A": "The source uses 2 TB for standard Pro, not Enterprise.",
      "B": "4 TB is not the Enterprise maximum shown in the supplied quiz.",
      "C": "The source identifies 6 TB as the maximum physical memory for the 64-bit Enterprise editions.",
      "D": "8 TB is not the value listed for Enterprise in the source."
    },
    "tip": "Enterprise is built for large managed systems and, in this quiz, carries a 6 TB RAM ceiling. CompTIA A+ 220-1202 - Microsoft Windows Editions Page 12"
  },
  {
    "topic": "Microsoft Windows Editions",
    "number": 11,
    "question": "Which editions of Microsoft Windows 10 include the BitLocker Drive Encryption feature? (Select all that apply)",
    "answers": [
      "B",
      "C",
      "D"
    ],
    "options": {
      "A": "Home",
      "B": "Pro",
      "C": "Pro for Workstations",
      "D": "Enterprise"
    },
    "explanations": {
      "A": "The source does not list Windows 10 Home as including the full built-in BitLocker Drive Encryption feature.",
      "B": "Windows 10 Pro includes BitLocker for encrypting supported system and data drives.",
      "C": "Pro for Workstations includes the business security features of Pro, including BitLocker.",
      "D": "Windows 10 Enterprise includes BitLocker along with additional enterprise management and security capabilities."
    },
    "tip": "Full BitLocker is a Pro-and-higher Windows feature in this exam set. CompTIA A+ 220-1202 - Microsoft Windows Editions Page 13"
  },
  {
    "topic": "Microsoft Windows Editions",
    "number": 12,
    "question": "Which edition of Windows 11 does not include the built-in BitLocker encryption feature?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Home",
      "B": "Pro",
      "C": "Pro for Workstations",
      "D": "Enterprise"
    },
    "explanations": {
      "A": "The supplied quiz identifies Windows 11 Home as the edition without the full built-in BitLocker feature.",
      "B": "Windows 11 Pro includes BitLocker Drive Encryption.",
      "C": "Pro for Workstations includes BitLocker as part of its advanced Windows feature set.",
      "D": "Enterprise includes BitLocker and additional organizational security controls."
    },
    "tip": "Need full BitLocker management? Think Windows Pro or higher, not Home. CompTIA A+ 220-1202 - Microsoft Windows Editions Page 14"
  },
  {
    "topic": "Microsoft Windows Editions",
    "number": 13,
    "question": "Which edition of Windows 10 does not include the gpedit.msc administrative tool?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Home",
      "B": "Pro",
      "C": "Pro for Workstations",
      "D": "Enterprise"
    },
    "explanations": {
      "A": "Windows 10 Home does not include the Local Group Policy Editor, gpedit.msc, as a standard built-in administrative tool.",
      "B": "Windows 10 Pro includes the Local Group Policy Editor for managing policy settings.",
      "C": "Pro for Workstations includes the administrative policy capabilities found in Pro.",
      "D": "Enterprise includes Group Policy management features for managed environments."
    },
    "tip": "gpedit.msc is a Pro-and-higher administration tool; Home does not include it by default. CompTIA A+ 220-1202 - Microsoft Windows Editions Page 15"
  },
  {
    "topic": "Microsoft Windows Editions",
    "number": 14,
    "question": "Windows 11 Home, Pro, and Enterprise editions include the Group Policy Editor component by default.",
    "answers": [
      "B"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Windows 11 Home does not include the Local Group Policy Editor by default, so the statement is not true for all three editions.",
      "B": "The statement is false because Pro and Enterprise include Group Policy Editor, while Home does not include it by default."
    },
    "tip": "If a statement says Home includes gpedit.msc by default, mark it false. CompTIA A+ 220-1202 - Microsoft Windows Editions Page 16"
  },
  {
    "topic": "Microsoft Windows Editions",
    "number": 15,
    "question": "Which are minimum requirements for installing Windows 11? (Select 3 answers)",
    "answers": [
      "A",
      "B",
      "C"
    ],
    "options": {
      "A": "UEFI firmware with Secure Boot",
      "B": "TPM version 2.0 support",
      "C": "64-bit processor listed on Microsoft’s Windows 11 compatibility list",
      "D": "At least 2 GB of system memory",
      "E": "A minimum of 32 GB of available storage space"
    },
    "explanations": {
      "A": "The source identifies UEFI firmware with Secure Boot capability as a Windows 11 installation requirement.",
      "B": "Windows 11 requires TPM 2.0 support for its modern security baseline.",
      "C": "The source requires a supported 64-bit processor; Windows 11 does not provide a 32-bit x86 edition.",
      "D": "The source does not accept 2 GB; Windows 11 requires more memory than this option provides.",
      "E": "The source does not accept 32 GB as the Windows 11 storage minimum in this question."
    },
    "tip": "Windows 11 exam essentials include supported 64-bit CPU, UEFI/Secure Boot, and TPM 2.0."
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 1,
    "question": "Which locations in Windows 10 and Windows 11 provide access to the Internet Properties system utility? (Select 3 answers)",
    "answers": [
      "A",
      "B",
      "D"
    ],
    "options": {
      "A": "Internet Options applet in Windows Control Panel",
      "B": "Network and Sharing Center applet in Windows Control Panel",
      "C": "Ease of Access applet in Windows Control Panel",
      "D": "Windows Run dialog box (type inetcpl.cpl and press Enter)",
      "E": "Internet Options menu item in Microsoft Edge Tools menu"
    },
    "explanations": {
      "A": "This applet opens Internet Properties directly.",
      "B": "The source identifies Network and Sharing Center as another Control Panel route to Internet Properties.",
      "C": "Ease of Access contains accessibility settings, not Internet Properties.",
      "D": "inetcpl.cpl is the Control Panel command that launches Internet Properties.",
      "E": "The source does not identify this as a valid Edge route to the classic Internet Properties utility."
    },
    "tip": "inetcpl.cpl is the fastest command to remember for Internet Properties. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 3"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 2,
    "question": "Which tab of Windows Internet Properties provides an option for deleting temporary Internet files, cookies, browsing/download history, saved passwords, and form data?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "General",
      "B": "Security",
      "C": "Privacy",
      "D": "Content",
      "E": "Connections",
      "F": "Programs",
      "G": "Advanced"
    },
    "explanations": {
      "A": "The General tab contains Browsing history controls used to delete temporary files, cookies, history, passwords, and form information.",
      "B": "Security configures security zones and their restrictions.",
      "C": "Privacy focuses on cookies, tracking/privacy controls, and the pop-up blocker.",
      "D": "Content contains certificate, AutoComplete, and feed-related settings.",
      "E": "Connections contains LAN, proxy, dial-up, and VPN settings.",
      "F": "Programs manages browser add-ons and default program-related settings.",
      "G": "Advanced contains detailed browser behavior and reset settings."
    },
    "tip": "General = everyday browser housekeeping such as deleting browsing history. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 4"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 3,
    "question": "The Security tab of Internet Properties allows zone-based website restrictions and control over content accessed through built-in web components.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The Security tab organizes settings by security zones and controls what content or actions are permitted in those zones.",
      "B": "This contradicts the function of the Security tab described in the quiz."
    },
    "tip": "Security tab = zones such as Internet, Local intranet, Trusted sites, and Restricted sites. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 5"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 4,
    "question": "Which Internet Properties tab provides settings for the built-in pop-up blocker?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "General",
      "B": "Security",
      "C": "Privacy",
      "D": "Content",
      "E": "Connections",
      "F": "Programs",
      "G": "Advanced"
    },
    "explanations": {
      "A": "General handles home/browsing-history and appearance-related basics.",
      "B": "Security manages zone-based restrictions.",
      "C": "The Privacy tab contains privacy controls including the built-in pop-up blocker.",
      "D": "Content manages certificates, AutoComplete, and feeds.",
      "E": "Connections manages network connection and proxy settings.",
      "F": "Programs manages add-ons and defaults.",
      "G": "Advanced contains detailed browser configuration."
    },
    "tip": "Privacy = cookies and pop-up blocking. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 6"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 5,
    "question": "Which Internet Properties tab provides access to advanced cookie management options?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "General",
      "B": "Security",
      "C": "Privacy",
      "D": "Content",
      "E": "Connections",
      "F": "Programs",
      "G": "Advanced"
    },
    "explanations": {
      "A": "General contains browsing-history cleanup, not advanced cookie policy controls.",
      "B": "Security is for zone restrictions.",
      "C": "The Privacy tab is where advanced cookie handling and privacy controls are configured.",
      "D": "Content manages certificates and AutoComplete.",
      "E": "Connections manages network/proxy settings.",
      "F": "Programs manages add-ons/defaults.",
      "G": "Advanced has broad browser settings, but the source assigns advanced cookie management to Privacy."
    },
    "tip": "Cookies are a privacy setting, so look under Privacy. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 7"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 6,
    "question": "Which Internet Properties tab enables management of digital certificates, AutoComplete, and RSS feeds?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "General",
      "B": "Security",
      "C": "Privacy",
      "D": "Content",
      "E": "Connections",
      "F": "Programs",
      "G": "Advanced"
    },
    "explanations": {
      "A": "General focuses on basic browsing and history settings.",
      "B": "Security manages security zones.",
      "C": "Privacy handles cookies and pop-up blocking.",
      "D": "The Content tab provides certificate, AutoComplete, and feed-related controls.",
      "E": "Connections handles LAN, proxy, dial-up, and VPN settings.",
      "F": "Programs handles extensions and defaults.",
      "G": "Advanced provides detailed browser behavior settings."
    },
    "tip": "Content = certificates + AutoComplete + feeds. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 8"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 7,
    "question": "Which network settings are accessible through the Connections tab of Internet Properties? (Select 3 answers)",
    "answers": [
      "C",
      "D",
      "E"
    ],
    "options": {
      "A": "Network adapter settings",
      "B": "Internet security zone settings",
      "C": "LAN settings",
      "D": "Dial-up and VPN settings",
      "E": "Proxy server settings"
    },
    "explanations": {
      "A": "Adapter properties are managed through Windows networking tools rather than this Internet Properties tab.",
      "B": "Security zones are configured on the Security tab.",
      "C": "The Connections tab provides the LAN settings dialog.",
      "D": "Dial-up and VPN connection entries are managed from Connections.",
      "E": "Proxy configuration is available through LAN settings on the Connections tab."
    },
    "tip": "Connections = LAN, dial-up/VPN, and proxy. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 9"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 8,
    "question": "Which Internet Properties tab provides options for managing web browser extensions and setting default applications?",
    "answers": [
      "F"
    ],
    "options": {
      "A": "General",
      "B": "Security",
      "C": "Privacy",
      "D": "Content",
      "E": "Connections",
      "F": "Programs",
      "G": "Advanced"
    },
    "explanations": {
      "A": "General is for basic browsing settings.",
      "B": "Security is for security zones.",
      "C": "Privacy is for cookies/pop-ups.",
      "D": "Content is for certificates and AutoComplete.",
      "E": "Connections is for network/proxy settings.",
      "F": "Programs contains controls related to browser add-ons and default programs.",
      "G": "Advanced is for detailed behavior settings."
    },
    "tip": "Programs = add-ons/extensions and default-program choices. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 10"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 9,
    "question": "Which Internet Properties tab provides detailed settings for browser behavior, reset options, accessibility, browsing, security, and multimedia features?",
    "answers": [
      "G"
    ],
    "options": {
      "A": "General",
      "B": "Security",
      "C": "Privacy",
      "D": "Content",
      "E": "Connections",
      "F": "Programs",
      "G": "Advanced"
    },
    "explanations": {
      "A": "General contains basic browsing-history and startup settings.",
      "B": "Security is primarily zone-based.",
      "C": "Privacy handles cookies/pop-ups.",
      "D": "Content manages certificates and AutoComplete.",
      "E": "Connections handles networking.",
      "F": "Programs manages add-ons/defaults.",
      "G": "Advanced contains the large set of detailed browser behavior options and reset controls."
    },
    "tip": "Advanced = the long list of fine-grained Internet Properties settings. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 11"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 10,
    "question": "Which are features of Devices and Printers? (Select 3 answers)",
    "answers": [
      "A",
      "C",
      "F"
    ],
    "options": {
      "A": "Allows users to add/remove wired and wireless devices",
      "B": "Does not include troubleshooting features",
      "C": "Provides a simplified view of all connected devices",
      "D": "Allows users to restore a device driver to the previously installed version",
      "E": "Provides a detailed view of all connected devices",
      "F": "Allows users to troubleshoot a device that is not working properly"
    },
    "explanations": {
      "A": "Devices and Printers provides a user-friendly interface for adding and removing many connected devices.",
      "B": "The applet can launch troubleshooting for devices.",
      "C": "It presents devices in a simplified graphical view.",
      "D": "Driver rollback is a Device Manager function.",
      "E": "Detailed hardware/driver information is associated with Device Manager, not the simplified Devices and Printers view.",
      "F": "Troubleshooting can be launched for supported devices from this applet."
    },
    "tip": "Devices and Printers = simple device view; Device Manager = detailed driver control. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 12"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 11,
    "question": "Programs and Features enables: (Select all that apply)",
    "answers": [
      "A",
      "B",
      "D",
      "E"
    ],
    "options": {
      "A": "Repairing a malfunctioning program",
      "B": "Accessing an option for enabling or disabling Windows features",
      "C": "Creating or deleting system restore points",
      "D": "Accessing an option to view installed updates",
      "E": "Uninstalling applications"
    },
    "explanations": {
      "A": "Programs that support repair/change can expose that option in Programs and Features.",
      "B": "The Turn Windows features on or off link is available from this applet.",
      "C": "Restore points are managed through System Protection/System Properties.",
      "D": "Programs and Features links to the installed-updates list.",
      "E": "Its primary functions include changing or uninstalling traditional desktop applications."
    },
    "tip": "Programs and Features = uninstall/repair apps, Windows features, and installed updates. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 13"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 12,
    "question": "Network and Sharing Center allows users to: (Select 3 answers)",
    "answers": [
      "B",
      "C",
      "E"
    ],
    "options": {
      "A": "Configure firewall settings",
      "B": "View active networks",
      "C": "Set up a new connection or network",
      "D": "Configure proxy server settings",
      "E": "Troubleshoot network problems"
    },
    "explanations": {
      "A": "Firewall configuration belongs to Windows Defender Firewall.",
      "B": "Network and Sharing Center displays current network connections and network type/status.",
      "C": "It includes a wizard to establish new network connections.",
      "D": "Proxy settings are accessed elsewhere, including Internet Properties Connections/LAN settings.",
      "E": "It provides access to network troubleshooting tools."
    },
    "tip": "Network and Sharing Center = view, connect, and troubleshoot networks. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 14"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 13,
    "question": "Network and Sharing Center provides access to: (Select 3 answers)",
    "answers": [
      "A",
      "B",
      "E"
    ],
    "options": {
      "A": "Network adapter settings",
      "B": "Advanced sharing settings",
      "C": "Internet security zone settings",
      "D": "Physical location settings",
      "E": "Media streaming options"
    },
    "explanations": {
      "A": "Change adapter settings is available from Network and Sharing Center.",
      "B": "It links to sharing/discovery configuration.",
      "C": "Internet security zones are in Internet Properties Security.",
      "D": "This is not one of the source's Network and Sharing Center options.",
      "E": "Media streaming settings can be reached through Network and Sharing Center."
    },
    "tip": "Think adapters, sharing, and media streaming for Network and Sharing Center. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 15"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 14,
    "question": "In newer Windows versions, the classic System Control Panel applet redirects to Settings > System > About, which shows hardware/Windows information and links to related system utilities.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "This is the behavior and information described by the source.",
      "B": "The source explicitly states that the classic System applet has been deprecated and redirects to About."
    },
    "tip": "Modern Windows moves classic System information to Settings > System > About. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 16"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 15,
    "question": "Which paths can access the System > About page in Windows 10/11? (Select all that apply)",
    "answers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "options": {
      "A": "Control Panel (icon view) > System",
      "B": "Right-click Start > System",
      "C": "Control Panel (category view) > System and Security > System",
      "D": "Start > Settings > System > About",
      "E": "Control Panel > Programs and Features > System"
    },
    "explanations": {
      "A": "The deprecated System applet redirects to the About page.",
      "B": "The System shortcut opens the System/About information.",
      "C": "This classic System route redirects to About.",
      "D": "This is the direct Settings path.",
      "E": "Programs and Features does not provide the listed System/About navigation path."
    },
    "tip": "About can be reached directly in Settings or through older System shortcuts that now redirect. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 17"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 16,
    "question": "Which Control Panel applet in Windows 10/11 provides access to firewall settings?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Network and Sharing Center",
      "B": "Windows Firewall",
      "C": "Security and Maintenance",
      "D": "Windows Defender Firewall"
    },
    "explanations": {
      "A": "It handles network status, adapters, sharing, and troubleshooting, not the main firewall configuration.",
      "B": "The source uses the current applet name Windows Defender Firewall.",
      "C": "This reports security/maintenance status but is not the firewall configuration applet.",
      "D": "This applet provides Windows firewall configuration and access to advanced firewall options."
    },
    "tip": "Firewall rules belong under Windows Defender Firewall. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 18"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 17,
    "question": "The Control Panel applet providing access to Microsoft Outlook configuration options is called:",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Mail",
      "B": "Programs and Features",
      "C": "User Accounts",
      "D": "Administrative Tools"
    },
    "explanations": {
      "A": "The Mail applet provides Outlook profile, data-file, and email-account configuration.",
      "B": "This applet changes or uninstalls programs rather than configuring Outlook profiles.",
      "C": "User Accounts manages Windows accounts.",
      "D": "Administrative Tools/Windows Tools contains system management shortcuts."
    },
    "tip": "Outlook profile settings in Control Panel = Mail. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 19"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 18,
    "question": "Which is an audio configuration Control Panel applet in Windows 10/11?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Sound",
      "B": "Device Manager",
      "C": "Sounds and Audio Devices",
      "D": "Computer Management"
    },
    "explanations": {
      "A": "Sound is the Control Panel applet for playback, recording, communications, and sound-device configuration.",
      "B": "Device Manager manages hardware and drivers, including audio drivers, but is not the audio configuration applet.",
      "C": "That name belongs to older Windows versions rather than the Windows 10/11 applet identified by the source.",
      "D": "Computer Management combines administrative consoles and is not the dedicated sound applet."
    },
    "tip": "Sound = audio settings; Device Manager = audio hardware/driver management. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 20"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 19,
    "question": "Which Control Panel applet enables modification of local user account settings?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "User Accounts",
      "B": "Local Users and Groups",
      "C": "Security and Maintenance",
      "D": "User Account Control"
    },
    "explanations": {
      "A": "User Accounts is the Control Panel applet for changing local account-related settings.",
      "B": "This is an administrative management console, not the Control Panel applet named in the question.",
      "C": "This monitors security and maintenance status.",
      "D": "UAC controls elevation/notification behavior, not general local account settings."
    },
    "tip": "User Accounts manages accounts; UAC manages elevation prompts. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 21"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 20,
    "question": "Which Windows Control Panel applet allows users to manage hardware and driver settings?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Devices and Printers",
      "B": "Computer Management",
      "C": "Device Manager",
      "D": "Administrative Tools"
    },
    "explanations": {
      "A": "This gives a simplified device view but not the detailed driver-management interface.",
      "B": "It can contain a Device Manager snap-in, but it is not the specific applet requested.",
      "C": "Device Manager manages hardware devices, driver status, updates, rollback, enable/disable, and device properties.",
      "D": "This is a collection of administrative shortcuts rather than the dedicated hardware/driver applet."
    },
    "tip": "Driver problem? Open Device Manager. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 22"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 21,
    "question": "A Control Panel applet designed to improve file search performance is known as:",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Storage Spaces",
      "B": "Disk Clean-up",
      "C": "Sync Center",
      "D": "Indexing Options"
    },
    "explanations": {
      "A": "Storage Spaces combines drives into storage pools and virtual disks.",
      "B": "Disk Cleanup removes unnecessary files to free storage.",
      "C": "Sync Center manages offline/synchronized files.",
      "D": "Indexing Options controls what Windows indexes so searches can find files and content faster."
    },
    "tip": "Indexing builds a searchable catalog to speed Windows searches. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 23"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 22,
    "question": "Windows Administrative Tools (Windows Tools in Windows 11) is a Control Panel folder containing shortcuts for advanced configuration, monitoring, troubleshooting, and maintenance.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "This accurately describes the collection of administrative utilities in Windows Tools/Administrative Tools.",
      "B": "The source explicitly defines the folder this way."
    },
    "tip": "Windows Tools is a toolbox of administrative consoles and utilities. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 24"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 23,
    "question": "Which Control Panel path enables displaying hidden files, folders, and drives?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Folder Options > General > Show hidden files, folders, and drives",
      "B": "File Explorer Options > View > Advanced settings > Show hidden files, folders, and drives",
      "C": "Folder Options > General > Advanced settings > Show hidden files, folders, and drives",
      "D": "File Explorer Options > Advanced settings > Show hidden files, folders, and drives"
    },
    "explanations": {
      "A": "The hidden-item setting is not on the General tab in the source.",
      "B": "The View tab's Advanced settings contains the hidden-file visibility option.",
      "C": "The source uses File Explorer Options and the View tab, not General.",
      "D": "This omits the required View tab in the source path."
    },
    "tip": "Persistent hidden-file setting = File Explorer Options > View. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 25"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 24,
    "question": "Which action accesses the File Explorer setting that toggles hidden items?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Windows key + E > View > Hidden items",
      "B": "Windows key + F > File > Change folder and search options > Hidden items",
      "C": "Windows key + E > View > Advanced settings > Hidden items",
      "D": "Windows key + F > File > Show hidden files and folders"
    },
    "explanations": {
      "A": "This opens File Explorer and exposes the quick Hidden items toggle in the View interface.",
      "B": "This is not the source's File Explorer path.",
      "C": "Advanced settings belongs to File Explorer Options, not this quick View-menu route.",
      "D": "This is not the source's listed method."
    },
    "tip": "Quick visibility toggle = File Explorer > View > Hidden items. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 26"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 25,
    "question": "Which Control Panel sequence enables showing or hiding extensions for known file types?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Folder Options > View > Hide extensions for known file types",
      "B": "File Explorer Options > View > Advanced settings > Hide extensions for known file types",
      "C": "Folder Options > General > Hide extensions for known file types",
      "D": "File Explorer Options > Advanced settings tab > Hide extensions for known file types"
    },
    "explanations": {
      "A": "The source specifically identifies the Windows 10/11 applet as File Explorer Options.",
      "B": "This is the persistent Control Panel setting for known file extensions.",
      "C": "The setting is on View, not General.",
      "D": "There is no separate Advanced settings tab in the source path; Advanced settings is inside View."
    },
    "tip": "File extensions live in File Explorer Options > View > Advanced settings. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 27"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 26,
    "question": "The File Explorer setting for showing/hiding known file extensions can be accessed via:",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Windows key + E > View > File name extensions",
      "B": "Windows key + F > File > Change folder and search options > File name extensions",
      "C": "Windows key + E > View > Options > Advanced settings > File name extensions",
      "D": "Windows key + F > File > Settings > File name extensions"
    },
    "explanations": {
      "A": "This is the quick File Explorer View toggle for file-name extensions.",
      "B": "This is not the source's route.",
      "C": "The source's quick method does not require entering Options/Advanced settings.",
      "D": "This is not a valid source-listed path."
    },
    "tip": "Quick extension toggle = File Explorer > View > File name extensions. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 28"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 27,
    "question": "Which setting is NOT part of the General tab of File Explorer Options?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Selection of the default starting folder after launching File Explorer",
      "B": "Visibility of hidden files, folders, and drives",
      "C": "Folder browsing options",
      "D": "Opening items (single-click vs. double-click)",
      "E": "File Explorer browsing history options (Privacy section)"
    },
    "explanations": {
      "A": "This is a General-tab setting.",
      "B": "Hidden-item visibility is configured on the View tab, not General.",
      "C": "General includes how folders open.",
      "D": "General includes click behavior.",
      "E": "General includes the Privacy/history controls."
    },
    "tip": "General = opening/browsing/privacy; View = hidden files and other display behavior. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 29"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 28,
    "question": "File Explorer View provides quick current-folder visual/layout changes, while File Explorer Options > View provides system-wide persistent File Explorer behavior settings.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "This distinction matches the source: the View menu is quick/current-folder oriented while Options > View contains persistent behavior settings.",
      "B": "The source explicitly states this difference."
    },
    "tip": "View menu = quick display; Options > View = persistent behavior. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 30"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 29,
    "question": "Which statements describe hibernation mode? (Select 3 answers)",
    "answers": [
      "A",
      "B",
      "C"
    ],
    "options": {
      "A": "Saves system state to a storage drive",
      "B": "Resumes more slowly than waking from sleep",
      "C": "Turns the computer off after saving system state to disk",
      "D": "Requires a small amount of power to maintain system memory",
      "E": "Keeps system state in RAM",
      "F": "Resumes faster than waking from sleep"
    },
    "explanations": {
      "A": "Hibernate writes the session state to disk so it can survive power-off.",
      "B": "Restoring the saved state from storage generally takes longer than resuming from RAM.",
      "C": "Hibernate can power down after the state is saved.",
      "D": "That describes sleep, which keeps RAM powered.",
      "E": "Sleep keeps active state in RAM; hibernation stores it on disk.",
      "F": "Sleep is generally the faster resume mode."
    },
    "tip": "Hibernate = disk + power off; Sleep = RAM + small power draw. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 31"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 30,
    "question": "Which Control Panel applet provides access to Windows power plans?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Hardware and Sound",
      "B": "Computer Management",
      "C": "Power Options",
      "D": "System Properties"
    },
    "explanations": {
      "A": "This is a Control Panel category that contains Power Options, not the applet itself.",
      "B": "Computer Management is an administrative console.",
      "C": "Power Options manages power plans and related power behavior.",
      "D": "System Properties manages system configuration such as protection, advanced settings, and computer name."
    },
    "tip": "Power plan = Power Options. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 32"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 31,
    "question": "Which statements describe sleep mode? (Select 3 answers)",
    "answers": [
      "A",
      "D",
      "E"
    ],
    "options": {
      "A": "Requires a small amount of power to maintain system memory",
      "B": "Saves system state to a storage drive",
      "C": "Turns the computer off after saving system state to disk",
      "D": "Resumes faster than recovering from hibernation",
      "E": "Keeps system state in RAM",
      "F": "Resumes more slowly than recovering from hibernation"
    },
    "explanations": {
      "A": "Sleep keeps RAM powered so the session remains available.",
      "B": "That is the defining behavior of hibernation.",
      "C": "That describes hibernation rather than sleep.",
      "D": "Sleep resumes quickly because the session remains in RAM.",
      "E": "Open applications and session state remain in memory.",
      "F": "The source states the opposite: sleep normally resumes faster."
    },
    "tip": "Sleep = RAM stays alive, so wake-up is fast. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 33"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 32,
    "question": "Which paths access the laptop 'Choose what closing the lid does' setting? (Select all that apply)",
    "answers": [
      "A",
      "B",
      "C"
    ],
    "options": {
      "A": "Control Panel category view > Hardware and Sound > Power Options > Choose what closing the lid does",
      "B": "Start > Settings > System > Power & sleep > Additional power settings > Choose what closing the lid does",
      "C": "Control Panel icon view > Power Options > Choose what closing the lid does",
      "D": "Start > Settings > Devices > Power & sleep > Additional power settings > Choose what closing the lid does"
    },
    "explanations": {
      "A": "This is the category-view route to lid behavior.",
      "B": "This Settings route opens the classic Power Options link used for lid behavior.",
      "C": "Icon view opens Power Options directly.",
      "D": "Power & sleep is under System in the source, not Devices."
    },
    "tip": "Lid behavior ultimately lives in Power Options. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 34"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 33,
    "question": "Which paths provide access to Turn on fast startup? (Select all that apply)",
    "answers": [
      "A",
      "C",
      "D"
    ],
    "options": {
      "A": "Control Panel category view > Hardware and Sound > Power Options > Choose what the power buttons do > Change settings that are currently unavailable > Turn on fast startup",
      "B": "Start > Settings > Devices > Power & sleep > Additional power settings > Choose what the power buttons do > Change settings that are currently unavailable > Turn on fast startup",
      "C": "Control Panel icon view > Power Options > Choose what the power buttons do > Change settings that are currently unavailable > Turn on fast startup",
      "D": "Start > Settings > System > Power & sleep > Additional power settings > Choose what the power buttons do > Change settings that are currently unavailable > Turn on fast startup"
    },
    "explanations": {
      "A": "This is the category-view route to the Fast startup checkbox.",
      "B": "The source places Power & sleep under System, not Devices.",
      "C": "Icon view reaches the same Power Options configuration.",
      "D": "This is the Settings-to-classic-Power-Options route listed by the source."
    },
    "tip": "Fast startup is hidden behind Power Options > Choose what the power buttons do. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 35"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 34,
    "question": "Where can USB selective suspend be accessed? (Select all that apply)",
    "answers": [
      "A",
      "B",
      "C"
    ],
    "options": {
      "A": "Control Panel icon view > Power Options > Change plan settings > Change advanced power settings > USB settings > USB selective suspend setting",
      "B": "Start > Settings > System > Power & sleep > Additional power settings > Change plan settings > Change advanced power settings > USB settings > USB selective suspend setting",
      "C": "Control Panel category view > Hardware and Sound > Power Options > Change plan settings > Change advanced power settings > USB settings > USB selective suspend setting",
      "D": "Start > Settings > Devices > Power & sleep > Additional power settings > Change plan settings > Change advanced power settings > USB settings > USB selective suspend setting"
    },
    "explanations": {
      "A": "This is the direct icon-view Power Options route.",
      "B": "This Settings route leads into advanced Power Options.",
      "C": "This is the category-view route.",
      "D": "The source places Power & sleep under System, not Devices."
    },
    "tip": "USB selective suspend is an Advanced Power Options setting. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 36"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 35,
    "question": "Which Windows 10 Settings section includes configuration options aimed at users with disabilities?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Accessibility",
      "B": "Ease of Access Center",
      "C": "User Accounts",
      "D": "Ease of Access"
    },
    "explanations": {
      "A": "The source uses the Windows 10 section name Ease of Access; Accessibility is the newer Windows 11 naming.",
      "B": "Ease of Access Center is the classic Control Panel name, not the Windows 10 Settings section.",
      "C": "User Accounts manages accounts, not accessibility.",
      "D": "Windows 10 Settings uses Ease of Access for accessibility-related options."
    },
    "tip": "Windows 10 = Ease of Access; Windows 11 commonly calls it Accessibility. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 37"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 36,
    "question": "Which Windows Settings section configures date, time, region, language, and speech recognition?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "System",
      "B": "Date and Time",
      "C": "Clock and Region",
      "D": "Time & Language"
    },
    "explanations": {
      "A": "System contains display, sound, notifications, power, and storage.",
      "B": "This is not the broader Settings section name in the source.",
      "C": "Clock and Region is a Control Panel category.",
      "D": "Time & Language groups date/time, region, language, and speech settings."
    },
    "tip": "Time & Language = clock + region + language + speech. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 38"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 37,
    "question": "Which Windows 10 Settings section provides backup, recovery, and OS upgrade options?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Windows Update",
      "B": "System",
      "C": "Update & Security",
      "D": "Backup and Restore"
    },
    "explanations": {
      "A": "Windows Update is one component of the broader source section.",
      "B": "In the source's Windows 10 organization, these options are under Update & Security.",
      "C": "Windows 10 groups Windows Update, backup, recovery, and related security/update functions here.",
      "D": "Backup and Restore is a classic Control Panel feature, not the Settings section requested."
    },
    "tip": "Windows 10 maintenance and recovery tasks often live under Update & Security. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 39"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 38,
    "question": "Which Windows Settings section hosts desktop customization settings?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Personalization",
      "B": "System",
      "C": "Appearance and Personalization",
      "D": "Programs and Features"
    },
    "explanations": {
      "A": "Personalization contains desktop background, colors, themes, lock screen, and related appearance settings.",
      "B": "System focuses on core device behavior such as display, sound, power, and storage.",
      "C": "This is a Control Panel category, not the Settings section.",
      "D": "This is a Control Panel applet for installed desktop programs."
    },
    "tip": "Wallpaper, colors, themes = Personalization. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 40"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 39,
    "question": "Which Windows Settings section includes options to modify installed programs?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "System",
      "B": "Apps",
      "C": "Privacy",
      "D": "Storage"
    },
    "explanations": {
      "A": "System is not the main installed-app management section.",
      "B": "Apps provides installed application management and related app settings.",
      "C": "Privacy manages permissions and data-access settings.",
      "D": "Storage manages disk usage and storage behavior."
    },
    "tip": "Installed software in Settings = Apps. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 41"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 40,
    "question": "Which Windows 10 Settings section allows users to modify permissions for the OS and applications?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Update & Security",
      "B": "Privacy",
      "C": "Apps",
      "D": "Privacy & security"
    },
    "explanations": {
      "A": "This handles updates, recovery, backup, and security-related maintenance.",
      "B": "Windows 10 Privacy contains permissions controlling access to capabilities and personal data.",
      "C": "Apps manages installed applications rather than the main permission categories.",
      "D": "That is the Windows 11 naming; the source asks specifically for Windows 10."
    },
    "tip": "Windows 10 permissions = Privacy; Windows 11 uses Privacy & security. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 42"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 41,
    "question": "Which Windows Settings section provides display, sound, notifications, power management, and storage settings?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Devices",
      "B": "System",
      "C": "Hardware and Sound",
      "D": "Device Manager"
    },
    "explanations": {
      "A": "Devices handles connected hardware such as Bluetooth and printers in Windows 10.",
      "B": "System groups display, sound, notifications, power, and storage settings.",
      "C": "Hardware and Sound is a Control Panel category.",
      "D": "Device Manager is for hardware and drivers, not these general Settings categories."
    },
    "tip": "Core PC behavior such as display, sound, power, and storage = System. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 43"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 42,
    "question": "Which Windows 10 Settings section manages Bluetooth devices, printers, and other connected hardware?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Device Manager",
      "B": "Devices",
      "C": "Bluetooth & devices",
      "D": "Devices and Printers"
    },
    "explanations": {
      "A": "Device Manager is a hardware/driver management console, not the Windows 10 Settings section.",
      "B": "Windows 10 Settings uses Devices for Bluetooth, printers, mouse, and other connected hardware.",
      "C": "This is the newer Windows 11 section name, while the question asks for Windows 10.",
      "D": "This is a classic Control Panel applet."
    },
    "tip": "Windows 10 = Devices; Windows 11 = Bluetooth & devices. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 44"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 43,
    "question": "Which Windows Settings section provides access to network configuration options?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Network & Internet",
      "B": "Internet Options",
      "C": "Network and Sharing Center",
      "D": "Network Connections"
    },
    "explanations": {
      "A": "This Settings section contains Wi-Fi, Ethernet, VPN, proxy, and other network configuration.",
      "B": "Internet Options is a classic Control Panel/Internet Properties utility.",
      "C": "This is a Control Panel applet.",
      "D": "This is a classic interface for network adapters, not the main Settings section."
    },
    "tip": "Modern Windows network settings = Network & Internet. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 45"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 44,
    "question": "Which option enables access to gaming settings in Windows Settings?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Apps",
      "B": "System",
      "C": "Programs and Features",
      "D": "Gaming"
    },
    "explanations": {
      "A": "Apps manages installed software.",
      "B": "System contains core hardware/OS behavior settings.",
      "C": "This is a Control Panel applet.",
      "D": "Gaming is the Settings section for game-related features and options."
    },
    "tip": "Game Bar and related Windows gaming options live under Gaming. CompTIA A+ 220-1202 - Microsoft Windows Settings Page 46"
  },
  {
    "topic": "Microsoft Windows Settings",
    "number": 45,
    "question": "Which Settings section in Windows 10/11 manages sign-in options and connected account settings, including email?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Accessibility",
      "B": "Network & internet",
      "C": "Accounts",
      "D": "Privacy & security"
    },
    "explanations": {
      "A": "Accessibility is for assistive features.",
      "B": "This configures networking.",
      "C": "Accounts contains sign-in options, user/account information, and connected email/account settings.",
      "D": "This manages privacy permissions and security settings, not the main sign-in/account configuration."
    },
    "tip": "Passwords, sign-in methods, and connected accounts = Accounts."
  },
  {
    "topic": "Mobile Device Security",
    "number": 1,
    "question": "Which method of protecting mobile devices ensures that all data on the device is rendered unreadable without proper authentication?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Password protection",
      "B": "Data hashing",
      "C": "Remote wipe",
      "D": "Device encryption"
    },
    "explanations": {
      "A": "A password controls access to the device, but the stored data itself is not necessarily transformed into unreadable ciphertext.",
      "B": "Hashing creates one-way digests for integrity or password verification; it is not used to make all device data reversibly unreadable.",
      "C": "Remote wipe deletes data after a device is lost or compromised rather than continuously protecting stored data.",
      "D": "Device encryption converts stored data into an unreadable form that requires the proper authentication key or credentials to decrypt and access."
    },
    "tip": "Encryption protects data at rest by making stored information unreadable without the key. CompTIA A+ 220-1202 - Mobile Device Security Page 3"
  },
  {
    "topic": "Mobile Device Security",
    "number": 2,
    "question": "Which biometric screen lock implementations are commonly used on mobile devices? (Select 2 answers)",
    "answers": [
      "B",
      "E"
    ],
    "options": {
      "A": "Keystroke dynamics",
      "B": "Fingerprint",
      "C": "Signature recognition",
      "D": "Hand geometry",
      "E": "Facial recognition"
    },
    "explanations": {
      "A": "Keystroke dynamics analyzes typing behavior and is not a common built-in mobile screen-unlock biometric.",
      "B": "Fingerprint sensors compare a user's fingerprint characteristics and are widely used for biometric mobile authentication.",
      "C": "Signature recognition exists as a biometric concept but is not a common mobile screen-lock method in this quiz.",
      "D": "Hand geometry typically requires specialized scanning hardware and is uncommon for mobile device screen locks.",
      "E": "Facial recognition uses the device camera and sensors to authenticate the user's face and is common on modern mobile devices."
    },
    "tip": "The common mobile biometrics are fingerprint and facial recognition. CompTIA A+ 220-1202 - Mobile Device Security Page 4"
  },
  {
    "topic": "Mobile Device Security",
    "number": 3,
    "question": "Which answer refers to a knowledge-based authentication factor used with screen locks?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Geolocation",
      "B": "Digital signature",
      "C": "PIN code",
      "D": "Software token"
    },
    "explanations": {
      "A": "Geolocation describes where the device is located and is not something the user knows.",
      "B": "A digital signature uses cryptographic keys to verify authenticity and integrity; it is not a screen-lock knowledge factor.",
      "C": "A PIN is a secret value the user knows, making it a knowledge-based authentication factor.",
      "D": "A software token is generally a possession-based factor because the user proves access to a device or application that generates or receives the token."
    },
    "tip": "Knowledge factor = something you know, such as a PIN or password. CompTIA A+ 220-1202 - Mobile Device Security Page 5"
  },
  {
    "topic": "Mobile Device Security",
    "number": 4,
    "question": "What is the typical, primary fallback authentication method when enabling biometrics on a mobile device?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "QR code scan",
      "B": "Security question",
      "C": "PIN or passcode",
      "D": "Pattern unlock"
    },
    "explanations": {
      "A": "Scanning a QR code is not the standard fallback when fingerprint or facial authentication cannot be used.",
      "B": "Security questions are account-recovery mechanisms and are not the normal local biometric fallback.",
      "C": "Mobile operating systems typically require a PIN or passcode as the backup credential when biometric authentication fails or is temporarily unavailable.",
      "D": "Pattern unlock can be used on some Android devices, but the source identifies a PIN or passcode as the typical primary fallback."
    },
    "tip": "Biometrics usually have a PIN or passcode behind them as the backup credential. CompTIA A+ 220-1202 - Mobile Device Security Page 6"
  },
  {
    "topic": "Mobile Device Security",
    "number": 5,
    "question": "Which screen lock method requires tracing a specific design on the screen to unlock an Android device?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Fingerprint scan",
      "B": "Touch ID",
      "C": "Swipe gesture",
      "D": "Pattern unlock"
    },
    "explanations": {
      "A": "A fingerprint scan reads biometric fingerprint characteristics rather than a traced design.",
      "B": "Touch ID is Apple's fingerprint authentication technology and does not require tracing a pattern.",
      "C": "A basic swipe only moves across the screen and does not require reproducing a specific stored design.",
      "D": "Pattern unlock requires the user to trace a previously configured sequence across points on the Android lock screen."
    },
    "tip": "Pattern unlock = trace the saved path across the on-screen dots. CompTIA A+ 220-1202 - Mobile Device Security Page 7"
  },
  {
    "topic": "Mobile Device Security",
    "number": 6,
    "question": "Which mobile screen lock implementation, while providing no authentication, allows the user to unlock the device with a single, continuous gesture across the screen?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Pattern unlock",
      "B": "NFC tap-to-unlock",
      "C": "Proximity sensor lock",
      "D": "Swipe unlock"
    },
    "explanations": {
      "A": "Pattern unlock requires the user to reproduce a specific secret pattern, so it provides an authentication check.",
      "B": "NFC unlocking depends on a nearby NFC device or tag rather than a simple screen gesture.",
      "C": "A proximity-based feature reacts to device proximity conditions and is not the one-gesture screen method described.",
      "D": "Swipe unlock opens the device with a simple continuous gesture and does not verify a secret credential or biometric."
    },
    "tip": "Swipe unlock is convenient but provides no real authentication. CompTIA A+ 220-1202 - Mobile Device Security Page 8"
  },
  {
    "topic": "Mobile Device Security",
    "number": 7,
    "question": "Which type of file is commonly deployed through MDM or similar systems to enforce specific settings and restrictions on mobile devices?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Security template",
      "B": "Manifest file",
      "C": "Configuration profile",
      "D": "Automation script"
    },
    "explanations": {
      "A": "Security templates are associated more with standardized security settings in other management contexts, not the mobile MDM file type identified here.",
      "B": "A manifest describes application or package metadata and requirements rather than centrally enforcing mobile device settings.",
      "C": "A configuration profile contains predefined settings and restrictions that an MDM system can push to managed mobile devices.",
      "D": "Scripts can automate tasks, but the source specifically identifies configuration profiles for mobile settings and restrictions."
    },
    "tip": "MDM pushes configuration profiles to apply mobile security settings consistently. CompTIA A+ 220-1202 - Mobile Device Security Page 9"
  },
  {
    "topic": "Mobile Device Security",
    "number": 8,
    "question": "A company wants to ensure all mobile devices automatically receive the latest operating system and application security updates. Which process should be implemented?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Malware signature update",
      "B": "Vulnerability assessment",
      "C": "Patch management",
      "D": "Group policy enforcement"
    },
    "explanations": {
      "A": "Signature updates refresh malware detection data but do not manage operating-system and application patches.",
      "B": "A vulnerability assessment identifies weaknesses but does not itself distribute and install security updates.",
      "C": "Patch management controls the testing, distribution, installation, and tracking of OS and application updates across devices.",
      "D": "Group Policy is primarily a Windows domain-management mechanism and is not the general mobile update process requested."
    },
    "tip": "Patch management keeps operating systems and applications updated against known vulnerabilities. CompTIA A+ 220-1202 - Mobile Device Security Page 10"
  },
  {
    "topic": "Mobile Device Security",
    "number": 9,
    "question": "Endpoint security software on mobile devices includes which common examples? (Select all that apply)",
    "answers": [
      "A",
      "B",
      "C"
    ],
    "options": {
      "A": "Antivirus software",
      "B": "Content filters",
      "C": "Anti-malware software",
      "D": "Password managers"
    },
    "explanations": {
      "A": "Antivirus software detects and blocks malicious programs and is a standard endpoint protection tool.",
      "B": "Content filters restrict access to malicious, inappropriate, or unauthorized web content and can be part of mobile endpoint protection.",
      "C": "Anti-malware tools detect, quarantine, and remove a broader range of malicious software threats.",
      "D": "Password managers protect and organize credentials, but the source does not classify them as one of the endpoint security application examples for this question."
    },
    "tip": "Mobile endpoint protection commonly includes antivirus, anti-malware, and content filtering. CompTIA A+ 220-1202 - Mobile Device Security Page 11"
  },
  {
    "topic": "Mobile Device Security",
    "number": 10,
    "question": "Which answer refers to dedicated software that uses positional telemetry for geofencing and remote device recovery?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Asset inventory software",
      "B": "Stalkerware",
      "C": "Locator application",
      "D": "Mobile telemetry app"
    },
    "explanations": {
      "A": "Asset inventory tracks device ownership, hardware, software, and status but is not primarily a location-recovery tool.",
      "B": "Stalkerware secretly monitors a person's activity and location without appropriate consent; it is malicious or abusive software.",
      "C": "A locator application uses device location telemetry to find lost devices and can support location-based features such as geofencing.",
      "D": "This is a generic description rather than the dedicated recovery software type identified by the source."
    },
    "tip": "Locator apps use device location data to help find or recover missing mobile devices. CompTIA A+ 220-1202 - Mobile Device Security Page 12"
  },
  {
    "topic": "Mobile Device Security",
    "number": 11,
    "question": "What is the primary security reason for using an MDM to enforce remote wipe capability on a mobile device?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Minimizing the impact of malicious software",
      "B": "Preventing unauthorized access to corporate data",
      "C": "Restoring device to its default configuration",
      "D": "Protecting the privacy of user's personal data"
    },
    "explanations": {
      "A": "Remote wipe may remove malware along with data, but its main purpose is protecting information when control of the device is lost.",
      "B": "Remote wipe lets administrators erase corporate information from a lost, stolen, or compromised device so unauthorized people cannot access it.",
      "C": "A wipe may reset a device, but restoration to defaults is not the primary security objective in this scenario.",
      "D": "Personal privacy can benefit from a wipe, but an organizational MDM primarily uses it to protect corporate data."
    },
    "tip": "Remote wipe protects company data after the device leaves your control. CompTIA A+ 220-1202 - Mobile Device Security Page 13"
  },
  {
    "topic": "Mobile Device Security",
    "number": 12,
    "question": "A mobile device security administrator needs to ensure that a user's corporate data can be restored to a replacement device after the original device is permanently lost. Which solution provides this capability?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Configuration profiles",
      "B": "Device provisioning",
      "C": "Containerization",
      "D": "Remote backup applications"
    },
    "explanations": {
      "A": "Configuration profiles restore settings and restrictions, not the user's backed-up corporate data.",
      "B": "Provisioning prepares and enrolls a device but does not by itself preserve user data for recovery.",
      "C": "Containerization separates corporate and personal data on a device but is not a backup and restore mechanism.",
      "D": "Remote backup applications copy data to another protected location so it can be restored to a replacement device after loss."
    },
    "tip": "Backup protects availability - if the device is gone, the data can still be restored elsewhere. CompTIA A+ 220-1202 - Mobile Device Security Page 14"
  },
  {
    "topic": "Mobile Device Security",
    "number": 13,
    "question": "Failed log-in attempt restrictions can lock a device, increase delays, or trigger other protective actions after repeated unsuccessful authentication attempts, helping mitigate brute-force attacks and unauthorized access.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "This matches the source: limiting consecutive failed attempts slows repeated guessing and can trigger lockout, delays, wipe, or account suspension.",
      "B": "The statement correctly describes the purpose and possible actions of failed-login restrictions."
    },
    "tip": "Failed-login limits stop attackers from making unlimited rapid guesses. CompTIA A+ 220-1202 - Mobile Device Security Page 15"
  },
  {
    "topic": "Mobile Device Security",
    "number": 14,
    "question": "An administrator uses MDM software to restrict camera use and prevent USB file transfers on company-issued smartphones. What type of control is being applied?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Hardware access control",
      "B": "Device policy enforcement",
      "C": "Configuration profile deployment",
      "D": "Device provisioning"
    },
    "explanations": {
      "A": "The restrictions affect hardware capabilities, but the source identifies the broader MDM mechanism as policy enforcement.",
      "B": "MDM device policies centrally enforce which mobile functions and behaviors are permitted, including disabling cameras or USB transfers.",
      "C": "A profile may technically deliver the settings, but the question asks what type of control the administrator is applying through those restrictions.",
      "D": "Provisioning enrolls and prepares devices for use; it is not the ongoing restriction of device features."
    },
    "tip": "MDM device policy enforcement decides what managed phones are allowed to do. CompTIA A+ 220-1202 - Mobile Device Security Page 16"
  },
  {
    "topic": "Mobile Device Security",
    "number": 15,
    "question": "What are the organizational and administrative advantages of a corporate-owned mobile device deployment model over a BYOD policy? (Select 3 answers)",
    "answers": [
      "A",
      "D",
      "E"
    ],
    "options": {
      "A": "Full administrative control over the entire device",
      "B": "Separation of personal and corporate data via containerization",
      "C": "Less restrictive usage policies for non-work activities",
      "D": "Standardization of hardware, software, and configuration",
      "E": "Centralized device policy enforcement through MDM"
    },
    "explanations": {
      "A": "Because the organization owns the device, administrators can enforce broader security, application, and configuration controls.",
      "B": "Containerization is especially useful where personal and business data coexist, including BYOD; it is not the main corporate-owned advantage selected here.",
      "C": "Corporate ownership generally permits more restrictive, not less restrictive, organizational control.",
      "D": "Company ownership lets IT select consistent device models, software versions, and configurations, simplifying support and security.",
      "E": "Corporate-owned fleets can be centrally managed through MDM with consistent security and compliance policies."
    },
    "tip": "Corporate-owned devices give IT more control, more standardization, and easier centralized policy enforcement. CompTIA A+ 220-1202 - Mobile Device Security Page 17"
  },
  {
    "topic": "Mobile Device Security",
    "number": 16,
    "question": "Profile security requirements are predefined security rules and configurations applied to mobile devices through configuration profiles, typically managed by MDM systems, to ensure compliance with organizational standards.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "This matches the source description: configuration profiles apply standardized authentication, data-protection, and access-control requirements to managed devices.",
      "B": "The statement accurately describes profile security requirements and their relationship to MDM configuration profiles."
    },
    "tip": "Security profiles let MDM apply the same required settings across many devices."
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 1,
    "question": "What is the most common initial troubleshooting step used to resolve general mobile OS and application issues?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Performing factory reset",
      "B": "Applying system updates",
      "C": "Clearing cached data",
      "D": "Power cycling the device"
    },
    "explanations": {
      "A": "A factory reset erases user data and settings, so it is a last-resort action rather than the first troubleshooting step.",
      "B": "Updates can fix known defects, but they are more invasive and time-consuming than first restarting the device.",
      "C": "Clearing cache is useful for app-specific problems, but it is not the broadest initial step for general mobile issues.",
      "D": "Power cycling clears temporary memory states, hung processes, and minor OS glitches with very little risk, making it the standard first step."
    },
    "tip": "Start mobile troubleshooting with the least invasive fix - restart or power cycle first. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 3"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 2,
    "question": "A user reports that a mobile app fails to launch. What is the best initial troubleshooting step?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Free up storage space",
      "B": "Clear the app cache/data",
      "C": "Restart the device",
      "D": "Verify app permissions"
    },
    "explanations": {
      "A": "Low storage can cause app problems, but there is no evidence yet that storage is the cause.",
      "B": "Clearing app data can remove settings and login state, so it should follow a simpler restart.",
      "C": "Restarting clears temporary OS and memory problems that can prevent an otherwise healthy app from launching.",
      "D": "Permissions matter when an app cannot access a feature, but they are not the best first step for a general launch failure."
    },
    "tip": "If one app suddenly will not launch, restart before changing its data or settings. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 4"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 3,
    "question": "To force stop a mobile app means to: (Select all that apply)",
    "answers": [
      "A",
      "B",
      "E"
    ],
    "options": {
      "A": "Terminate all processes related to the app",
      "B": "Stop the app from running in the foreground",
      "C": "Disable the app until it is manually re-enabled",
      "D": "Revoke permissions granted to the app",
      "E": "Stop the app from running in the background"
    },
    "explanations": {
      "A": "Force stop terminates the application's active processes so its current execution ends.",
      "B": "The app's visible foreground activity is stopped when the application is force-closed.",
      "C": "Disabling an app is a separate action that prevents normal use until it is enabled again.",
      "D": "Force stopping does not change the app's camera, location, storage, or other permissions.",
      "E": "Force stop also terminates background activity associated with the app until it is launched again."
    },
    "tip": "Force stop ends the app's current foreground and background execution; it does not disable or re-permission the app. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 5"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 4,
    "question": "Match each mobile app troubleshooting action with the root cause it is primarily intended to resolve.",
    "answers": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "options": {
      "A": "Reinstall the app - Core application files are corrupted, incomplete, mismatched, or fail integrity checks",
      "B": "Clear the app cache/data - Crashes or misbehavior are caused by corrupted temporary files, cached data, or user-specific settings",
      "C": "Update the app - Known bugs or compatibility issues have been fixed in a newer version",
      "D": "Restart the device - Crashes are caused by temporary memory conflicts, hung processes, or system resource issues",
      "E": "Force close the app - An app is unresponsive, frozen, or stuck in a loop"
    },
    "explanations": {
      "A": "Reinstallation replaces the application's core files with a clean copy, directly addressing damaged or incomplete program files.",
      "B": "Clearing cache/data removes temporary content and app-specific state that can become corrupted.",
      "C": "Updating installs vendor fixes for known defects and compatibility problems.",
      "D": "A restart clears temporary memory and process states without removing the application.",
      "E": "Force closing terminates the stuck process so the application can start a fresh session."
    },
    "tip": "Troubleshoot least-invasively: force close/restart first, then clear data, update, or reinstall when the evidence points there. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 6"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 5,
    "question": "A mobile device cannot update an app and shows an account authentication error. What is the most likely cause?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Expired app store credentials",
      "B": "Two-factor authentication timeout",
      "C": "App store access restricted by firewall",
      "D": "Failed device compliance check"
    },
    "explanations": {
      "A": "Expired or invalid store credentials prevent the store from authenticating the account needed to authorize the update.",
      "B": "A 2FA timeout can interrupt a login attempt, but the quiz identifies expired store credentials as the direct cause.",
      "C": "A firewall restriction would cause connectivity/access errors rather than an account authentication error.",
      "D": "Compliance failures are management-policy issues and normally produce a policy or enrollment-related message."
    },
    "tip": "App-store authentication errors point first to the account credentials. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 7"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 6,
    "question": "An app from the official app store will not install on a company-managed smartphone. What is the most likely reason?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Corrupted installation files",
      "B": "Pending system updates",
      "C": "MDM policy restrictions",
      "D": "Disabled sideloading option"
    },
    "explanations": {
      "A": "Possible on any device, but a company-managed phone adds a stronger policy-related explanation.",
      "B": "Updates can affect compatibility, but they do not best explain an official-store app being blocked on a managed device.",
      "C": "Mobile Device Management can allow or deny application installation according to company security policy.",
      "D": "Sideloading controls installation outside the official store, so it does not explain an official-store installation failure."
    },
    "tip": "On managed phones, unexpected app restrictions often come from MDM policy. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 8"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 7,
    "question": "Which actions can help troubleshoot a mobile app that becomes slow to respond?",
    "answers": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "options": {
      "A": "Restart the device",
      "B": "Force stop and relaunch the app",
      "C": "Update the app",
      "D": "Clear the app cache/data",
      "E": "All of the above"
    },
    "explanations": {
      "A": "A restart clears temporary memory pressure and hung processes.",
      "B": "This terminates a stuck app session and starts a clean process.",
      "C": "A newer version may fix performance bugs or compatibility problems.",
      "D": "Corrupted or excessive cached data can slow or destabilize an application.",
      "E": "All four listed actions are valid troubleshooting measures for an app that responds slowly."
    },
    "tip": "Slow app troubleshooting can include restart, force stop, update, and cache/data cleanup. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 9"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 8,
    "question": "Most mobile OS updates require a minimum battery percentage or charging status to prevent shutdown during the update process.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Interrupting an OS update because of power loss can corrupt the installation, so mobile platforms commonly enforce battery or charging requirements.",
      "B": "The statement accurately describes a safety requirement commonly used during mobile OS updates."
    },
    "tip": "Keep a mobile device charged during OS updates so power loss cannot interrupt system-file replacement. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 10"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 9,
    "question": "An OS update begins but consistently stops and reverses at 75%. Free space and network speed are adequate. What does this most strongly suggest?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Corrupted update package",
      "B": "Insufficient amount of RAM",
      "C": "Battery charge below threshold",
      "D": "Exceeded data usage limit"
    },
    "explanations": {
      "A": "A repeatable failure at the same installation point strongly suggests damaged or invalid update data.",
      "B": "RAM shortages are less likely to produce a repeatable rollback at the same percentage.",
      "C": "The update already begins, and a battery threshold problem would normally block or pause the process earlier.",
      "D": "The package is already installing, so a network data limit does not best explain rollback at a fixed installation point."
    },
    "tip": "An update that repeatedly fails at the same percentage can indicate a corrupted update package. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 11"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 10,
    "question": "A personally-owned device repeatedly fails to initiate an OS update. Wi-Fi is good, the charger is connected, and the package is available. What is the most likely cause?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Operating system incompatibility",
      "B": "Corrupted installation files",
      "C": "MDM policy restrictions",
      "D": "Insufficient free storage space"
    },
    "explanations": {
      "A": "The update package is confirmed available for the device, making incompatibility less likely.",
      "B": "That would more often cause a failure during installation rather than failure to initiate.",
      "C": "The scenario specifies a personally-owned device, so company MDM restrictions are less likely.",
      "D": "Mobile OS updates need working space to download, unpack, and install files; insufficient storage can prevent the update from starting."
    },
    "tip": "Before a mobile OS update, verify power, network, and enough free storage. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 12"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 11,
    "question": "A tablet's battery drains unusually fast even when idle. Which action will most likely resolve the issue?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Reduce screen brightness to minimum",
      "B": "Check for physical damage to the battery",
      "C": "Identify and restrict background applications",
      "D": "Update the operating system"
    },
    "explanations": {
      "A": "Screen brightness matters while the display is on, but the problem occurs even while the device is idle.",
      "B": "Battery damage should be investigated when indicated, but background software activity is a more direct first target for idle drain.",
      "C": "Apps that continue syncing, tracking location, or processing in the background can consume substantial power while the device appears idle.",
      "D": "An update can fix battery bugs, but it is less targeted than identifying apps consuming power in the background."
    },
    "tip": "Battery drain while idle often means something is still running in the background. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 13"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 12,
    "question": "A mobile device repeatedly loses battery charge in areas with no reliable cellular coverage. Which action can most effectively reduce the drain?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Enable battery saver mode",
      "B": "Reset network settings",
      "C": "Turn off location services",
      "D": "Enable airplane mode"
    },
    "explanations": {
      "A": "Battery saver can reduce consumption generally, but the radio can still waste power searching for a missing cellular signal.",
      "B": "Resetting settings does not solve the absence of cellular coverage.",
      "C": "Location can consume power, but the scenario specifically points to cellular signal searching.",
      "D": "Airplane mode stops the cellular radio from repeatedly searching for service, which can substantially reduce battery drain in no-coverage areas."
    },
    "tip": "No cellular signal makes the radio search harder; airplane mode stops that search. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 14"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 13,
    "question": "A corrupted OS installation is the most likely cause of persistent random reboots. After backing up data and charging the device, what should be done next?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Check for and install the latest OS update",
      "B": "Reboot into diagnostic startup mode",
      "C": "Downgrade to the previous stable version",
      "D": "Perform a factory reset"
    },
    "explanations": {
      "A": "An update is less appropriate once the OS installation itself has been isolated as corrupted.",
      "B": "Diagnostic modes help isolate causes, but the cause has already been identified as OS corruption.",
      "C": "Downgrading is not the standard clean-remediation step identified by the quiz.",
      "D": "A factory reset returns the device to a clean software state, removing the corrupted installation state after user data has been backed up."
    },
    "tip": "Confirmed persistent OS corruption plus a completed backup can justify a factory reset. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 15"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 14,
    "question": "A mobile device reboots randomly during high CPU/GPU load. What is the most probable cause?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Outdated firmware",
      "B": "Degraded battery",
      "C": "Malware infection",
      "D": "Device overheating"
    },
    "explanations": {
      "A": "Firmware issues can cause instability, but load-specific rebooting most strongly points to thermal stress.",
      "B": "A weak battery can cause shutdowns, but the source identifies overheating as the most probable cause during heavy CPU/GPU use.",
      "C": "Malware may increase load, but it is not the direct hardware condition described.",
      "D": "High CPU/GPU activity generates heat; if thermal limits are exceeded, the device may shut down or reboot to protect hardware."
    },
    "tip": "Reboots under heavy processing load are a classic sign to check temperature and cooling. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 16"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 15,
    "question": "Bluetooth connectivity issues can be resolved by: (Select all that apply)",
    "answers": [
      "B",
      "C",
      "D",
      "E"
    ],
    "options": {
      "A": "Moving the device closer to an access point",
      "B": "Ensuring the connecting devices are adequately close to each other",
      "C": "Turning Bluetooth off and then on again",
      "D": "Restarting the connected devices",
      "E": "Unpairing and then re-pairing the device"
    },
    "explanations": {
      "A": "An access point is a Wi-Fi device and is not required for direct Bluetooth pairing.",
      "B": "Bluetooth has limited range, so excessive distance can cause failed or unstable connections.",
      "C": "Cycling Bluetooth resets the radio and can clear temporary connection faults.",
      "D": "Restarting clears temporary Bluetooth service and OS problems on either endpoint.",
      "E": "Re-pairing rebuilds the Bluetooth trust and connection information when stored pairing data is faulty."
    },
    "tip": "Bluetooth troubleshooting: range, radio reset, device restart, then re-pair. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 17"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 16,
    "question": "Which action will have no effect on resolving Wi-Fi connectivity issues on a mobile device?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Move closer to the wireless router",
      "B": "Disable airplane mode",
      "C": "Reseat the mobile device's SIM card",
      "D": "Forget the network and reconnect",
      "E": "Restart the wireless router"
    },
    "explanations": {
      "A": "A stronger signal can resolve weak-signal Wi-Fi problems.",
      "B": "Airplane mode may disable wireless radios, so turning it off can restore Wi-Fi connectivity.",
      "C": "The SIM card is used for cellular service and does not control the device's Wi-Fi connection.",
      "D": "This rebuilds the saved Wi-Fi profile and can correct bad credentials or configuration.",
      "E": "Restarting the router can clear access-point or DHCP faults affecting Wi-Fi clients."
    },
    "tip": "SIM card = cellular; Wi-Fi problems are handled through the Wi-Fi radio, profile, and router. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 18"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 17,
    "question": "Which is NOT a valid troubleshooting step for contactless payment problems?",
    "answers": [
      "G"
    ],
    "options": {
      "A": "Verify Wi-Fi credentials",
      "B": "Ensure the phone is awake and unlocked",
      "C": "Remove an EMF/RFID protective case if used",
      "D": "Enable NFC in phone settings",
      "E": "Verify payment card details in the wallet",
      "F": "Maintain very close proximity to the terminal",
      "G": "Enable airplane mode to reduce wireless interference"
    },
    "explanations": {
      "A": "This is not central to NFC itself, but connectivity can be needed by some wallet workflows; the quiz's explicitly invalid step is airplane mode.",
      "B": "Many mobile wallets require the device to be awake, unlocked, or authenticated before payment.",
      "C": "Some shielding cases can interfere with NFC communication between the phone and terminal.",
      "D": "NFC must be enabled for contactless communication on devices that expose this setting.",
      "E": "Invalid, expired, or incorrectly provisioned payment credentials can prevent transactions.",
      "F": "NFC is intentionally short-range and requires the device to be very near the reader.",
      "G": "Airplane mode is not a normal NFC payment troubleshooting step and can disable services or connectivity needed by the payment workflow."
    },
    "tip": "Contactless payment troubleshooting focuses on NFC, wallet setup, device state, and close reader proximity. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 19"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 18,
    "question": "If a mobile screen does not auto-rotate, changing the orientation-lock or auto-rotate system setting is the easiest troubleshooting step.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The source specifically recommends disabling Portrait Orientation Lock on Apple devices or enabling Auto-rotate on Android as the easiest first check.",
      "B": "The statement accurately reflects the source's recommended first troubleshooting step."
    },
    "tip": "Rotation problem? Check orientation lock or Auto-rotate before suspecting hardware. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 20"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 19,
    "question": "What package file format is used by Android for application distribution and installation?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "xap",
      "B": "apk",
      "C": "ipa",
      "D": "exe"
    },
    "explanations": {
      "A": "XAP is associated with older Windows Phone application packages.",
      "B": "APK stands for Android Package Kit and is a standard Android application installation package.",
      "C": "IPA is the application archive format associated with Apple's iOS/iPadOS ecosystem.",
      "D": "EXE is a Windows executable format, not the standard Android app package."
    },
    "tip": "Android app package = APK; Apple mobile app archive = IPA. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 21"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 20,
    "question": "Installing mobile apps from untrusted sources outside official marketplaces is called:",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Sandboxing",
      "B": "Jailbreaking",
      "C": "Rooting",
      "D": "Sideloading"
    },
    "explanations": {
      "A": "Sandboxing isolates applications from each other and the operating system; it is not an installation method.",
      "B": "Jailbreaking bypasses Apple's platform restrictions.",
      "C": "Rooting grants elevated privileges on Android.",
      "D": "Sideloading means installing an application package from outside the platform's normal official app marketplace."
    },
    "tip": "Sideloading = installing an app from outside the official store. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 22"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 21,
    "question": "Sideloading via APK is the primary method for installing unverified third-party apps on:",
    "answers": [
      "B"
    ],
    "options": {
      "A": "iOS",
      "B": "Android",
      "C": "Windows Mobile",
      "D": "Other"
    },
    "explanations": {
      "A": "iOS does not use APK packages.",
      "B": "Android uses APK packages, and manually installing them is a common sideloading method.",
      "C": "Windows Mobile does not use Android APK packages as its native application format.",
      "D": "The specific APK format identifies Android."
    },
    "tip": "APK points directly to Android. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 23"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 22,
    "question": "Installing apps from official trusted sources such as Apple's App Store or Google Play significantly reduces malware-related risk.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Official stores apply signing, review, reputation, and security controls that reduce - though do not eliminate - the risk of malicious applications.",
      "B": "The statement correctly reflects the security advantage of trusted application marketplaces."
    },
    "tip": "Official stores reduce app risk; third-party packages deserve extra scrutiny. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 24"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 23,
    "question": "What iOS/Android feature provides access to advanced system settings hidden by default from regular users?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Recovery mode",
      "B": "Safe Mode",
      "C": "Kernel mode",
      "D": "Developer Mode/options"
    },
    "explanations": {
      "A": "Recovery mode is used for system recovery and repair, not everyday advanced configuration.",
      "B": "Safe Mode is a diagnostic startup state with limited software loading.",
      "C": "Kernel mode is an operating-system privilege level, not a user-facing settings feature.",
      "D": "Developer options expose advanced diagnostic and development settings that are normally hidden from ordinary users."
    },
    "tip": "Hidden advanced mobile settings = Developer Mode/options. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 25"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 24,
    "question": "What is the process of granting a regular user elevated privileges on an Android device?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Sideloading",
      "B": "Rooting",
      "C": "Carrier unlocking",
      "D": "Jailbreaking"
    },
    "explanations": {
      "A": "Sideloading installs applications from outside the official store but does not itself grant root privileges.",
      "B": "Rooting gives elevated or root-level control over Android beyond normal user permissions.",
      "C": "Carrier unlocking permits use with other cellular carriers and does not elevate OS privileges.",
      "D": "Jailbreaking is the comparable restriction-bypass term associated with Apple iOS/iPadOS."
    },
    "tip": "Android elevated privilege = rooting. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 26"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 25,
    "question": "Bypassing Apple's built-in software restrictions on iOS/iPadOS is known as:",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Sideloading",
      "B": "Carrier unlocking",
      "C": "Rooting",
      "D": "Jailbreaking"
    },
    "explanations": {
      "A": "Sideloading describes installing software outside the official store, not the broader bypass of Apple's platform restrictions.",
      "B": "Carrier unlocking changes cellular carrier restrictions.",
      "C": "Rooting is the term normally used for Android elevated privileges.",
      "D": "Jailbreaking bypasses Apple's software restrictions and gives access beyond the normal iOS/iPadOS security model."
    },
    "tip": "Apple restriction bypass = jailbreaking; Android privilege escalation = rooting. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 27"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 26,
    "question": "Which action enables installation of software not available through the official Apple App Store?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Jailbreaking",
      "B": "Rooting",
      "C": "Sideloading",
      "D": "Carrier unlocking"
    },
    "explanations": {
      "A": "In the quiz's framing, jailbreaking removes Apple's built-in restrictions and permits installation of software outside the official App Store.",
      "B": "Rooting applies to Android rather than iOS/iPadOS.",
      "C": "Sideloading is the general act of installing outside a store, but the quiz specifically identifies jailbreaking as the enabling action on Apple devices.",
      "D": "Carrier unlocking affects cellular network compatibility, not application-store restrictions."
    },
    "tip": "In this quiz, jailbreaking is the Apple restriction bypass that enables non-App-Store software. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 28"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 27,
    "question": "Which best describes application spoofing?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "A web form accepts data other than expected, such as server commands",
      "B": "An attack exploits an unknown vulnerability in released software",
      "C": "A mobile app performs unwanted and harmful actions while disguised as a legitimate useful program",
      "D": "A method for gaining unauthorized root access to a mobile OS"
    },
    "explanations": {
      "A": "That describes an input-validation or injection-type vulnerability, not a spoofed mobile application.",
      "B": "That describes a zero-day attack.",
      "C": "Application spoofing imitates a trusted or useful app so the user installs or trusts malicious software.",
      "D": "That describes privilege escalation/root compromise rather than application spoofing."
    },
    "tip": "Spoofed app = malicious behavior hidden behind a legitimate-looking identity. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 29"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 28,
    "question": "What is the best initial diagnostic step to identify the source of excessive mobile data traffic?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Force stop background applications",
      "B": "Perform a network speed benchmark",
      "C": "Review per-app data usage logs",
      "D": "Contact the mobile service provider"
    },
    "explanations": {
      "A": "Stopping apps before identifying the source removes evidence and may not reveal which app was responsible.",
      "B": "A speed test measures throughput, not which application consumed the data.",
      "C": "Per-app usage statistics directly show which applications are responsible for cellular or network data consumption.",
      "D": "The provider can confirm account usage, but the device's own per-app logs are more targeted for identifying the responsible application."
    },
    "tip": "High data usage? Check per-app data statistics before changing anything. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 30"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 29,
    "question": "Which actions would most likely improve degraded response times on a mobile device? (Select 3 answers)",
    "answers": [
      "A",
      "C",
      "E"
    ],
    "options": {
      "A": "Installing OS or application updates",
      "B": "Reviewing CPU, RAM, or storage usage for resource-heavy apps",
      "C": "Closing unnecessary background applications",
      "D": "Enabling developer options for more detailed logs",
      "E": "Restarting the device to clear temporary processes"
    },
    "explanations": {
      "A": "Updates can fix performance defects, memory leaks, and compatibility problems.",
      "B": "This is useful diagnosis, but the source's three selected answers are direct corrective actions.",
      "C": "Closing unneeded processes frees RAM and CPU resources.",
      "D": "More logging helps diagnosis but can add overhead and does not directly improve performance.",
      "E": "Restarting clears hung or accumulated temporary processes and refreshes system resources."
    },
    "tip": "Improve responsiveness by updating, reducing background load, and restarting. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 31"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 30,
    "question": "A mobile device repeatedly displays data-usage limit notifications despite minimal user activity. What is the most likely direct cause?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Outdated OS",
      "B": "Enabled developer options",
      "C": "Malicious app",
      "D": "Faulty SIM card"
    },
    "explanations": {
      "A": "An old OS can have bugs, but it does not directly explain unexplained background data consumption as well as a malicious app.",
      "B": "Developer options do not normally generate large background data use by themselves.",
      "C": "Malware can communicate with remote servers, download content, show ads, or exfiltrate data in the background, causing unexplained usage.",
      "D": "A SIM problem can affect cellular service but does not normally create excessive data consumption."
    },
    "tip": "Unexplained data use with little user activity can indicate a malicious background app. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 32"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 31,
    "question": "A mobile device frequently loses Wi-Fi or cannot connect to networks. What is the most targeted and least disruptive troubleshooting step?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Remove and reinsert the SIM card",
      "B": "Perform a hard reboot",
      "C": "Forget all saved Wi-Fi networks and reconnect",
      "D": "Restart the device's Wi-Fi adapter"
    },
    "explanations": {
      "A": "The SIM card controls cellular service, not Wi-Fi.",
      "B": "A forced restart is broader and more disruptive than resetting only the affected Wi-Fi radio.",
      "C": "Removing every saved network is unnecessarily broad for an initial targeted step.",
      "D": "Cycling the Wi-Fi adapter resets the affected wireless connection subsystem without changing unrelated device data or settings."
    },
    "tip": "For a Wi-Fi-only problem, reset the Wi-Fi radio before using broader resets. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 33"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 32,
    "question": "If a mobile device intermittently loses Wi-Fi, which action will have no effect on improving stability?",
    "answers": [
      "E"
    ],
    "options": {
      "A": "Forget and reconnect to the Wi-Fi network",
      "B": "Move closer to the Wi-Fi router/access point",
      "C": "Restart the Wi-Fi adapter",
      "D": "Check for and reduce Wi-Fi interference",
      "E": "Remove and reinsert the SIM card"
    },
    "explanations": {
      "A": "This can replace a corrupted saved Wi-Fi profile.",
      "B": "Reducing distance can improve signal strength and stability.",
      "C": "Cycling the adapter can clear temporary radio or driver state.",
      "D": "Interference from nearby wireless devices can cause intermittent drops.",
      "E": "The SIM card is unrelated to Wi-Fi radio stability."
    },
    "tip": "Wi-Fi and cellular are separate; SIM troubleshooting does not fix Wi-Fi drops. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 34"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 33,
    "question": "A device has no internet connectivity, rapid battery drain, and high data-usage alerts. After isolating it from the network, what should the technician do next?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Replace the device battery",
      "B": "Factory reset the device",
      "C": "Perform a malware scan",
      "D": "Contact the cellular provider"
    },
    "explanations": {
      "A": "The battery drain may be a symptom of malicious activity, so replacing hardware before checking security would miss the likely root cause.",
      "B": "A reset may ultimately be required, but a malware scan is the next diagnostic/remediation step identified by the quiz.",
      "C": "The combination of network problems, abnormal data use, and battery drain suggests malicious background activity; scanning checks for that cause.",
      "D": "The symptoms affect more than carrier service and point toward a device-level security problem."
    },
    "tip": "High data + battery drain + connectivity trouble can signal malware; isolate first, then scan. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 35"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 34,
    "question": "After installing an app outside Google Play, Android shows excessive ads and pop-ups even outside the browser. What is the most likely explanation?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Outdated operating system",
      "B": "Disabled pop-up blocker",
      "C": "Unverified apps containing adware",
      "D": "Disabled Google Play Protect"
    },
    "explanations": {
      "A": "An old OS can have vulnerabilities but does not directly explain ads appearing after a third-party app installation.",
      "B": "A browser pop-up blocker only affects browser content, while the ads appear outside the browser.",
      "C": "Third-party applications can contain adware that displays intrusive advertisements throughout the device.",
      "D": "Disabling Play Protect increases risk, but the immediate cause of the advertisements is the adware in the unverified app."
    },
    "tip": "Ads outside the browser after sideloading strongly suggest adware. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 36"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 35,
    "question": "What is the primary goal of delivering a fake security warning to a mobile device user?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Mislead the user into disabling real security features",
      "B": "Trick the user into installing malicious software",
      "C": "Misinform the user about the device's actual security status",
      "D": "Pressure the user into buying a legitimate third-party app"
    },
    "explanations": {
      "A": "That can be one tactic, but the source identifies malicious software installation as the primary goal.",
      "B": "Fake alerts use fear and urgency to persuade the user to install a supposed cleaner, update, or security app that is actually malicious.",
      "C": "Misinformation is part of the social-engineering technique, but it serves the larger goal of inducing a harmful action.",
      "D": "Scareware may demand payment, but the quiz specifically identifies malicious software installation as the goal."
    },
    "tip": "Fake security alerts create urgency so the user will install or run something unsafe. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 37"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 36,
    "question": "Developer Mode was enabled and a third-party sideloaded app causes settings to reset and frequent reboots. What is the most effective way to completely remove the threat and restore normal operation?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Disable Developer Mode",
      "B": "Force stop the suspicious application",
      "C": "Perform a factory reset",
      "D": "Uninstall the application"
    },
    "explanations": {
      "A": "Turning off Developer Mode closes one avenue of advanced access but does not guarantee removal of an already-installed threat.",
      "B": "Force stop only terminates the app temporarily; it does not remove persistent files or changes.",
      "C": "A factory reset removes installed applications and user-level configuration, providing the cleanest remediation when compromise is persistent and system behavior is unstable.",
      "D": "Uninstalling may be insufficient if the malicious app has made persistent changes or installed additional components."
    },
    "tip": "Persistent compromise with system changes can require a factory reset after preserving needed clean data. CompTIA A+ 220-1202 - Mobile OS and App Troubleshooting Page 38"
  },
  {
    "topic": "Mobile OS and App Troubleshooting",
    "number": 37,
    "question": "Private photos and contacts were posted publicly without consent, and unknown apps have administrative privileges. What is the best course of action to fully remediate the device and remove unauthorized access?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Uninstall the suspicious apps",
      "B": "Perform a full malware scan",
      "C": "Reset the device to factory defaults",
      "D": "Quarantine the device via MDM"
    },
    "explanations": {
      "A": "Administrator-level malware may leave behind changes or additional components, so simple uninstalling may not fully restore trust.",
      "B": "A scan can identify threats, but the evidence of data theft and unauthorized administrative access means the device should be returned to a known-clean state.",
      "C": "A factory reset removes installed applications, administrative grants, and altered user configuration, making it the strongest complete remediation listed.",
      "D": "Quarantine is useful containment on managed devices, but it does not itself remove the compromise from the device."
    },
    "tip": "After confirmed privileged compromise and data theft, restore the device to a known-clean state."
  },
  {
    "topic": "NTFS Share Permissions",
    "number": 1,
    "question": "Which statements describing share permissions in Microsoft Windows are true? (Select 2)",
    "answers": [
      "A",
      "D"
    ],
    "options": {
      "A": "Apply exclusively to network users",
      "B": "Can be set only at the file level",
      "C": "Apply to both network and local users",
      "D": "Can be set only at the folder level"
    },
    "explanations": {
      "A": "Share permissions are evaluated when a shared folder is accessed through the network; they do not control a user opening that folder locally on the host computer.",
      "B": "Share permissions are assigned to shared folders, not to individual files.",
      "C": "Local access is governed by NTFS permissions; share permissions apply to access through the network share.",
      "D": "Windows shares are created on folders, so share permissions are configured at the folder/share level rather than per file."
    },
    "tip": "Share permissions protect network access to a shared folder; NTFS permissions also govern local access. CompTIA A+ 220-1202 - NTFS & Share Permissions Page 3"
  },
  {
    "topic": "NTFS Share Permissions",
    "number": 2,
    "question": "Which statements about NTFS permissions are correct? (Select 2)",
    "answers": [
      "A",
      "D"
    ],
    "options": {
      "A": "Apply to both network and local users",
      "B": "Can be set only at the folder level",
      "C": "Apply exclusively to local users",
      "D": "Can be applied at the folder or file level"
    },
    "explanations": {
      "A": "NTFS permissions are enforced by the NTFS filesystem whether a user accesses the object locally or through a network share.",
      "B": "NTFS permissions can be assigned to individual files as well as folders.",
      "C": "NTFS permissions still apply when NTFS files and folders are accessed remotely.",
      "D": "NTFS supports access control entries on both folders and individual files."
    },
    "tip": "NTFS permissions follow the file or folder, regardless of local or network access. CompTIA A+ 220-1202 - NTFS & Share Permissions Page 4"
  },
  {
    "topic": "NTFS Share Permissions",
    "number": 3,
    "question": "A Windows resource with conflicting NTFS and share permissions will assume:",
    "answers": [
      "C"
    ],
    "options": {
      "A": "The least restrictive permission",
      "B": "NTFS permissions",
      "C": "The most restrictive permission",
      "D": "Share permissions"
    },
    "explanations": {
      "A": "Windows does not combine conflicting share and NTFS permissions by choosing the more permissive result.",
      "B": "NTFS always applies, but during remote share access the share permission also applies, so NTFS alone does not automatically win.",
      "C": "For network access through a share, Windows evaluates both permission sets and the effective access is limited by whichever set is more restrictive.",
      "D": "Share permissions do not automatically override NTFS; both are evaluated for remote access."
    },
    "tip": "Remote share access = share permissions plus NTFS permissions; the tighter limit wins. CompTIA A+ 220-1202 - NTFS & Share Permissions Page 5"
  },
  {
    "topic": "NTFS Share Permissions",
    "number": 4,
    "question": "Share permissions grant Read while NTFS permissions grant Modify. What are the effective permission levels? (Select 2)",
    "answers": [
      "A",
      "B"
    ],
    "options": {
      "A": "Read when accessing the share remotely",
      "B": "Modify when accessing the folder locally",
      "C": "Read when accessing the folder locally",
      "D": "Modify when accessing the share remotely"
    },
    "explanations": {
      "A": "Remote access must satisfy both share and NTFS permissions. The share allows only Read, so the remote user is limited to Read.",
      "B": "Local access does not use share permissions. The NTFS Modify permission therefore controls and allows Modify locally.",
      "C": "Locally, the user has NTFS Modify, which includes more capability than Read.",
      "D": "The share permission restricts remote access to Read even though NTFS allows Modify."
    },
    "tip": "Share permissions matter only over the network; local access uses NTFS. CompTIA A+ 220-1202 - NTFS & Share Permissions Page 6"
  },
  {
    "topic": "NTFS Share Permissions",
    "number": 5,
    "question": "Share permissions grant Full Control while NTFS permissions grant Read. What are the effective permission levels? (Select 2)",
    "answers": [
      "A",
      "C"
    ],
    "options": {
      "A": "Read when accessing the share remotely",
      "B": "Full Control when accessing the folder locally",
      "C": "Read when accessing the folder locally",
      "D": "Full Control when accessing the share remotely"
    },
    "explanations": {
      "A": "Remote access is limited by the more restrictive NTFS Read permission even though the share allows Full Control.",
      "B": "Share Full Control does not apply to local access, and NTFS grants only Read.",
      "C": "For local access, only the NTFS permission applies, so the user has Read.",
      "D": "The NTFS Read permission prevents Full Control from becoming effective remotely."
    },
    "tip": "A permissive share cannot grant rights that NTFS denies. CompTIA A+ 220-1202 - NTFS & Share Permissions Page 7"
  },
  {
    "topic": "NTFS Share Permissions",
    "number": 6,
    "question": "What is the correct hierarchy of precedence for permission settings in NTFS?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Explicit Allow > Inherited Allow > Explicit Deny > Inherited Deny",
      "B": "Explicit Deny > Explicit Allow > Inherited Deny > Inherited Allow",
      "C": "Explicit Allow > Explicit Deny > Inherited Allow > Inherited Deny",
      "D": "Explicit Deny > Inherited Deny > Explicit Allow > Inherited Allow"
    },
    "explanations": {
      "A": "This incorrectly places an explicit Allow above an explicit Deny.",
      "B": "The quiz uses this precedence: explicit entries take priority over inherited entries, and Deny takes priority over Allow at the same explicit/inherited level.",
      "C": "This incorrectly gives explicit Allow higher priority than explicit Deny.",
      "D": "This incorrectly places inherited Deny ahead of an explicit Allow; explicit permissions take precedence over inherited ones."
    },
    "tip": "Explicit beats inherited; within the same level, Deny beats Allow. CompTIA A+ 220-1202 - NTFS & Share Permissions Page 8"
  },
  {
    "topic": "NTFS Share Permissions",
    "number": 7,
    "question": "The Windows attrib command can display or modify attributes such as read-only, archive, system, and hidden; + sets an attribute and - removes it.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "This matches the source: attrib manages R, A, S, and H attributes, with plus signs setting attributes and minus signs clearing them.",
      "B": "The statement correctly describes the attrib command and its + and - operators."
    },
    "tip": "attrib + sets a file attribute; attrib - removes it. CompTIA A+ 220-1202 - NTFS & Share Permissions Page 9"
  },
  {
    "topic": "NTFS Share Permissions",
    "number": 8,
    "question": "What is the correct syntax for applying the read-only attribute to a file in Windows?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "attrib +R [drive:][path][filename]",
      "B": "attrib [drive:][path][filename] /R",
      "C": "attrib /R [drive:][path][filename]",
      "D": "attrib [drive:][path][filename] +R"
    },
    "explanations": {
      "A": "The +R switch sets the read-only attribute on the specified file or path.",
      "B": "attrib does not use /R to set the read-only attribute in this syntax.",
      "C": "The read-only attribute is set with +R, not /R.",
      "D": "The quiz identifies the switch before the target path as the correct command syntax."
    },
    "tip": "Use +R to add Read-only and -R to remove Read-only. CompTIA A+ 220-1202 - NTFS & Share Permissions Page 10"
  },
  {
    "topic": "NTFS Share Permissions",
    "number": 9,
    "question": "In NTFS, inherited permissions from a parent take precedence over explicit permissions applied directly to an object.",
    "answers": [
      "B"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "This reverses NTFS precedence. Explicit permissions applied directly to an object take priority over inherited permissions.",
      "B": "Explicit permissions have higher precedence than inherited permissions, so the statement is false."
    },
    "tip": "Directly assigned explicit permissions outrank inherited permissions. CompTIA A+ 220-1202 - NTFS & Share Permissions Page 11"
  },
  {
    "topic": "NTFS Share Permissions",
    "number": 10,
    "question": "In NTFS, a folder or file moved to another location on the same volume inherits permissions from its new parent folder.",
    "answers": [
      "B"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "A move within the same NTFS volume normally keeps the object’s existing permissions rather than treating it as a newly created object in the destination.",
      "B": "The object retains its original permissions when moved within the same volume, so it does not simply inherit the new parent permissions as stated."
    },
    "tip": "Same-volume move keeps the object; think “retain permissions.” CompTIA A+ 220-1202 - NTFS & Share Permissions Page 12"
  },
  {
    "topic": "NTFS Share Permissions",
    "number": 11,
    "question": "In NTFS, a folder or file copied to another location on the same volume retains its original permissions.",
    "answers": [
      "B"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "A copy creates a new object at the destination, so it normally inherits permissions from the destination parent folder.",
      "B": "Because the copied item is a new object, it inherits the permissions of its new parent rather than retaining the original permission set."
    },
    "tip": "Copy creates a new object, so destination inheritance applies. CompTIA A+ 220-1202 - NTFS & Share Permissions Page 13"
  },
  {
    "topic": "NTFS Share Permissions",
    "number": 12,
    "question": "In NTFS, a file or folder copied or moved to a different volume inherits permissions from its new parent folder.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Across volumes, the destination receives a new object, so it inherits permissions from the destination parent folder.",
      "B": "The source states that copying or moving to a different volume results in inheritance from the new parent."
    },
    "tip": "Different-volume move behaves like copy-and-delete, so destination permissions are inherited. CompTIA A+ 220-1202 - NTFS & Share Permissions Page 14"
  },
  {
    "topic": "NTFS Share Permissions",
    "number": 13,
    "question": "In NTFS, permission propagation occurs when child files and folders inherit permissions applied to their parent folder.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "This accurately describes permission propagation: inheritable parent permissions flow down to child objects according to the configured inheritance rules.",
      "B": "The statement matches the source definition of NTFS permission propagation."
    },
    "tip": "Propagation = parent permissions flowing down to child objects."
  },
  {
    "topic": "OS Boot Methods",
    "number": 1,
    "question": "Which action is NOT required when preparing a USB drive to serve as bootable installation media for an operating system?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Formatting the USB drive with a supported file system",
      "B": "Creating a bootable partition on the USB drive",
      "C": "Writing the operating system installation image to the USB",
      "D": "Installing the operating system onto the USB drive"
    },
    "explanations": {
      "A": "The USB media needs a usable file system so the firmware and installation tools can access the boot and setup files.",
      "B": "The installation media must be prepared so the computer can recognize it as bootable media.",
      "C": "The OS installation files must be placed on the USB in a bootable form before it can launch setup.",
      "D": "The USB only needs to contain bootable installation media. The operating system itself is normally installed onto the target computer's storage drive, not onto the installer USB."
    },
    "tip": "A bootable installer contains the OS setup files; it is not the same thing as installing the full OS onto the USB. CompTIA A+ 220-1202 - OS Boot Methods Page 3"
  },
  {
    "topic": "OS Boot Methods",
    "number": 2,
    "question": "Which solution is widely used in enterprise environments for deploying operating systems at scale, particularly when physical media is not feasible?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "NAS",
      "B": "RDP",
      "C": "PXE",
      "D": "SAN"
    },
    "explanations": {
      "A": "Network-attached storage provides shared file storage, but it is not itself the boot technology used to start OS deployment over the network.",
      "B": "Remote Desktop Protocol provides remote access to an existing Windows session and does not perform preboot OS deployment.",
      "C": "PXE allows computers to boot from the network and retrieve deployment resources, making it useful for centralized, large-scale OS installation.",
      "D": "A storage area network provides block-level network storage, but it is not the standard network boot mechanism described."
    },
    "tip": "PXE = Preboot Execution Environment; use it when a computer must boot and begin deployment from the network. CompTIA A+ 220-1202 - OS Boot Methods Page 4"
  },
  {
    "topic": "OS Boot Methods",
    "number": 3,
    "question": "What are the advantages of using SSDs for OS installations compared with traditional hard drives? (Select 3 answers)",
    "answers": [
      "B",
      "C",
      "D"
    ],
    "options": {
      "A": "Lower cost per gigabyte",
      "B": "Improved file transfer speeds",
      "C": "Much quicker boot times",
      "D": "Faster application loading",
      "E": "Higher storage capacity"
    },
    "explanations": {
      "A": "Traditional hard drives generally provide a lower cost per gigabyte than SSDs.",
      "B": "SSDs have much faster access and transfer performance because they use flash memory instead of mechanical platters and heads.",
      "C": "Fast random access lets an SSD load operating-system files far more quickly during startup.",
      "D": "Applications launch faster because an SSD can retrieve many small program files with very low access latency.",
      "E": "Hard drives are commonly available at very large capacities for less money; higher capacity is not an inherent SSD advantage."
    },
    "tip": "SSD advantages are speed-related - faster transfers, faster booting, and faster application loading. CompTIA A+ 220-1202 - OS Boot Methods Page 5"
  },
  {
    "topic": "OS Boot Methods",
    "number": 4,
    "question": "Which characteristics describe an internet-based OS installation method? (Select 2 answers)",
    "answers": [
      "C",
      "E"
    ],
    "options": {
      "A": "Optimized for mass deployment with standardized configuration across multiple systems",
      "B": "Uses internal servers to deploy OS images over the local network",
      "C": "Primarily suited for single users, remote workers, or when local network infrastructure is not available",
      "D": "Commonly deployed via PXE/DHCP/TFTP protocols",
      "E": "Relies on external servers, cloud services, or vendor websites for installation files"
    },
    "explanations": {
      "A": "That description fits centrally managed enterprise deployment more closely than an internet-based installation aimed at individual or remote systems.",
      "B": "Internal deployment servers describe a local network imaging environment rather than an internet-based source.",
      "C": "Internet-based installation is useful when a system cannot rely on an organization's internal deployment infrastructure.",
      "D": "PXE, DHCP, and TFTP are associated with local network boot and deployment workflows.",
      "E": "Internet-based installation obtains required files from resources outside the local deployment network."
    },
    "tip": "Internet install = external/cloud source; PXE install = local network deployment infrastructure. CompTIA A+ 220-1202 - OS Boot Methods Page 6"
  },
  {
    "topic": "OS Boot Methods",
    "number": 5,
    "question": "For an internet-based OS installation, what should a technician consider regarding data integrity and security of the downloaded files?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Antivirus signature updates",
      "B": "Local security settings",
      "C": "Software licensing keys",
      "D": "Cryptographic hash values"
    },
    "explanations": {
      "A": "Updated antivirus is useful for system security, but it does not directly prove that a downloaded installation image is authentic and unchanged.",
      "B": "Local policies can protect the computer, but they do not verify the integrity of the downloaded installation file.",
      "C": "A license key controls activation or usage rights and does not validate whether the downloaded file was altered.",
      "D": "A technician can compare the downloaded file's calculated hash with the trusted publisher's hash. A match helps verify that the file was not corrupted or modified."
    },
    "tip": "Verify an OS image with a trusted cryptographic hash before using it. CompTIA A+ 220-1202 - OS Boot Methods Page 7"
  },
  {
    "topic": "OS Boot Methods",
    "number": 6,
    "question": "A technician is preparing an external storage drive to serve as a bootable OS installation medium. What is the primary requirement for the computer to recognize and boot from this drive?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "The operating system must support plug and play detection",
      "B": "The computer's internal storage drives must be disabled through BIOS/UEFI",
      "C": "The BIOS/UEFI boot order must prioritize the external drive",
      "D": "The external drive must be formatted using the exFAT file system"
    },
    "explanations": {
      "A": "Plug and play applies after hardware is detected by an operating system; the machine must boot before the installed OS is running.",
      "B": "Internal drives do not need to be disabled; the firmware only needs to select the external installer as the boot source.",
      "C": "The firmware must be configured to boot from the external device, either through boot order or a one-time boot menu.",
      "D": "Bootability depends on firmware compatibility and properly prepared boot media; exFAT is not a universal requirement."
    },
    "tip": "If bootable media is correct but will not start, check the BIOS/UEFI boot order or one-time boot menu. CompTIA A+ 220-1202 - OS Boot Methods Page 8"
  },
  {
    "topic": "OS Boot Methods",
    "number": 7,
    "question": "Which feature allows a storage drive to be safely removed and replaced while the system remains powered on and operational?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Cold-plugging",
      "B": "Hot spare",
      "C": "Stand-by drive",
      "D": "Hot-swapping"
    },
    "explanations": {
      "A": "Cold-plugging requires the system or device to be powered down before hardware is removed or installed.",
      "B": "A hot spare is an installed standby drive that can automatically replace a failed drive in an array; it does not describe live physical removal and replacement.",
      "C": "A standby drive is a spare or inactive drive, not the name of the live replacement capability.",
      "D": "Hot-swapping allows supported hardware to be removed and replaced without shutting down the entire system."
    },
    "tip": "Hot-swap = replace hardware while powered on; hot spare = standby replacement drive already available to an array. CompTIA A+ 220-1202 - OS Boot Methods Page 9"
  },
  {
    "topic": "OS Boot Methods",
    "number": 8,
    "question": "If an operating system partition on an internal storage drive becomes corrupted and unbootable, personal files stored on that same partition may become inaccessible through normal means and require recovery through external boot media or data recovery tools.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "If the OS partition cannot boot, the files may still physically exist but the normal installed operating system cannot be used to access them. External boot media or recovery tools may be needed.",
      "B": "An unbootable OS can prevent normal access to files stored on the same partition even when the underlying data has not been erased."
    },
    "tip": "Unbootable does not always mean erased; external boot media can provide another way to access or recover the files. CompTIA A+ 220-1202 - OS Boot Methods Page 10"
  },
  {
    "topic": "OS Boot Methods",
    "number": 9,
    "question": "A technician physically installs a brand-new internal storage drive, but it is not yet recognized as usable storage. What should be the first configuration step to make the drive accessible for OS installation?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Format the drive",
      "B": "Partition the drive",
      "C": "Initialize the drive",
      "D": "Assign drive letter"
    },
    "explanations": {
      "A": "Formatting creates a file system, but a new disk normally must first be initialized so the system can establish its partitioning structure.",
      "B": "Partitions are created after the new disk has been initialized.",
      "C": "Initialization prepares the new disk for use by selecting or creating its partition-table structure, such as GPT or MBR.",
      "D": "A drive letter is assigned to a usable volume after the disk has been initialized and partitioned."
    },
    "tip": "New blank disk order: initialize first, then partition/format, then use the volume. CompTIA A+ 220-1202 - OS Boot Methods Page 11"
  },
  {
    "topic": "OS Boot Methods",
    "number": 10,
    "question": "What is the most common use case for a multiboot configuration?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Running multiple operating systems simultaneously",
      "B": "Keeping legacy software operational in a controlled environment",
      "C": "Isolating potentially harmful software away from the main OS",
      "D": "Utilizing different operating systems for specific tasks"
    },
    "explanations": {
      "A": "Multiboot normally runs one installed OS at a time. Running multiple OSs simultaneously is a virtualization use case.",
      "B": "A second OS can support legacy software, but this is not the broad use case selected by the quiz.",
      "C": "Isolation of risky software is better handled with a sandbox or virtual machine.",
      "D": "Multiboot lets a user choose among installed operating systems at startup so each can be used for workloads or applications it handles best."
    },
    "tip": "Multiboot = choose one of several installed operating systems at startup for different tasks. CompTIA A+ 220-1202 - OS Boot Methods Page 12"
  },
  {
    "topic": "OS Boot Methods",
    "number": 11,
    "question": "In a multiboot environment, each operating system must reside on a separate partition or drive to prevent file system conflicts and data corruption between the different OS installations.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Separate partitions or drives give each operating system its own installation space and file-system structures, preventing the installations from overwriting one another.",
      "B": "Installing multiple operating systems into the same normal system partition would create conflicting boot, system, and application files."
    },
    "tip": "Multiboot operating systems need separate installation spaces even though they may share one physical disk. CompTIA A+ 220-1202 - OS Boot Methods Page 13"
  },
  {
    "topic": "OS Boot Methods",
    "number": 12,
    "question": "A user wants to add a Linux distribution to an existing Windows 11 installation to create a multiboot system. What should typically be the next logical step after shrinking the Windows partition to create unallocated space for Linux?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Creating a Windows restore point",
      "B": "Performing a full system backup",
      "C": "Installing the Linux distribution",
      "D": "Reformatting the entire storage drive"
    },
    "explanations": {
      "A": "A restore point is a useful Windows precaution but does not use the newly created unallocated space to establish the Linux side of the multiboot configuration.",
      "B": "A backup is strongly recommended before repartitioning, but the question asks for the next step after the Windows partition has already been shrunk.",
      "C": "With unallocated space available, the Linux installer can create the required Linux partitions and install the second operating system into that space.",
      "D": "Reformatting the whole drive would destroy the existing Windows installation instead of creating a multiboot system."
    },
    "tip": "After making unallocated space for a second OS, boot its installer and install it into that free space."
  },
  {
    "topic": "OS Installation Methods",
    "number": 1,
    "question": "Which OS installation method removes all existing data on the selected target partition?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Live OS installation",
      "B": "In-place upgrade",
      "C": "Clean installation",
      "D": "Repair installation"
    },
    "explanations": {
      "A": "A live OS runs from removable media or another temporary environment and does not inherently erase the target partition.",
      "B": "An in-place upgrade installs a newer OS version while preserving supported user data, applications, and settings.",
      "C": "A clean installation starts with a fresh target partition and removes the previous operating system, applications, settings, and data stored on that selected partition.",
      "D": "A repair installation is intended to repair or replace operating-system components while preserving user data rather than wiping the partition."
    },
    "tip": "Clean install = start fresh; back up anything important on the target partition first. CompTIA A+ 220-1202 - OS Installation Methods Page 3"
  },
  {
    "topic": "OS Installation Methods",
    "number": 2,
    "question": "Which method installs a newer OS version over an existing older version without erasing user data, applications, and settings?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Image deployment",
      "B": "Remote network installation",
      "C": "In-place upgrade",
      "D": "Repair installation"
    },
    "explanations": {
      "A": "Image deployment applies a prepared system image and is commonly used for standardized installations rather than preserving an existing user environment in place.",
      "B": "Remote network installation describes where installation files come from, not specifically an upgrade that preserves the current environment.",
      "C": "An in-place upgrade replaces the older OS with a newer supported version while retaining compatible applications, user files, and settings.",
      "D": "A repair installation fixes an existing OS rather than moving it to a newer OS version."
    },
    "tip": "In-place upgrade = newer OS, same user environment. CompTIA A+ 220-1202 - OS Installation Methods Page 4"
  },
  {
    "topic": "OS Installation Methods",
    "number": 3,
    "question": "In enterprise environments, setting up operating systems across many devices using a single, consistent configuration template is referred to as:",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Repair installation",
      "B": "In-place upgrade",
      "C": "Remote network installation",
      "D": "Image deployment",
      "E": "Unattended installation",
      "F": "Internet-based installation"
    },
    "explanations": {
      "A": "Repair installation fixes an existing operating system and is not a mass-deployment method.",
      "B": "An in-place upgrade updates an existing installation rather than cloning a standardized configuration to many systems.",
      "C": "Remote network installation delivers setup over a network, but it does not by itself mean every device receives one standardized prepared configuration.",
      "D": "Image deployment uses a prepared OS image containing a standardized configuration that can be applied repeatedly to many computers.",
      "E": "An unattended installation automates setup input, but the defining feature in this question is deploying one consistent image/template across many devices.",
      "F": "Internet-based installation retrieves setup resources from external or cloud sources and is not specifically the standardized imaging process described."
    },
    "tip": "Image deployment = one prepared configuration copied consistently to many computers. CompTIA A+ 220-1202 - OS Installation Methods Page 5"
  },
  {
    "topic": "OS Installation Methods",
    "number": 4,
    "question": "An IT team must install an OS remotely on new desktops with no pre-installed OS or removable media. A centralized OS image server already uses DHCP and TFTP to deliver boot instructions. Which installation method should they use?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Unattended installation",
      "B": "Image deployment",
      "C": "Remote network installation",
      "D": "NFS",
      "E": "SMB",
      "F": "WDS"
    },
    "explanations": {
      "A": "Unattended installation removes user prompts, but the scenario specifically describes booting and installing remotely through network infrastructure.",
      "B": "An image is part of the solution, but the question focuses on the method of reaching and installing to machines remotely through DHCP/TFTP.",
      "C": "Remote network installation allows bare or new computers to boot from network infrastructure and receive OS deployment resources without local media.",
      "D": "NFS is a network file-sharing protocol, not the overall OS installation method described.",
      "E": "SMB provides network file and printer sharing and is not the installation method itself.",
      "F": "WDS is a Microsoft deployment service that can support network installation, but the source identifies the general installation method as remote network installation."
    },
    "tip": "No local media + DHCP/TFTP + centralized image = remote network installation. CompTIA A+ 220-1202 - OS Installation Methods Page 6"
  },
  {
    "topic": "OS Installation Methods",
    "number": 5,
    "question": "Diskless workstations must boot from the network every time and retrieve an OS image from a central server. Which technology enables this network boot and OS loading process?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "NFS",
      "B": "SMB",
      "C": "WDS",
      "D": "PXE"
    },
    "explanations": {
      "A": "NFS can provide network-accessible files, but it does not provide the preboot mechanism that starts a diskless client.",
      "B": "SMB is used for network file and printer sharing after a system has networking support; it is not the firmware-level network boot technology.",
      "C": "WDS is a Microsoft deployment service that can use PXE, but PXE is the specific technology that lets the client initiate a network boot.",
      "D": "PXE lets a computer boot using its network interface before a local operating system is available and obtain boot resources from network servers."
    },
    "tip": "PXE starts the computer from the network before a local OS loads. CompTIA A+ 220-1202 - OS Installation Methods Page 7"
  },
  {
    "topic": "OS Installation Methods",
    "number": 6,
    "question": "Which installation method requires no manual input at any stage, fully automating OS deployment across multiple systems?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Zero-touch deployment",
      "B": "Remote network installation",
      "C": "Image-based deployment",
      "D": "Lite-touch installation"
    },
    "explanations": {
      "A": "Zero-touch deployment is designed to complete provisioning and OS deployment automatically without requiring a technician or user to respond to setup prompts.",
      "B": "A network installation can still require technician choices or setup input, so remote delivery alone does not guarantee zero interaction.",
      "C": "Applying an image can be highly automated, but image-based deployment does not inherently mean there is no manual input at any stage.",
      "D": "Lite-touch deployment intentionally requires some limited technician interaction, making it different from zero-touch deployment."
    },
    "tip": "Zero-touch = zero technician input; lite-touch = a small amount of technician input. CompTIA A+ 220-1202 - OS Installation Methods Page 8"
  },
  {
    "topic": "OS Installation Methods",
    "number": 7,
    "question": "Which built-in solution can restore an operating system to its factory settings without external media?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Disk imaging",
      "B": "System restore",
      "C": "Recovery partition",
      "D": "Shadow copy"
    },
    "explanations": {
      "A": "Disk imaging creates or applies copies of storage contents, but it is not necessarily the built-in factory-restoration source stored on the computer.",
      "B": "System Restore rolls Windows system files and settings back to a restore point; it does not normally return the entire computer to factory condition.",
      "C": "A recovery partition stores manufacturer or recovery files on the internal drive so the computer can restore the OS without a separate DVD or USB installer.",
      "D": "Shadow copies preserve previous versions or snapshots of files and are not a complete factory-reset installation source."
    },
    "tip": "Recovery partition = factory recovery files stored on the internal drive. CompTIA A+ 220-1202 - OS Installation Methods Page 9"
  },
  {
    "topic": "OS Installation Methods",
    "number": 8,
    "question": "Which statement best describes the outcome of a typical Windows repair installation?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "User applications are removed",
      "B": "User data is deleted",
      "C": "User application settings are reset",
      "D": "User data is preserved"
    },
    "explanations": {
      "A": "A repair installation is intended to repair Windows while preserving the existing user environment when possible, rather than deliberately removing applications.",
      "B": "Deleting user files would defeat the purpose of a repair installation, which aims to fix the OS without a destructive clean install.",
      "C": "Some settings can change depending on the repair method, but resetting all application settings is not the defining outcome identified here.",
      "D": "A typical repair installation replaces or repairs operating-system components while keeping personal data intact."
    },
    "tip": "Repair install = repair Windows while preserving personal files. CompTIA A+ 220-1202 - OS Installation Methods Page 10"
  },
  {
    "topic": "OS Installation Methods",
    "number": 9,
    "question": "During installation on a custom PC, the installer cannot detect the configured RAID array. What is the most appropriate action?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Restart the installation and select a different drive",
      "B": "Update the BIOS firmware to the latest version",
      "C": "Load the appropriate third-party RAID drivers from external media",
      "D": "Replace the RAID controller with a compatible model"
    },
    "explanations": {
      "A": "Selecting another drive does not make the missing RAID controller or array visible to the installer.",
      "B": "Firmware updates can solve compatibility problems, but when the installer specifically lacks RAID support, the direct solution is to supply its storage-controller driver.",
      "C": "The installer needs the correct RAID controller driver to communicate with the controller and recognize the logical RAID volume.",
      "D": "Hardware replacement is unnecessary if the existing controller is supported once its proper installation driver is loaded."
    },
    "tip": "Installer cannot see RAID = load the storage/RAID controller driver. CompTIA A+ 220-1202 - OS Installation Methods Page 11"
  },
  {
    "topic": "OS Installation Methods",
    "number": 10,
    "question": "During OS installation on a newly assembled workstation, the installer cannot detect the installed NVMe SSD even though the physical connection is secure. What should the technician do?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Update the workstation's BIOS/UEFI firmware",
      "B": "Restart the installation and select a different drive",
      "C": "Load the appropriate third-party NVMe drivers from external media",
      "D": "Verify the boot order in the system's BIOS/UEFI settings"
    },
    "explanations": {
      "A": "Firmware compatibility can matter, but the source identifies the missing storage driver as the direct installation-time solution.",
      "B": "The intended NVMe drive cannot be selected until the installer can detect it.",
      "C": "If the installer lacks the necessary NVMe or storage-controller driver, loading that driver allows setup to communicate with and detect the SSD.",
      "D": "Boot order controls which device starts first; it does not normally determine whether the OS installer can see an attached NVMe storage device."
    },
    "tip": "Storage is physically present but missing from Setup = check for the required storage-controller/NVMe driver."
  },
  {
    "topic": "Physical Security Concepts",
    "number": 1,
    "question": "What is the primary function of bollards as a physical security control?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "To prevent tailgating through secure areas",
      "B": "To deter and physically stop vehicle intrusions",
      "C": "To prevent unauthorized pedestrian entry",
      "D": "To restrict both people and cars simultaneously"
    },
    "explanations": {
      "A": "Tailgating is controlled by measures such as mantraps, guards, and controlled doors; bollards are designed mainly to stop vehicles.",
      "B": "Bollards are strong posts placed near buildings or restricted areas to block or slow unauthorized vehicles and reduce vehicle-ramming risk.",
      "C": "Pedestrian access is more directly controlled by doors, turnstiles, fencing, badges, or guards.",
      "D": "Bollards can guide pedestrians, but their primary security purpose is vehicle restriction rather than simultaneous access control for both groups."
    },
    "tip": "Bollards protect buildings and restricted areas from vehicle access. CompTIA A+ 220-1202 - Physical Security Concepts Page 3"
  },
  {
    "topic": "Physical Security Concepts",
    "number": 2,
    "question": "An access control vestibule, also known as a mantrap, can use two controlled doors so a person remains between them until authentication is accepted.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "This matches the quiz description: the vestibule controls passage between two doors and helps prevent unauthorized entry or tailgating.",
      "B": "The statement accurately describes the physical access-control function of a mantrap."
    },
    "tip": "Mantrap = one controlled person between two doors. CompTIA A+ 220-1202 - Physical Security Concepts Page 4"
  },
  {
    "topic": "Physical Security Concepts",
    "number": 3,
    "question": "A facility uses RFID badge readers at entry doors. What type of security measure is this?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Logical security control",
      "B": "Administrative security control",
      "C": "Physical security control",
      "D": "Technical security control"
    },
    "explanations": {
      "A": "Logical controls protect access to systems, applications, or data rather than a physical doorway.",
      "B": "Administrative controls are policies and procedures rather than the physical access mechanism described.",
      "C": "Badge readers regulate entry to a physical location, making them a physical access security control.",
      "D": "Although electronics are involved, the quiz classifies the measure by its purpose: controlling physical access to a facility."
    },
    "tip": "If it controls entry to a room or building, think physical security. CompTIA A+ 220-1202 - Physical Security Concepts Page 5"
  },
  {
    "topic": "Physical Security Concepts",
    "number": 4,
    "question": "What type of physical security control does video surveillance represent?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Preventive control",
      "B": "Compensating control",
      "C": "Detective control",
      "D": "Corrective control"
    },
    "explanations": {
      "A": "Cameras may discourage behavior, but their primary classification here is detecting and recording activity.",
      "B": "A compensating control substitutes for another unavailable control; that is not the primary role of surveillance.",
      "C": "Video surveillance observes and records events so unauthorized or suspicious activity can be detected and investigated.",
      "D": "Corrective controls act after an incident to restore or remediate conditions rather than primarily observe events."
    },
    "tip": "Cameras mainly detect and document what happened. CompTIA A+ 220-1202 - Physical Security Concepts Page 6"
  },
  {
    "topic": "Physical Security Concepts",
    "number": 5,
    "question": "Which physical security measure often works with motion sensors to provide real-time alerts of unauthorized activity?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Proximity readers",
      "B": "Smart locks",
      "C": "Perimeter lighting",
      "D": "Alarm systems"
    },
    "explanations": {
      "A": "Proximity readers authenticate access tokens but are not primarily an alerting system.",
      "B": "Smart locks control door access; they do not by themselves provide the alarm function described.",
      "C": "Lighting improves visibility and deterrence but does not generate the real-time alerts requested.",
      "D": "Alarm systems can receive motion-sensor triggers and immediately alert personnel or monitoring services to possible intrusion."
    },
    "tip": "Sensor detects movement; alarm system turns that detection into an alert. CompTIA A+ 220-1202 - Physical Security Concepts Page 7"
  },
  {
    "topic": "Physical Security Concepts",
    "number": 6,
    "question": "Which security controls are designed to physically prevent unauthorized access? (Select 2)",
    "answers": [
      "B",
      "E"
    ],
    "options": {
      "A": "Motion sensors",
      "B": "Door locks",
      "C": "Video surveillance",
      "D": "Alarm systems",
      "E": "Equipment locks"
    },
    "explanations": {
      "A": "Motion sensors detect movement but normally do not physically block entry.",
      "B": "Door locks create a physical barrier that prevents unauthorized users from opening secured doors.",
      "C": "Video surveillance observes and records activity rather than physically blocking access.",
      "D": "Alarms notify or warn when activity occurs but do not physically stop someone from entering.",
      "E": "Equipment locks physically secure devices or hardware against unauthorized removal or access."
    },
    "tip": "Preventive physical controls create an actual barrier, such as a lock. CompTIA A+ 220-1202 - Physical Security Concepts Page 8"
  },
  {
    "topic": "Physical Security Concepts",
    "number": 7,
    "question": "A company wants both deterrence and an on-site, in-person response to suspicious activity. What should it implement?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "CCTV monitoring",
      "B": "Alarm system with motion sensors",
      "C": "Security guards",
      "D": "Intrusion detection system"
    },
    "explanations": {
      "A": "CCTV provides surveillance and evidence, but a camera alone cannot physically respond on site.",
      "B": "An alarm can detect and notify, but it does not itself provide an in-person response.",
      "C": "Visible guards deter suspicious behavior and can immediately investigate or respond in person.",
      "D": "An intrusion detection system detects suspicious activity but requires people or another response process to act on the alert."
    },
    "tip": "Guards can both discourage an incident and physically respond to it. CompTIA A+ 220-1202 - Physical Security Concepts Page 9"
  },
  {
    "topic": "Physical Security Concepts",
    "number": 8,
    "question": "Which physical security control best reduces unauthorized pedestrian and vehicle access across an entire restricted perimeter?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Bollards",
      "B": "Turnstiles",
      "C": "Security guards",
      "D": "Fencing"
    },
    "explanations": {
      "A": "Bollards are strong vehicle barriers but do not normally secure an entire perimeter against pedestrians.",
      "B": "Turnstiles control pedestrian flow at specific entrances but do not protect a whole perimeter or stop vehicles.",
      "C": "Guards can monitor and respond, but they do not create the continuous physical perimeter requested.",
      "D": "Fencing creates a continuous boundary that restricts pedestrian access and can also impede vehicle entry depending on its design."
    },
    "tip": "Fence = perimeter boundary; bollard = focused vehicle barrier. CompTIA A+ 220-1202 - Physical Security Concepts Page 10"
  },
  {
    "topic": "Physical Security Concepts",
    "number": 9,
    "question": "Which characteristics describe a key fob? (Select 3)",
    "answers": [
      "A",
      "B",
      "F"
    ],
    "options": {
      "A": "Contains a simple embedded chip with a unique identifier or code",
      "B": "Often used as a simple, single-purpose physical access security token",
      "C": "Credit card-sized, flat plastic card",
      "D": "Multi-purpose use for physical and logical access, identity, and finance",
      "E": "Contains an embedded chip that can perform complex encryption and data processing",
      "F": "Small, portable plastic device, often attached to a keyring"
    },
    "explanations": {
      "A": "Access-control key fobs commonly carry a simple RFID or proximity identifier that a reader recognizes.",
      "B": "A key fob is commonly dedicated to opening controlled doors or gates.",
      "C": "That physical form describes an access badge or smart card rather than a typical key fob.",
      "D": "That broader functionality is characteristic of smart cards.",
      "E": "Complex onboard processing is associated more strongly with smart cards than simple key fobs.",
      "F": "This is the typical physical form of an access key fob."
    },
    "tip": "Key fob = small keyring token with a simple access identifier. CompTIA A+ 220-1202 - Physical Security Concepts Page 11"
  },
  {
    "topic": "Physical Security Concepts",
    "number": 10,
    "question": "Which features apply to smart cards? (Select 3)",
    "answers": [
      "C",
      "D",
      "F"
    ],
    "options": {
      "A": "Contains a simple embedded chip with a unique identifier or code",
      "B": "Small, portable plastic device, often attached to a keyring",
      "C": "Contains an embedded chip that can perform complex functions like encryption and data processing",
      "D": "Multi-purpose use for both physical and logical access, identity, and finance",
      "E": "Often used as a simple, single-purpose physical access security token",
      "F": "Credit card-sized, flat plastic card"
    },
    "explanations": {
      "A": "A simple identifier-only token better describes a basic proximity key fob in this quiz.",
      "B": "That form factor describes a key fob.",
      "C": "Smart-card chips can securely process data and perform cryptographic operations.",
      "D": "Smart cards can support several applications, including facility access, computer authentication, identification, and payment.",
      "E": "That description fits a basic key fob more closely than a multi-function smart card.",
      "F": "Smart cards commonly use the familiar flat card form factor with an embedded chip."
    },
    "tip": "Smart card = card-sized, intelligent chip, multiple security uses. CompTIA A+ 220-1202 - Physical Security Concepts Page 12"
  },
  {
    "topic": "Physical Security Concepts",
    "number": 11,
    "question": "Employees unlock doors by holding their smartphone near a reader. What type of security measure is this?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Biometric authentication",
      "B": "Mobile digital key",
      "C": "Two-factor authentication",
      "D": "Hardware security token"
    },
    "explanations": {
      "A": "Biometrics authenticate using a body or behavioral characteristic, not simply the phone presented to a reader.",
      "B": "A mobile digital key stores an electronic access credential on a smartphone and communicates with a compatible door reader.",
      "C": "The scenario describes one access credential and does not state that two independent authentication factors are required.",
      "D": "A dedicated hardware token is a separate device; the quiz specifically identifies the smartphone credential as a mobile digital key."
    },
    "tip": "Phone used like an access badge = mobile digital key. CompTIA A+ 220-1202 - Physical Security Concepts Page 13"
  },
  {
    "topic": "Physical Security Concepts",
    "number": 12,
    "question": "A locked cabinet with a corresponding sign-out log is a standard procedure to maintain accountability and tracking for:",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Physical keys",
      "B": "Key fobs",
      "C": "Smart cards",
      "D": "Access badges"
    },
    "explanations": {
      "A": "Physical keys need controlled storage and a record of who checked them out so access can be traced and missing keys identified.",
      "B": "Electronic fobs can often be individually assigned and electronically tracked; the quiz specifically associates the cabinet/sign-out procedure with physical keys.",
      "C": "Smart cards are normally issued to individuals and managed through an access-control system rather than a traditional key cabinet.",
      "D": "Badges are generally assigned credentials; a locked key cabinet and manual sign-out log is the traditional control for physical keys."
    },
    "tip": "Physical keys need a key cabinet plus a checkout record. CompTIA A+ 220-1202 - Physical Security Concepts Page 14"
  },
  {
    "topic": "Physical Security Concepts",
    "number": 13,
    "question": "Biometrics can use both physiological characteristics and behavioral traits for identification and access control.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The quiz explicitly includes physical traits such as fingerprints and retina patterns as well as behavioral traits such as voice, gait, and keystroke dynamics.",
      "B": "Biometric systems are not limited to static body characteristics; behavioral characteristics can also be used."
    },
    "tip": "Biometrics can measure what you are physically or how you behave. CompTIA A+ 220-1202 - Physical Security Concepts Page 15"
  },
  {
    "topic": "Physical Security Concepts",
    "number": 14,
    "question": "A security system uses infrared light to scan the unique blood-vessel pattern at the back of the eye. What biometric technology is this?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Iris scanner",
      "B": "Facial recognition technology",
      "C": "Eye-tracking authentication",
      "D": "Retina scanner"
    },
    "explanations": {
      "A": "Iris recognition analyzes the colored ring around the pupil, not the blood-vessel pattern at the back of the eye.",
      "B": "Facial recognition analyzes facial features rather than internal eye vasculature.",
      "C": "Eye tracking measures gaze or eye movement, not retinal blood-vessel patterns.",
      "D": "A retina scanner identifies the distinctive blood-vessel pattern in the retina at the back of the eye, commonly using infrared light."
    },
    "tip": "Retina = blood vessels at the back of the eye; iris = colored ring at the front. CompTIA A+ 220-1202 - Physical Security Concepts Page 16"
  },
  {
    "topic": "Physical Security Concepts",
    "number": 15,
    "question": "Which biometric technology is widely used for mobile device authentication because of low cost and ease of integration?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Fingerprint scanner",
      "B": "Retina scanner",
      "C": "Voice recognition",
      "D": "Palm print scanner"
    },
    "explanations": {
      "A": "Fingerprint sensors are compact, relatively inexpensive, and widely integrated into phones and other mobile devices.",
      "B": "Retina scanning requires specialized optical hardware and is less convenient and more expensive for everyday mobile devices.",
      "C": "Voice can authenticate users, but environmental noise and replay concerns make it less common as the low-cost integrated biometric highlighted here.",
      "D": "Palm scanners generally require a larger sensing area and are less common in mobile-device authentication."
    },
    "tip": "Fingerprint readers are common because the sensor is small and inexpensive. CompTIA A+ 220-1202 - Physical Security Concepts Page 17"
  },
  {
    "topic": "Physical Security Concepts",
    "number": 16,
    "question": "A corporation needs a strong biometric control for a restricted server farm that is difficult to spoof. Which method is the best choice among the listed options?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Fingerprint scanner",
      "B": "Voiceprint authentication system",
      "C": "Facial recognition terminal",
      "D": "Palm print scanner"
    },
    "explanations": {
      "A": "Fingerprint authentication is convenient and common, but the quiz identifies a stronger option for this high-security facility.",
      "B": "Voice recognition can be affected by noise and can face replay-attack risks if used alone.",
      "C": "Facial recognition is convenient but can vary in resistance to presentation/spoofing attacks depending on implementation.",
      "D": "The quiz selects palm print scanning as the strongest listed physical access method for the restricted server-farm scenario."
    },
    "tip": "For high-security physical access, compare spoof resistance and the richness of the biometric pattern. CompTIA A+ 220-1202 - Physical Security Concepts Page 18"
  },
  {
    "topic": "Physical Security Concepts",
    "number": 17,
    "question": "Which technology uses biometric data to identify or verify a person based on facial features?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "FAR",
      "B": "AFIS",
      "C": "FRT",
      "D": "FRR"
    },
    "explanations": {
      "A": "FAR means false acceptance rate, a biometric performance metric rather than a recognition technology.",
      "B": "AFIS is an automated fingerprint identification system and works with fingerprints, not facial features.",
      "C": "FRT stands for facial recognition technology and analyzes facial characteristics to identify or verify a person.",
      "D": "FRR means false rejection rate, another biometric accuracy metric rather than a technology."
    },
    "tip": "FRT = Facial Recognition Technology; FAR and FRR are error-rate measurements. CompTIA A+ 220-1202 - Physical Security Concepts Page 19"
  },
  {
    "topic": "Physical Security Concepts",
    "number": 18,
    "question": "Voice recognition can identify users from vocal characteristics, can work remotely, and may be affected by noise, voice changes, or replay attacks.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "This matches the quiz description of voiceprint recognition, including its convenience and its limitations.",
      "B": "The statement accurately summarizes the characteristics provided in the source."
    },
    "tip": "Voice biometrics are convenient, but recordings and noisy audio can weaken reliability. CompTIA A+ 220-1202 - Physical Security Concepts Page 20"
  },
  {
    "topic": "Physical Security Concepts",
    "number": 19,
    "question": "What is the primary role of lighting as a physical access security measure?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Detection",
      "B": "Surveillance",
      "C": "Prevention",
      "D": "Deterrence"
    },
    "explanations": {
      "A": "Lighting helps people and cameras see activity, but it does not itself detect an event in the way a sensor does.",
      "B": "Cameras and personnel perform surveillance; lighting supports them by improving visibility.",
      "C": "Lighting may reduce opportunity, but its main classification in this quiz is discouraging unwanted behavior.",
      "D": "Well-lit areas make intruders more visible and increase perceived risk of being observed, discouraging unauthorized activity."
    },
    "tip": "Security lighting makes intruders easier to see, which helps deter them. CompTIA A+ 220-1202 - Physical Security Concepts Page 21"
  },
  {
    "topic": "Physical Security Concepts",
    "number": 20,
    "question": "In a multi-layered physical security system, where would a magnetometer typically be placed?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "At the final access point, just before the secure room",
      "B": "On the perimeter fence to detect intruders",
      "C": "At the building's main entrance as a primary screening point",
      "D": "Inside the secure room to prevent theft"
    },
    "explanations": {
      "A": "A final access point may use additional controls, but the quiz identifies the magnetometer as an earlier primary screening control.",
      "B": "Fence sensors can detect climbing or cutting; a magnetometer screens people for metal objects.",
      "C": "A magnetometer is typically used near the main entrance to screen people for metal objects before they proceed deeper into the facility.",
      "D": "Screening after a person has already entered the secure room would be too late for the primary access-control purpose described."
    },
    "tip": "Magnetometer = metal screening early at the main controlled entrance."
  },
  {
    "topic": "Regulated Data",
    "number": 1,
    "question": "The purpose of PCI DSS is to provide protection for:",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Personal health information",
      "B": "Bank account credentials",
      "C": "Intellectual property and trade secrets",
      "D": "Credit cardholder data"
    },
    "explanations": {
      "A": "Health information is protected by healthcare privacy and security requirements such as HIPAA, not primarily by PCI DSS.",
      "B": "Bank account credentials are sensitive financial information, but PCI DSS is specifically focused on payment card account and cardholder data.",
      "C": "Intellectual property and trade secrets require organizational and legal protections, but they are outside the specific scope of PCI DSS.",
      "D": "PCI DSS establishes security requirements for organizations that store, process, or transmit payment card data, helping protect cardholder information from theft and misuse."
    },
    "tip": "PCI DSS = payment card security, especially protecting credit cardholder data. CompTIA A+ 220-1202 - Regulated Data Page 3"
  },
  {
    "topic": "Regulated Data",
    "number": 2,
    "question": "Examples of government-issued identifiers include: (Select all that apply)",
    "answers": [
      "A",
      "B",
      "D",
      "E"
    ],
    "options": {
      "A": "Driver's license number",
      "B": "Passport number",
      "C": "Medical record number",
      "D": "Taxpayer identification number",
      "E": "Social security number"
    },
    "explanations": {
      "A": "A driver's license number is assigned by a government licensing authority and can uniquely identify the license holder.",
      "B": "A passport number is issued by a national government as part of an official travel and identity document.",
      "C": "A medical record number is assigned by a healthcare provider or health system, not by a government identity-issuing authority.",
      "D": "A taxpayer identification number is issued or administered by a government tax authority for tax identification purposes.",
      "E": "A Social Security number is a government-issued identifier used for Social Security and other official identification purposes in the United States."
    },
    "tip": "Government-issued identifiers come from official agencies - think license, passport, tax ID, and Social Security number. CompTIA A+ 220-1202 - Regulated Data Page 4"
  },
  {
    "topic": "Regulated Data",
    "number": 3,
    "question": "Which of the following acronyms refers to any type of information pertaining to an individual that can be used to uniquely identify that person?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "PHI",
      "B": "UID",
      "C": "PII",
      "D": "SSN",
      "E": "PFI"
    },
    "explanations": {
      "A": "PHI means Protected Health Information. It is health-related information associated with an identifiable person, so it is a more specific category than the general term requested.",
      "B": "UID generally means unique identifier. It can identify an account, object, or user, but it is not the standard acronym for the broad category of personal identifying information.",
      "C": "PII means Personally Identifiable Information and refers to information that can identify a specific individual, either by itself or when combined with other identifying data.",
      "D": "SSN means Social Security number. An SSN is one example of PII, not the name for the entire category.",
      "E": "PFI is not the standard acronym used in this quiz for the broad category of information that identifies an individual."
    },
    "tip": "PII is the broad category; an SSN, driver's license number, and similar identifiers are examples inside that category. CompTIA A+ 220-1202 - Regulated Data Page 5"
  },
  {
    "topic": "Regulated Data",
    "number": 4,
    "question": "The US Health Insurance Portability and Accountability Act (HIPAA) provides privacy protection for: (Select best answer)",
    "answers": [
      "C"
    ],
    "options": {
      "A": "PII",
      "B": "CUI",
      "C": "PHI"
    },
    "explanations": {
      "A": "PII is a broad category of identifying information. HIPAA specifically protects identifiable health information handled by covered healthcare entities and their business associates.",
      "B": "CUI means Controlled Unclassified Information and is a U.S. government information-handling category, not the specific healthcare information category protected by HIPAA.",
      "C": "PHI means Protected Health Information. HIPAA establishes privacy and security requirements for identifiable health information within its regulated healthcare context."
    },
    "tip": "HIPAA -> healthcare -> PHI. CompTIA A+ 220-1202 - Regulated Data Page 6"
  },
  {
    "topic": "Regulated Data",
    "number": 5,
    "question": "Which type of policy defines the required timeframe for the preservation of regulated data prior to its permanent disposal?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Data protection policy",
      "B": "Data classification policy",
      "C": "Data backup policy",
      "D": "Data retention policy"
    },
    "explanations": {
      "A": "A data protection policy explains how information should be secured against unauthorized access, loss, or misuse, but it does not primarily define how long records must be kept.",
      "B": "A classification policy groups information by sensitivity or handling requirements, such as public, confidential, or restricted.",
      "C": "A backup policy defines how and when recoverable copies of data are created and maintained; it does not establish the official preservation period before disposal.",
      "D": "A data retention policy specifies how long different categories of information must be preserved and when they may be permanently deleted or destroyed."
    },
    "tip": "Retention answers 'How long must we keep this data before it can be destroyed?'"
  },
  {
    "topic": "Remote Access Technologies",
    "number": 1,
    "question": "A technician needs to enable full graphical remote control of a Windows 11 Pro workstation for troubleshooting from another Windows device. Which built-in remote access method is the most appropriate?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "SSH",
      "B": "VNC",
      "C": "WinRM",
      "D": "RDP"
    },
    "explanations": {
      "A": "SSH is primarily used for secure command-line remote administration rather than full Windows graphical desktop control.",
      "B": "VNC can provide graphical remote control, but it is not the built-in Windows method identified by this question.",
      "C": "Windows Remote Management is designed for remote management and command execution, not a full interactive graphical desktop session.",
      "D": "Remote Desktop Protocol is Microsoft's built-in technology for remotely accessing and controlling the graphical desktop of supported Windows editions such as Windows 11 Pro."
    },
    "tip": "Need the full Windows desktop remotely? Think RDP. CompTIA A+ 220-1202 - Remote Access Technologies Page 3"
  },
  {
    "topic": "Remote Access Technologies",
    "number": 2,
    "question": "A field technician at a client site needs to securely access internal company servers and shared folders from an untrusted Wi-Fi network. Which remote access method best addresses this requirement?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "RDP",
      "B": "SSH",
      "C": "VPN",
      "D": "VNC"
    },
    "explanations": {
      "A": "RDP provides remote desktop access to a host, but it does not by itself create the protected network tunnel needed for broad access to internal company resources.",
      "B": "SSH securely accesses specific systems and command-line services, but it is not the general private-network connection described.",
      "C": "A VPN creates an encrypted tunnel across the untrusted network, allowing the technician to securely reach authorized internal company resources.",
      "D": "VNC provides remote graphical control and does not itself provide a secure tunnel to multiple internal network resources."
    },
    "tip": "Secure access to an internal network across public Wi-Fi = VPN. CompTIA A+ 220-1202 - Remote Access Technologies Page 4"
  },
  {
    "topic": "Remote Access Technologies",
    "number": 3,
    "question": "A technician needs to remotely control a Linux workstation's graphical desktop from a Windows laptop. Which remote access method should the technician use to accomplish this task?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "VNC",
      "B": "RDP",
      "C": "WinRM",
      "D": "SSH"
    },
    "explanations": {
      "A": "VNC is a cross-platform remote desktop technology that can display and control a Linux graphical desktop from another operating system such as Windows.",
      "B": "RDP is strongly associated with Microsoft remote desktop access; the source identifies VNC for this cross-platform Linux graphical-control scenario.",
      "C": "WinRM is a Windows remote-management protocol and is not intended for controlling a Linux graphical desktop.",
      "D": "SSH is ideal for secure command-line administration, but standard SSH does not provide the full graphical desktop control requested."
    },
    "tip": "Cross-platform graphical desktop control often points to VNC. CompTIA A+ 220-1202 - Remote Access Technologies Page 5"
  },
  {
    "topic": "Remote Access Technologies",
    "number": 4,
    "question": "A technician needs to securely manage a remote Linux server using a command-line interface over the internet. Which remote access technology should be used?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "IPsec",
      "B": "Telnet",
      "C": "SSH",
      "D": "rlogin"
    },
    "explanations": {
      "A": "IPsec secures IP network traffic, but it is not itself the standard interactive remote command-line administration service for Linux.",
      "B": "Telnet provides remote terminal access but sends traffic without the strong encryption expected for secure internet administration.",
      "C": "Secure Shell provides encrypted remote command-line access and is the standard choice for securely administering Linux servers over untrusted networks.",
      "D": "rlogin is a legacy remote-login protocol that lacks the modern security protections provided by SSH."
    },
    "tip": "Secure Linux command line = SSH. CompTIA A+ 220-1202 - Remote Access Technologies Page 6"
  },
  {
    "topic": "Remote Access Technologies",
    "number": 5,
    "question": "Which of the terms listed below refers to a general category of software platforms designed for the remote monitoring, management, maintenance, and support of client computers, servers, and networks?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "EDR",
      "B": "RMM",
      "C": "VDI",
      "D": "MDM"
    },
    "explanations": {
      "A": "Endpoint Detection and Response focuses on detecting, investigating, and responding to endpoint security threats rather than general IT maintenance and support.",
      "B": "Remote Monitoring and Management platforms centralize monitoring, maintenance, administration, and support functions for remote endpoints and networks.",
      "C": "Virtual Desktop Infrastructure hosts desktop environments centrally for users; it is not the general category for remotely managing fleets of client systems.",
      "D": "Mobile Device Management focuses on administering mobile devices and their policies rather than the broader computers, servers, and network support described."
    },
    "tip": "RMM = remotely monitor and manage many IT systems from one platform. CompTIA A+ 220-1202 - Remote Access Technologies Page 7"
  },
  {
    "topic": "Remote Access Technologies",
    "number": 6,
    "question": "Which of the following is an open-source remote desktop protocol designed for virtual machine access?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "WinRM",
      "B": "VNC",
      "C": "DaaS",
      "D": "SPICE",
      "E": "PCoIP"
    },
    "explanations": {
      "A": "WinRM is Microsoft's remote-management protocol for Windows administration, not an open-source VM display protocol.",
      "B": "VNC is a remote framebuffer technology used for graphical desktop control, but the source identifies SPICE for virtual-machine access.",
      "C": "Desktop as a Service is a cloud delivery model for virtual desktops, not a remote desktop protocol.",
      "D": "SPICE is an open-source remote display protocol designed for interacting with virtualized desktop environments and virtual machines.",
      "E": "PCoIP is a remote display protocol, but it is not the open-source VM protocol identified by the source."
    },
    "tip": "SPICE is closely associated with remote display access to virtual machines. CompTIA A+ 220-1202 - Remote Access Technologies Page 8"
  },
  {
    "topic": "Remote Access Technologies",
    "number": 7,
    "question": "A system administrator needs to execute a PowerShell script on multiple remote Windows workstations without opening a graphical session on each machine. Which protocol should be used?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "SSH",
      "B": "WinRM",
      "C": "Telnet"
    },
    "explanations": {
      "A": "SSH can support remote command execution, but the Windows-native remote management protocol identified by this question is WinRM.",
      "B": "Windows Remote Management provides the underlying remote-management capability used for PowerShell remoting, allowing commands and scripts to run without a graphical desktop session.",
      "C": "Telnet is an insecure legacy terminal protocol and is not the standard Windows PowerShell remoting mechanism."
    },
    "tip": "PowerShell remoting on Windows commonly uses WinRM. CompTIA A+ 220-1202 - Remote Access Technologies Page 9"
  },
  {
    "topic": "Remote Access Technologies",
    "number": 8,
    "question": "Pair each remote access tool category with its matching software examples.",
    "answers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "options": {
      "A": "Screen-sharing software -> TeamViewer, AnyDesk, GoToMyPC",
      "B": "Videoconferencing software -> Zoom, Microsoft Teams, Google Meet",
      "C": "File transfer software -> Dropbox, Google Drive, FileZilla",
      "D": "Desktop management software -> ManageEngine Endpoint Central, Microsoft Intune"
    },
    "explanations": {
      "A": "These products are used to view and control remote computer desktops, matching the screen-sharing category.",
      "B": "These applications provide online meetings with audio, video, and screen-sharing collaboration.",
      "C": "These tools are used to move, synchronize, or transfer files between systems or locations.",
      "D": "These platforms centrally administer endpoints, applications, configurations, and device policies."
    },
    "tip": "Identify the main job of the tool: control a screen, hold a meeting, move files, or centrally manage endpoints. CompTIA A+ 220-1202 - Remote Access Technologies Page 10"
  },
  {
    "topic": "Remote Access Technologies",
    "number": 9,
    "question": "Which default TCP port must be restricted or managed on a firewall to prevent unauthorized RDP connections?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Port 513",
      "B": "Port 3389",
      "C": "Port 22",
      "D": "Port 5900"
    },
    "explanations": {
      "A": "TCP 513 is historically associated with rlogin and is not the default RDP port.",
      "B": "RDP uses TCP port 3389 by default, so firewall exposure of this port must be carefully controlled.",
      "C": "TCP 22 is the standard port for SSH.",
      "D": "TCP 5900 is commonly associated with VNC remote desktop connections."
    },
    "tip": "RDP = 3389, SSH = 22, VNC commonly = 5900. CompTIA A+ 220-1202 - Remote Access Technologies Page 11"
  },
  {
    "topic": "Remote Access Technologies",
    "number": 10,
    "question": "Which practice best mitigates the risk of unauthorized VPN access?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Requiring multifactor authentication for VPN logins",
      "B": "Enabling a split-tunneling setup for all remote users",
      "C": "Increasing the VPN session timeout value",
      "D": "Requiring users to connect only during business hours"
    },
    "explanations": {
      "A": "MFA requires an additional authentication factor beyond the password, reducing the chance that stolen or guessed credentials alone can provide VPN access.",
      "B": "Split tunneling changes traffic routing and does not directly strengthen user authentication.",
      "C": "A longer timeout can keep authenticated sessions active for more time and does not prevent unauthorized logins.",
      "D": "Time restrictions can reduce exposure but do not strongly protect against an attacker using valid stolen credentials during allowed hours."
    },
    "tip": "Protect remote logins with MFA so a password alone is not enough. CompTIA A+ 220-1202 - Remote Access Technologies Page 12"
  },
  {
    "topic": "Remote Access Technologies",
    "number": 11,
    "question": "Unlike RDP, standard VNC is often considered less secure because it frequently lacks native end-to-end encryption for the entire session and typically requires the use of an SSH tunnel or a VPN to secure data in transit and prevent credential interception.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The source states that standard VNC often lacks native end-to-end encryption for the full session, so an SSH tunnel or VPN may be used to protect traffic in transit.",
      "B": "This contradicts the source's stated security limitation of standard VNC and the need for an additional secure tunnel in many deployments."
    },
    "tip": "If VNC traffic is not natively protected, secure the path with an SSH tunnel or VPN. CompTIA A+ 220-1202 - Remote Access Technologies Page 13"
  },
  {
    "topic": "Remote Access Technologies",
    "number": 12,
    "question": "A network administrator is concerned about automated brute-force attacks successfully guessing passwords on a Linux server used for remote management. Which action would provide the most significant increase in security for the SSH service?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Restricting SSH access to specific IP addresses or using a firewall",
      "B": "Disabling direct root user or administrator login capability",
      "C": "Changing the default TCP port 22 to reduce automated attacks",
      "D": "Using public-key authentication (SSH keys) instead of passwords"
    },
    "explanations": {
      "A": "Network restrictions reduce who can reach SSH, but password-based authentication can still be attacked from allowed sources.",
      "B": "Disabling direct privileged login is good hardening, but other password-based accounts can still be brute-forced.",
      "C": "A nonstandard port may reduce basic scanning noise but does not remove the weakness of guessable passwords.",
      "D": "Public-key authentication removes ordinary password guessing from the login process and therefore provides the strongest direct defense against password brute-force attacks among these choices."
    },
    "tip": "To defeat SSH password guessing, replace password authentication with SSH keys. CompTIA A+ 220-1202 - Remote Access Technologies Page 14"
  },
  {
    "topic": "Remote Access Technologies",
    "number": 13,
    "question": "Which of the following best describes the most significant architectural security risk associated with RMM platforms?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Data exfiltration",
      "B": "Insecure APIs",
      "C": "Human error",
      "D": "Centralized control"
    },
    "explanations": {
      "A": "Data theft can occur through compromised management tools, but the question asks for the underlying architectural risk that enables broad impact.",
      "B": "An insecure API can create vulnerabilities, but it is not the defining architectural issue identified by the source.",
      "C": "Administrator mistakes are possible in any management environment and are not unique to RMM architecture.",
      "D": "RMM platforms can control many endpoints from a central console. If that central platform or privileged account is compromised, an attacker may gain broad access to numerous managed systems."
    },
    "tip": "RMM's strength is centralized control - and that same centralization creates a large security impact if compromised. CompTIA A+ 220-1202 - Remote Access Technologies Page 15"
  },
  {
    "topic": "Remote Access Technologies",
    "number": 14,
    "question": "An administrator is configuring SPICE for secure remote access across multiple guest operating systems. What is the most important security measure that should be implemented to protect data in transit?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Enabling TLS encryption for all SPICE channels",
      "B": "Changing the default SPICE port to a non-standard port",
      "C": "Restricting SPICE access to specific IP addresses using firewall rules",
      "D": "Limiting SPICE connections to a trusted VLAN"
    },
    "explanations": {
      "A": "TLS encrypts SPICE traffic while it travels across the network, directly protecting session data from interception.",
      "B": "Changing a port can reduce casual scanning but does not encrypt the session data.",
      "C": "Firewall restrictions reduce who can connect, but permitted traffic still needs encryption to protect its contents in transit.",
      "D": "Network segmentation reduces exposure but does not itself encrypt SPICE traffic between endpoints."
    },
    "tip": "Protect data in transit with encryption - for SPICE, enable TLS. CompTIA A+ 220-1202 - Remote Access Technologies Page 16"
  },
  {
    "topic": "Remote Access Technologies",
    "number": 15,
    "question": "A network technician is configuring a Windows workstation for remote PowerShell management over an untrusted network segment. To ensure that remote management traffic is encrypted during transit, the technician should modify the WinRM configuration and switch from the default HTTP setting to:",
    "answers": [
      "B"
    ],
    "options": {
      "A": "SSH",
      "B": "HTTPS",
      "C": "IPsec",
      "D": "VPN"
    },
    "explanations": {
      "A": "SSH is a separate secure remote-access protocol rather than the encrypted HTTP transport setting requested for WinRM.",
      "B": "Configuring WinRM to use HTTPS protects the management session with TLS encryption, securing the traffic as it crosses an untrusted network.",
      "C": "IPsec can protect network traffic at the IP layer, but it is not the WinRM transport setting the question asks to configure instead of HTTP.",
      "D": "A VPN can secure a network path, but it is not the direct WinRM configuration change from HTTP requested in the scenario."
    },
    "tip": "WinRM over an untrusted network should use HTTPS so the management traffic is encrypted."
  },
  {
    "topic": "SOHO Network Security",
    "number": 1,
    "question": "A technician is setting up a new SOHO router. After connecting with the factory default credentials, what is the most important first step to secure the device?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Disable unused ports",
      "B": "Update the router firmware",
      "C": "Change admin credentials",
      "D": "Turn off SSID broadcast"
    },
    "explanations": {
      "A": "Reducing unused services and ports is useful, but the default administrator credentials are immediately predictable and should be replaced first.",
      "B": "Firmware updates are important for fixing vulnerabilities, but administrative access should first be protected from anyone who knows the factory credentials.",
      "C": "Default router usernames and passwords are widely known or easy to find. Replacing them immediately prevents unauthorized users from signing in with factory credentials.",
      "D": "Hiding the SSID only reduces casual visibility of the wireless network and does not protect the router administration account."
    },
    "tip": "New router first step - replace the factory administrator credentials. CompTIA A+ 220-1202 - SOHO Network Security Page 3"
  },
  {
    "topic": "SOHO Network Security",
    "number": 2,
    "question": "Which of the following are direct use cases for IP filtering on a SOHO router? (Select 2 answers)",
    "answers": [
      "B",
      "E"
    ],
    "options": {
      "A": "Blocking websites containing inappropriate content",
      "B": "Allowing only specific internal devices to access the internet",
      "C": "Preventing users from downloading and installing unauthorized applications",
      "D": "Allowing external hosts to connect to a specific internal service",
      "E": "Blocking traffic from specific external IP addresses"
    },
    "explanations": {
      "A": "Website categories and page content are normally controlled with content or URL filtering, not basic source/destination IP filtering.",
      "B": "IP filtering can permit outbound traffic only from approved internal IP addresses, restricting which devices can reach the internet.",
      "C": "Application installation is controlled on endpoints with permissions, policies, or application controls rather than router IP filtering.",
      "D": "Publishing an internal service to external users is normally handled with port forwarding and firewall rules.",
      "E": "A router can deny traffic based on source IP addresses, which is a direct use of IP filtering."
    },
    "tip": "IP filtering makes allow-or-block decisions based on IP addresses. CompTIA A+ 220-1202 - SOHO Network Security Page 4"
  },
  {
    "topic": "SOHO Network Security",
    "number": 3,
    "question": "Firmware is permanent software in a SOHO router, and applying manufacturer firmware updates is a critical security and maintenance task because updates can fix vulnerabilities and bugs.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "This matches the source: router firmware controls hardware functions, and vendor updates can patch security flaws, correct bugs, and sometimes add features.",
      "B": "The statement accurately describes firmware and the security value of keeping it updated."
    },
    "tip": "Router firmware updates close known device-level security holes. CompTIA A+ 220-1202 - SOHO Network Security Page 5"
  },
  {
    "topic": "SOHO Network Security",
    "number": 4,
    "question": "Which router feature inspects data streams for criteria such as keywords, file types, or patterns and blocks inappropriate, harmful, or malicious payloads?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Malware inspection",
      "B": "Packet filtering",
      "C": "Traffic shaping",
      "D": "Content filtering"
    },
    "explanations": {
      "A": "Malware inspection specifically looks for malicious code or known threat behavior, while the question describes broader rules based on content characteristics.",
      "B": "Packet filtering generally evaluates headers such as addresses, protocols, and ports rather than the content or keywords inside a data stream.",
      "C": "Traffic shaping manages bandwidth and traffic priority; it does not block data based on payload content.",
      "D": "Content filtering examines traffic for defined content criteria and blocks material that violates security or usage rules."
    },
    "tip": "Content filtering looks inside traffic for prohibited content; packet filtering focuses on network fields. CompTIA A+ 220-1202 - SOHO Network Security Page 6"
  },
  {
    "topic": "SOHO Network Security",
    "number": 5,
    "question": "A SOHO router is positioned directly against a wall that separates the office from a public hallway. This placement primarily increases the risk of: (Select 2 answers)",
    "answers": [
      "C",
      "E"
    ],
    "options": {
      "A": "Excessive signal reflection",
      "B": "SSID broadcast suppression",
      "C": "Wireless signal leakage",
      "D": "Reduced signal range within the office",
      "E": "Unauthorized wireless access"
    },
    "explanations": {
      "A": "Reflection can affect wireless propagation, but the security concern emphasized here is the signal extending into an uncontrolled public area.",
      "B": "Router placement does not automatically suppress the SSID.",
      "C": "Placing an access point next to an exterior or public-facing wall can allow its radio signal to extend farther outside the controlled office space.",
      "D": "Range distribution may change, but the primary security risk is exposure outside the office rather than reduced indoor coverage.",
      "E": "Stronger signal availability in a public hallway gives unauthorized people a better opportunity to detect and attempt to access the wireless network."
    },
    "tip": "Place wireless access points toward controlled interior areas to reduce signal leakage outside. CompTIA A+ 220-1202 - SOHO Network Security Page 7"
  },
  {
    "topic": "SOHO Network Security",
    "number": 6,
    "question": "Which are valid reasons to leave UPnP disabled on a SOHO router? (Select 2 answers)",
    "answers": [
      "A",
      "E"
    ],
    "options": {
      "A": "To reduce the risk of external access to internal devices",
      "B": "To minimize the chance of a successful port scanning attack",
      "C": "To prevent the router from broadcasting its external WAN IP address",
      "D": "To reduce the number of connected clients on the network",
      "E": "To prevent automatic port forwarding by unknown applications"
    },
    "explanations": {
      "A": "UPnP can dynamically create network mappings that expose internal services. Disabling it reduces unintended external reachability.",
      "B": "Attackers can still scan the router regardless of UPnP; disabling UPnP mainly prevents automatic creation of port mappings.",
      "C": "UPnP does not control whether the router has or reveals a WAN IP address in the manner described.",
      "D": "UPnP does not determine how many clients may associate with the network.",
      "E": "UPnP can let applications request port mappings without manual administrator configuration, so disabling it prevents this automatic behavior."
    },
    "tip": "UPnP trades convenience for automatic port changes; disable it when those mappings are unnecessary. CompTIA A+ 220-1202 - SOHO Network Security Page 8"
  },
  {
    "topic": "SOHO Network Security",
    "number": 7,
    "question": "A screened subnet is a semi-trusted network segment that acts as a buffer zone between the trusted internal network and untrusted external networks.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "A screened subnet separates public-facing or less-trusted systems from the internal LAN, limiting direct exposure of trusted resources.",
      "B": "The statement correctly describes the purpose of a screened subnet or DMZ-style network segment."
    },
    "tip": "Screened subnet = buffer between the private LAN and untrusted networks. CompTIA A+ 220-1202 - SOHO Network Security Page 9"
  },
  {
    "topic": "SOHO Network Security",
    "number": 8,
    "question": "Which action is NOT considered a security best practice for access management on a SOHO router?",
    "answers": [
      "E"
    ],
    "options": {
      "A": "Disabling remote access when not needed",
      "B": "Enforcing strong authentication for administrative access",
      "C": "Using encrypted protocols such as HTTPS or SSH",
      "D": "Limiting access to trusted IP ranges",
      "E": "Changing the default SSID to hide network identity"
    },
    "explanations": {
      "A": "Disabling unnecessary remote administration reduces the router attack surface and is a security best practice.",
      "B": "Strong administrator authentication helps prevent unauthorized configuration changes.",
      "C": "Encrypted management protocols protect administrator credentials and configuration traffic from interception.",
      "D": "Restricting management access to trusted addresses reduces who can reach the administration interface.",
      "E": "Changing the default SSID can reduce manufacturer information exposure, but it is a wireless naming measure rather than an access-management control for router administration."
    },
    "tip": "Router access management focuses on who can administer it and how that management traffic is protected. CompTIA A+ 220-1202 - SOHO Network Security Page 10"
  },
  {
    "topic": "SOHO Network Security",
    "number": 9,
    "question": "Changing a manufacturer-default SSID to a unique name helps obscure the router or access point identity.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Default SSIDs often reveal the vendor or device family. A unique SSID removes that obvious manufacturer clue, although it is not a substitute for encryption.",
      "B": "The source correctly states that replacing the default SSID can obscure router identity from casual observation."
    },
    "tip": "A custom SSID hides vendor clues, but WPA security is what protects wireless access. CompTIA A+ 220-1202 - SOHO Network Security Page 11"
  },
  {
    "topic": "SOHO Network Security",
    "number": 10,
    "question": "Which of the following would hide the wireless network name from casual scanning?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Enabling encryption",
      "B": "Disabling unused services/ports",
      "C": "Enabling firewall rules for inbound traffic",
      "D": "Disabling SSID broadcast"
    },
    "explanations": {
      "A": "Encryption protects wireless traffic and authentication but does not itself stop the network name from being advertised.",
      "B": "This reduces the router attack surface but does not control wireless network-name advertisement.",
      "C": "Firewall rules govern network traffic, not SSID advertisement.",
      "D": "Turning off SSID broadcast prevents the network name from appearing in ordinary wireless discovery lists, although determined users can still detect the network."
    },
    "tip": "Disabling SSID broadcast hides the name from casual discovery, not from dedicated wireless analysis. CompTIA A+ 220-1202 - SOHO Network Security Page 12"
  },
  {
    "topic": "SOHO Network Security",
    "number": 11,
    "question": "A technician wants the strongest possible wireless encryption setting on a new SOHO router. Which option should be selected?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "WPA-TKIP",
      "B": "WPA2-AES",
      "C": "WPA3-SAE",
      "D": "WPA3-Enterprise"
    },
    "explanations": {
      "A": "WPA with TKIP is an older security method with known weaknesses and should not be chosen when stronger standards are available.",
      "B": "WPA2 with AES is strong and widely supported, but the source identifies WPA3-SAE as the stronger current SOHO option.",
      "C": "WPA3-SAE improves personal wireless authentication and provides stronger protection than older WPA/WPA2 personal configurations.",
      "D": "WPA3-Enterprise can provide very strong enterprise authentication, but it requires enterprise infrastructure and is not the intended SOHO personal-mode answer in this quiz."
    },
    "tip": "For modern SOHO personal Wi-Fi, choose WPA3-SAE when all devices support it. CompTIA A+ 220-1202 - SOHO Network Security Page 13"
  },
  {
    "topic": "SOHO Network Security",
    "number": 12,
    "question": "Which are typical characteristics of a SOHO guest wireless network? (Select 3 answers)",
    "answers": [
      "C",
      "D",
      "E"
    ],
    "options": {
      "A": "Shared encryption and authentication settings",
      "B": "Access to internal LAN devices",
      "C": "Separate SSID",
      "D": "Guest network isolation from the main LAN",
      "E": "Open access or shared passphrase different from the main LAN",
      "F": "SSID shared with the main network"
    },
    "explanations": {
      "A": "A guest network should normally use separate access settings rather than sharing the main LAN credentials.",
      "B": "Guest clients are normally isolated from trusted internal devices to protect private resources.",
      "C": "A separate network name clearly distinguishes guest access from the organization's main wireless network.",
      "D": "Isolation prevents guest devices from directly reaching trusted internal computers, printers, and other resources.",
      "E": "Guest access commonly uses its own authentication method or separate passphrase so the main network credential is not disclosed.",
      "F": "Using the same SSID would defeat the clear separation expected between guest and trusted wireless access."
    },
    "tip": "Guest Wi-Fi should be separate, isolated, and use credentials different from the main LAN. CompTIA A+ 220-1202 - SOHO Network Security Page 14"
  },
  {
    "topic": "SOHO Network Security",
    "number": 13,
    "question": "A network technician wants to secure a SOHO network by disabling unused TCP/UDP ports. Where should this configuration be applied?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Content filtering settings on the SOHO router",
      "B": "Port configuration settings on a network switch",
      "C": "Firewall settings on the SOHO router",
      "D": "TCP/IP configuration settings on client devices"
    },
    "explanations": {
      "A": "Content filtering blocks traffic based on content or categories, not simply by TCP/UDP port number.",
      "B": "Physical switch-port configuration manages Ethernet interfaces and does not generally block internet TCP/UDP service ports.",
      "C": "Firewall rules can allow or deny network traffic by protocol and TCP/UDP port, making the router firewall the correct place to block unused services.",
      "D": "Client IP configuration defines addressing and related parameters; it is not the central SOHO control for blocking network service ports."
    },
    "tip": "TCP/UDP service ports are allowed or blocked with firewall rules. CompTIA A+ 220-1202 - SOHO Network Security Page 15"
  },
  {
    "topic": "SOHO Network Security",
    "number": 14,
    "question": "A SOHO router must allow public-internet users to reach a web server on the private internal network. Which setting maps incoming requests to the server's private IP address?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Port labeling",
      "B": "Port bonding",
      "C": "Port forwarding",
      "D": "Port mirroring"
    },
    "explanations": {
      "A": "Port labeling is an administrative naming practice and does not redirect network traffic.",
      "B": "Port bonding combines multiple network interfaces for bandwidth or redundancy; it does not map inbound internet connections.",
      "C": "Port forwarding creates a router mapping that sends incoming traffic on a selected public port to a specified private IP address and port on the internal server.",
      "D": "Port mirroring copies traffic to another interface for monitoring or analysis rather than forwarding public requests to an internal service."
    },
    "tip": "Port forwarding publishes a selected internal service through the router to outside clients."
  },
  {
    "topic": "Scripting Basics",
    "number": 1,
    "question": "Which type of file extension would be found on a script file that runs a sequence of DOS commands in Windows Command Prompt?",
    "answers": [
      "A"
    ],
    "options": {
      "A": ".bat",
      "B": ".ps1",
      "C": ".sh",
      "D": ".vbs"
    },
    "explanations": {
      "A": "A .bat batch file contains a sequence of command-line commands that Windows Command Prompt can execute in order.",
      "B": ".ps1 is the standard extension for PowerShell scripts, which are interpreted by PowerShell rather than traditional Command Prompt batch processing.",
      "C": ".sh is commonly used for shell scripts on Unix-like systems such as Linux and macOS.",
      "D": ".vbs is used for VBScript files executed through the Windows Script Host environment."
    },
    "tip": "Command Prompt batch commands = .bat; PowerShell commands = .ps1. CompTIA A+ 220-1202 - Scripting Basics Page 3"
  },
  {
    "topic": "Scripting Basics",
    "number": 2,
    "question": "Which file extension is used for scripts executed by the PowerShell interpreter on Windows systems?",
    "answers": [
      "D"
    ],
    "options": {
      "A": ".vbs",
      "B": ".py",
      "C": ".bat",
      "D": ".ps1"
    },
    "explanations": {
      "A": ".vbs files contain VBScript and are normally processed by Windows Script Host.",
      "B": ".py identifies Python source files, which require a Python interpreter.",
      "C": ".bat files contain traditional Windows batch commands for Command Prompt.",
      "D": ".ps1 is the standard filename extension for Windows PowerShell script files."
    },
    "tip": "PS in .ps1 is a quick reminder that the file is a PowerShell script. CompTIA A+ 220-1202 - Scripting Basics Page 4"
  },
  {
    "topic": "Scripting Basics",
    "number": 3,
    "question": "Which scripting language is associated with the .vbs file extension?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "JavaScript",
      "B": "Python",
      "C": "Visual Basic Scripting Edition",
      "D": "PowerShell"
    },
    "explanations": {
      "A": "JavaScript source files normally use the .js extension.",
      "B": "Python scripts normally use the .py extension.",
      "C": ".vbs identifies VBScript, formally called Visual Basic Scripting Edition, a Microsoft scripting language used with Windows Script Host.",
      "D": "PowerShell scripts normally use the .ps1 extension."
    },
    "tip": ".vbs = VBScript = Visual Basic Scripting Edition. CompTIA A+ 220-1202 - Scripting Basics Page 5"
  },
  {
    "topic": "Scripting Basics",
    "number": 4,
    "question": "A technician needs to create a logon script that displays a graphical (popup) welcome message for domain users on legacy Windows workstations. Which type of script file should be used?",
    "answers": [
      "D"
    ],
    "options": {
      "A": ".cmd",
      "B": ".bat",
      "C": ".sh",
      "D": ".vbs"
    },
    "explanations": {
      "A": ".cmd is a command script for Command Prompt and is better suited to command-line operations than the legacy graphical scripting capability emphasized here.",
      "B": "Batch files automate Command Prompt commands but are not the source's choice for a graphical popup logon script.",
      "C": ".sh is associated with Unix-like shell environments, not legacy Windows logon scripting.",
      "D": "VBScript can use Windows Script Host objects to display graphical message boxes, making .vbs appropriate for this legacy Windows logon scenario."
    },
    "tip": "Legacy Windows popup automation often points to VBScript and the .vbs extension. CompTIA A+ 220-1202 - Scripting Basics Page 6"
  },
  {
    "topic": "Scripting Basics",
    "number": 5,
    "question": "Which of the following is the standard file extension for shell scripts executed on Unix-like systems such as Linux and macOS?",
    "answers": [
      "D"
    ],
    "options": {
      "A": ".py",
      "B": ".js",
      "C": ".bat",
      "D": ".sh"
    },
    "explanations": {
      "A": ".py is used for Python programs, which are interpreted by Python rather than being the standard shell-script extension.",
      "B": ".js is used for JavaScript source files.",
      "C": ".bat is a Windows batch-file extension for Command Prompt.",
      "D": ".sh is the conventional extension for shell scripts used with shells such as Bash on Unix-like operating systems."
    },
    "tip": "Unix/Linux shell script = .sh. CompTIA A+ 220-1202 - Scripting Basics Page 7"
  },
  {
    "topic": "Scripting Basics",
    "number": 6,
    "question": "Which type of script file is used to control interactive elements on web pages in modern browsers?",
    "answers": [
      "C"
    ],
    "options": {
      "A": ".css",
      "B": ".php",
      "C": ".js",
      "D": ".vbs"
    },
    "explanations": {
      "A": "CSS controls presentation and visual styling; it does not provide the scripting logic used for interactive webpage behavior.",
      "B": "PHP normally executes on the web server to generate server-side content rather than controlling browser-side interaction directly.",
      "C": ".js files contain JavaScript, the standard browser scripting language used for dynamic and interactive webpage behavior.",
      "D": "VBScript is a Microsoft scripting technology and is not the modern standard for browser-side web interaction."
    },
    "tip": "HTML structures, CSS styles, and JavaScript (.js) adds browser interaction. CompTIA A+ 220-1202 - Scripting Basics Page 8"
  },
  {
    "topic": "Scripting Basics",
    "number": 7,
    "question": "Which of the answers listed below refers to a filename extension associated with a cross-platform, general-purpose programming language?",
    "answers": [
      "B"
    ],
    "options": {
      "A": ".vbs",
      "B": ".py",
      "C": ".ps1",
      "D": ".bat"
    },
    "explanations": {
      "A": "VBScript is primarily associated with Microsoft Windows scripting rather than a broadly cross-platform general-purpose language.",
      "B": ".py is the extension for Python, a general-purpose programming language available across Windows, Linux, macOS, and other platforms.",
      "C": ".ps1 identifies PowerShell scripts; although PowerShell is now available cross-platform, the source identifies Python for this question.",
      "D": ".bat files are Windows batch scripts and are tied to Windows command processing."
    },
    "tip": ".py = Python, a general-purpose language commonly used across operating systems. CompTIA A+ 220-1202 - Scripting Basics Page 9"
  },
  {
    "topic": "Scripting Basics",
    "number": 8,
    "question": "A Windows technician is tasked with ensuring that temporary files and folders are deleted from all workstations on a specific time-based schedule. What should the technician do to provide basic automation for this task?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Modify a registry key to automatically purge temporary data",
      "B": "Configure Group Policy to delete temporary data at user logoff",
      "C": "Implement a script to run the deletion task on schedule",
      "D": "Use Disk Cleanup's built-in settings to remove temporary data"
    },
    "explanations": {
      "A": "A registry change is not the general method for building a repeatable scheduled deletion workflow across workstations.",
      "B": "A logoff action is event-based rather than the specific time-based schedule requested.",
      "C": "A script can contain the deletion commands and be launched by a scheduling mechanism at the required times, providing repeatable automation.",
      "D": "Disk Cleanup can remove temporary files, but by itself it does not provide the scripted scheduled automation described in the question."
    },
    "tip": "Repetitive command + specific schedule = script the task and schedule its execution. CompTIA A+ 220-1202 - Scripting Basics Page 10"
  },
  {
    "topic": "Scripting Basics",
    "number": 9,
    "question": "Which file extension is used for scripts that are the current industry standard for automating administrative tasks, such as system restarts, in a modern Windows environment?",
    "answers": [
      "D"
    ],
    "options": {
      "A": ".bat",
      "B": ".vbs",
      "C": ".cmd",
      "D": ".ps1"
    },
    "explanations": {
      "A": "Batch files can automate Windows commands, but the source identifies PowerShell as the modern administrative scripting standard.",
      "B": "VBScript is a legacy Windows scripting technology and is less suited to modern administration than PowerShell.",
      "C": ".cmd is another traditional command-script format and lacks PowerShell's richer administrative framework.",
      "D": ".ps1 is the PowerShell script extension, widely used for modern Windows administration and automation."
    },
    "tip": "Modern Windows administration = PowerShell = .ps1. CompTIA A+ 220-1202 - Scripting Basics Page 11"
  },
  {
    "topic": "Scripting Basics",
    "number": 10,
    "question": "A technician needs to ensure that all employees in the Finance department have a specific shared folder mapped to the Z: drive every time they log into their Windows workstations. Which of the following options allows the technician to achieve this goal?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Write a startup script that maps the drive at system boot",
      "B": "Configure a script that uses a net share command",
      "C": "Use a shutdown script to remap the drive before the system powers off",
      "D": "Create a login script that runs a net use command"
    },
    "explanations": {
      "A": "A startup script runs for the computer and may execute before a particular user logs in, so it does not directly match the per-user logon requirement.",
      "B": "net share creates or manages shared resources; it does not map a remote share to a user's drive letter.",
      "C": "A shutdown script runs at the wrong time and would not ensure the mapping is created when the employee signs in.",
      "D": "A logon script executes when the user signs in, and net use can map the required network share to the Z: drive."
    },
    "tip": "Map a network drive at user sign-in with a logon script and net use. CompTIA A+ 220-1202 - Scripting Basics Page 12"
  },
  {
    "topic": "Scripting Basics",
    "number": 11,
    "question": "What are the primary benefits of using scripts to install applications in enterprise environments? (Select 3 answers)",
    "answers": [
      "A",
      "C",
      "E"
    ],
    "options": {
      "A": "Ensuring consistent software configuration across multiple systems",
      "B": "Reducing the time required to install software on a single workstation",
      "C": "Improving efficiency and scalability of software deployment",
      "D": "Bypassing the requirement for administrative privileges on target systems",
      "E": "Minimizing errors that occur during manual software deployment"
    },
    "explanations": {
      "A": "A repeatable script can apply the same installation commands and settings across many endpoints, reducing configuration differences.",
      "B": "A script can help, but the primary enterprise benefit emphasized by the source is repeatability and scale across multiple systems rather than one computer.",
      "C": "Automation allows the same deployment process to be applied to large numbers of systems with much less manual effort.",
      "D": "Scripts do not legitimately bypass required security permissions; deployment still needs the appropriate privileges.",
      "E": "Automating standardized steps reduces typing mistakes, skipped steps, and inconsistent manual configuration."
    },
    "tip": "Enterprise scripting makes deployment consistent, scalable, and less vulnerable to manual mistakes. CompTIA A+ 220-1202 - Scripting Basics Page 13"
  },
  {
    "topic": "Scripting Basics",
    "number": 12,
    "question": "Which advantages does scripting provide when used for backups? (Select 3 answers)",
    "answers": [
      "A",
      "C",
      "D"
    ],
    "options": {
      "A": "Minimizing the risk of human error during repetitive tasks",
      "B": "Reducing the overall storage space required for backups",
      "C": "Ensuring consistent and standardized backup execution",
      "D": "Improving efficiency through automated off-hours scheduling",
      "E": "Reducing CPU and memory usage during the backup process"
    },
    "explanations": {
      "A": "A tested script performs the same backup steps consistently and reduces mistakes caused by repetitive manual work.",
      "B": "Scripting automates the process but does not inherently change how much backup data must be stored.",
      "C": "A script can enforce the same backup commands, paths, and procedures every time it runs.",
      "D": "Backup scripts can be scheduled during low-usage periods without requiring a technician to start them manually.",
      "E": "Automation does not inherently reduce the computational resources required to copy or process backup data."
    },
    "tip": "Backup scripts reduce human error, standardize execution, and make unattended scheduling possible. CompTIA A+ 220-1202 - Scripting Basics Page 14"
  },
  {
    "topic": "Scripting Basics",
    "number": 13,
    "question": "A security analyst uses a script to pull a list of all installed software from every computer in the accounting department. This is an example of which scripting use case?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Running software compliance checks",
      "B": "Conducting vulnerability scanning",
      "C": "Gathering of information/data",
      "D": "Monitoring application performance"
    },
    "explanations": {
      "A": "The gathered list could later support a compliance check, but the script described is specifically collecting information rather than evaluating it against a policy.",
      "B": "Vulnerability scanning looks for security weaknesses; simply listing installed applications does not perform that analysis.",
      "C": "The script's direct function is to collect software inventory data from multiple systems for later review or analysis.",
      "D": "Performance monitoring measures metrics such as resource usage, response time, or availability rather than enumerating installed software."
    },
    "tip": "If the script's job is to collect facts from systems, the use case is gathering information/data. CompTIA A+ 220-1202 - Scripting Basics Page 15"
  },
  {
    "topic": "Scripting Basics",
    "number": 14,
    "question": "A system administrator uses a script to remotely trigger the download and installation of the latest firmware on several network appliances. Which of the answers listed below best describes the primary function of this script?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Update propagation",
      "B": "Update initiation",
      "C": "Update provisioning",
      "D": "Update enforcement"
    },
    "explanations": {
      "A": "Propagation describes distribution or spread, but the source focuses on the script starting the update process on the appliances.",
      "B": "The script remotely triggers the devices to begin downloading and installing the firmware, so its primary function is initiating the update.",
      "C": "Provisioning generally prepares or supplies resources/configuration; it is not the source's term for triggering the firmware process.",
      "D": "Enforcement would focus on requiring compliance with an update policy rather than simply starting the update operation."
    },
    "tip": "A script that triggers an update is performing update initiation. CompTIA A+ 220-1202 - Scripting Basics Page 16"
  },
  {
    "topic": "Scripting Basics",
    "number": 15,
    "question": "Primary countermeasures against the unintentional introduction of malware via scripting include verifying the source code and testing the script's behavior in a sandbox or lab environment prior to production deployment.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Reviewing the source and testing in an isolated environment can expose suspicious commands or harmful behavior before a script is trusted on production systems.",
      "B": "Skipping source verification and isolated testing would increase the chance that malicious or unsafe script behavior reaches production."
    },
    "tip": "Treat unfamiliar scripts like untrusted software - inspect them and test them away from production first. CompTIA A+ 220-1202 - Scripting Basics Page 17"
  },
  {
    "topic": "Scripting Basics",
    "number": 16,
    "question": "A script is deployed to enforce a standardized corporate desktop background across the company's workstations. Post-execution, users report that certain applications no longer launch correctly. Which type of risk associated with scripting does this scenario represent?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Unintentional introduction of malware",
      "B": "Increased system resource usage",
      "C": "Software compatibility errors",
      "D": "Inadvertent changes to system settings"
    },
    "explanations": {
      "A": "The scenario does not indicate malicious code; it describes an unintended side effect caused by the script.",
      "B": "The symptom is applications failing to launch, not excessive CPU, memory, disk, or network consumption.",
      "C": "Compatibility could cause application problems, but the source identifies the underlying scripting risk as unintended system configuration changes.",
      "D": "A script intended to change one setting can accidentally modify other configuration values, producing unexpected application failures."
    },
    "tip": "Automation is powerful: one incorrect command can change system settings across many computers. CompTIA A+ 220-1202 - Scripting Basics Page 18"
  },
  {
    "topic": "Scripting Basics",
    "number": 17,
    "question": "A Windows user runs a browser automation script written in JavaScript to scrape data from multiple web pages. After several minutes, the browser becomes completely unresponsive and must be terminated via Task Manager. Which of the following answers best describes a scripting-related risk presented in this scenario?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Application timeout from low bandwidth",
      "B": "Unintentional introduction of malware",
      "C": "Mishandling of system resources",
      "D": "Incompatible JavaScript runtime version"
    },
    "explanations": {
      "A": "The browser is described as becoming unresponsive after the script runs; the source does not attribute the failure to network bandwidth.",
      "B": "Nothing in the scenario indicates malicious code or malware infection.",
      "C": "A poorly designed or uncontrolled script can consume excessive CPU, memory, handles, or other resources until the host application becomes unresponsive.",
      "D": "The script executes for several minutes, so the scenario does not point to a runtime-version incompatibility preventing proper execution."
    },
    "tip": "A script can freeze an application when loops or operations consume resources without proper limits."
  },
  {
    "topic": "Social Engineering",
    "number": 1,
    "question": "Which answer choice is an example of a threat vector type that is typical for voice communication?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Pharming",
      "B": "Vishing",
      "C": "Phishing",
      "D": "Smishing"
    },
    "explanations": {
      "A": "Pharming redirects users to fraudulent websites, usually by manipulating DNS or related name-resolution mechanisms; it is not specifically voice based.",
      "B": "Vishing is voice phishing. Attackers use phone calls or voice messages to impersonate trusted people or organizations and persuade victims to reveal information or take unsafe actions.",
      "C": "Phishing is the broader social-engineering category and is commonly associated with fraudulent email or web messages; the voice-specific term is vishing.",
      "D": "Smishing is phishing delivered through SMS or text messages, not voice calls."
    },
    "tip": "Vishing = voice phishing; think “V” for voice. CompTIA A+ 220-1202 - Social Engineering Quiz Page 3"
  },
  {
    "topic": "Social Engineering",
    "number": 2,
    "question": "Which term refers to a threat vector commonly associated with SMS-based communication?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Phishing",
      "B": "Vishing",
      "C": "Smishing",
      "D": "Pharming"
    },
    "explanations": {
      "A": "Phishing is the general category of fraudulent messages, but the SMS-specific form has its own name.",
      "B": "Vishing uses voice calls or voice messages rather than SMS.",
      "C": "Smishing is phishing performed through SMS/text messages, often using malicious links or urgent requests.",
      "D": "Pharming redirects traffic to fraudulent sites and does not specifically depend on SMS communication."
    },
    "tip": "Smishing = SMS phishing. CompTIA A+ 220-1202 - Social Engineering Quiz Page 4"
  },
  {
    "topic": "Social Engineering",
    "number": 3,
    "question": "Quick Response (QR) code phishing embeds malicious URLs into QR codes that may redirect users to fake login pages, initiate malware downloads, or capture sensitive information.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "This matches the source description: malicious QR codes can hide destinations and send users to credential-stealing pages or malware after scanning.",
      "B": "The statement accurately describes QR-code phishing and the risks listed in the quiz."
    },
    "tip": "Treat an unexpected QR code like an unknown link—verify where it came from before scanning. CompTIA A+ 220-1202 - Social Engineering Quiz Page 5"
  },
  {
    "topic": "Social Engineering",
    "number": 4,
    "question": "Which answer refers to a phishing attack aimed at specific individuals or groups?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Email spoofing",
      "B": "Whaling",
      "C": "Spear phishing",
      "D": "Watering hole attack"
    },
    "explanations": {
      "A": "Email spoofing falsifies sender information, but it does not by itself mean the attack is carefully targeted to a particular person or group.",
      "B": "Whaling is a specialized targeted phishing attack aimed specifically at high-profile or senior individuals; the broader targeted category is spear phishing.",
      "C": "Spear phishing uses customized messages aimed at selected individuals or groups, often using personal or organizational details to appear convincing.",
      "D": "A watering-hole attack compromises a site frequently visited by a target group instead of directly sending the target a personalized phishing message."
    },
    "tip": "Spear phishing = targeted phishing; the attacker chooses a specific victim or group. CompTIA A+ 220-1202 - Social Engineering Quiz Page 6"
  },
  {
    "topic": "Social Engineering",
    "number": 5,
    "question": "A senior company executive receives a personalized email, appearing to be from an external law firm, demanding urgent settlement of a fictitious legal matter. This type of phishing attack is an example of:",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Spear phishing",
      "B": "Business email compromise",
      "C": "Impersonation attack",
      "D": "Whaling"
    },
    "explanations": {
      "A": "The message is targeted, so it has spear-phishing characteristics, but the quiz asks for the more specific term used when the victim is a senior executive.",
      "B": "BEC commonly involves impersonating executives, vendors, or trusted business contacts to cause fraudulent payments or data disclosure; the source classifies this executive-targeted phishing scenario as whaling.",
      "C": "The attacker is impersonating a law firm, but the defining detail emphasized by the question is that a high-ranking executive is the phishing target.",
      "D": "Whaling is phishing specifically aimed at high-value targets such as executives, senior managers, or other prominent individuals."
    },
    "tip": "Whaling = phishing aimed at the “big fish,” such as executives. CompTIA A+ 220-1202 - Social Engineering Quiz Page 7"
  },
  {
    "topic": "Social Engineering",
    "number": 6,
    "question": "A privacy filter narrows a screen’s viewing angle so content is visible mainly to the person directly in front of the monitor. This provides a countermeasure against:",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Identity theft",
      "B": "Shoulder surfing",
      "C": "Privilege escalation",
      "D": "Screen scraping"
    },
    "explanations": {
      "A": "Identity theft is the misuse of another person’s identifying information; a privacy filter addresses visual observation rather than the entire identity-theft problem.",
      "B": "Shoulder surfing occurs when someone observes a screen, keyboard, or other information over a user’s shoulder. A privacy filter reduces what nearby observers can see.",
      "C": "Privilege escalation is gaining higher system permissions and is unrelated to the physical viewing angle of a display.",
      "D": "Screen scraping generally refers to software extracting displayed data; a physical privacy filter is intended to stop nearby people from visually reading the screen."
    },
    "tip": "Privacy screen = protection against shoulder surfing. CompTIA A+ 220-1202 - Social Engineering Quiz Page 8"
  },
  {
    "topic": "Social Engineering",
    "number": 7,
    "question": "A visitor without a badge enters a company building right after a delivery worker opens the door. This situation best describes:",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Tailgating",
      "B": "Shoulder surfing",
      "C": "Pretexting",
      "D": "Impersonation"
    },
    "explanations": {
      "A": "Tailgating occurs when an unauthorized person follows an authorized person through a controlled entrance without independently authenticating.",
      "B": "Shoulder surfing means observing sensitive information from another person’s screen or input.",
      "C": "Pretexting uses a fabricated story or identity to persuade someone to provide information or access; the scenario focuses on following through the door.",
      "D": "Impersonation means pretending to be another person or trusted role, but no such claim is described here."
    },
    "tip": "Tailgating = following an authorized person through a secured entrance. CompTIA A+ 220-1202 - Social Engineering Quiz Page 9"
  },
  {
    "topic": "Social Engineering",
    "number": 8,
    "question": "A technician receives a call from someone claiming to be a data center manager requesting an immediate password reset for a critical account. This scenario is an example of:",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Identity theft",
      "B": "Phishing",
      "C": "Unauthorized access",
      "D": "Impersonation"
    },
    "explanations": {
      "A": "Identity theft involves stealing and misusing personal identity information; the scenario specifically involves pretending to hold a trusted organizational role.",
      "B": "The call is a social-engineering attempt, but the source’s best answer focuses on the caller pretending to be the data center manager.",
      "C": "Unauthorized access may be the attacker’s goal, but it describes the result rather than the social-engineering technique being used.",
      "D": "The caller falsely claims to be a trusted manager to convince the technician to perform a sensitive action, which is impersonation."
    },
    "tip": "Impersonation = pretending to be a trusted person or role to gain cooperation. CompTIA A+ 220-1202 - Social Engineering Quiz Page 10"
  },
  {
    "topic": "Social Engineering",
    "number": 9,
    "question": "In computer security, “Dumpster diving” refers to searching through trash for discarded documents or storage media that may contain sensitive information useful for malicious purposes.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "This matches the source definition: attackers may recover names, organizational details, credentials, documents, or storage media from improperly discarded materials.",
      "B": "The statement accurately describes dumpster diving as a physical information-gathering social-engineering technique."
    },
    "tip": "Shred sensitive paper and securely destroy storage media before disposal."
  },
  {
    "topic": "Software Licensing Concepts",
    "number": 1,
    "question": "Which action best ensures compliance with software licensing requirements?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Monitoring application launch frequency",
      "B": "Purchasing a perpetual license for every device",
      "C": "Tracking license keys and installations",
      "D": "Enforcing DRM restrictions across all devices"
    },
    "explanations": {
      "A": "Usage frequency can help with software management, but it does not prove that installations are legally licensed.",
      "B": "Not every product uses perpetual or per-device licensing, so buying this license type universally could still violate the actual license terms.",
      "C": "Tracking license keys and where software is installed lets an organization compare actual deployments with purchased entitlements and permitted installation counts.",
      "D": "DRM can enforce vendor-defined usage controls, but it does not replace an organization's responsibility to track its licenses and installations."
    },
    "tip": "License compliance requires matching what the organization owns with what is actually installed. CompTIA A+ 220-1202 - Software Licensing Concepts Page 3"
  },
  {
    "topic": "Software Licensing Concepts",
    "number": 2,
    "question": "The primary purpose of DRM is to:",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Specify the number of permitted software installations",
      "B": "Define legal rights and obligations for software use",
      "C": "Monitor software installation activity for license compliance",
      "D": "Enforce access and usage restrictions on digital content"
    },
    "explanations": {
      "A": "Installation limits are normally defined by the software license or EULA rather than by DRM itself.",
      "B": "Legal rights and obligations are established by license agreements such as the EULA.",
      "C": "Organizations may use software asset tools for compliance monitoring; that is not the primary purpose of DRM.",
      "D": "Digital Rights Management uses technical controls to restrict how protected digital content or software can be accessed, copied, shared, or used."
    },
    "tip": "DRM is the technical lock; the license agreement is the legal rulebook. CompTIA A+ 220-1202 - Software Licensing Concepts Page 4"
  },
  {
    "topic": "Software Licensing Concepts",
    "number": 3,
    "question": "A technician is tasked with reviewing the permissions for a new software suite. The company needs to know the specific restrictions regarding the redistribution of the software and the consequences of exceeding the allowed installation count. Which document contains this information?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "SLA",
      "B": "EULA",
      "C": "ToS",
      "D": "AUP"
    },
    "explanations": {
      "A": "A Service Level Agreement defines service expectations such as availability, support, and response times rather than end-user software licensing restrictions.",
      "B": "The End-User License Agreement defines the user's legal rights, restrictions, installation limits, redistribution rules, and other conditions for using the software.",
      "C": "Terms of Service govern use of a service or platform more broadly, but the quiz identifies the EULA as the document for software-specific license permissions and restrictions.",
      "D": "An Acceptable Use Policy defines permitted behavior when using an organization's systems or services, not the vendor's software licensing terms."
    },
    "tip": "EULA tells the end user what they may and may not legally do with the software. CompTIA A+ 220-1202 - Software Licensing Concepts Page 5"
  },
  {
    "topic": "Software Licensing Concepts",
    "number": 4,
    "question": "An IT asset manager is performing a department-wide software audit to ensure that all applications have valid licenses. Which of the following elements must be verified to confirm full licensing compliance? (Select all that apply)",
    "answers": [
      "A",
      "B",
      "C"
    ],
    "options": {
      "A": "Permitted seat count or installation limit",
      "B": "Legal entitlement or proof of purchase",
      "C": "Authorized usage scope based on license type",
      "D": "Event log entries related to application usage"
    },
    "explanations": {
      "A": "The audit must confirm that the number of active users or installations does not exceed what the license permits.",
      "B": "Receipts, license records, contracts, or other entitlement evidence demonstrate that the organization legally acquired the right to use the software.",
      "C": "A valid license may restrict use to personal, educational, corporate, device-specific, or other defined purposes, so the actual use must fit that scope.",
      "D": "Event logs can show activity, but they do not establish whether the organization owns enough licenses or whether the usage is legally permitted."
    },
    "tip": "A licensing audit checks quantity, proof of entitlement, and whether the actual use fits the license type. CompTIA A+ 220-1202 - Software Licensing Concepts Page 6"
  },
  {
    "topic": "Software Licensing Concepts",
    "number": 5,
    "question": "Which statement best defines a perpetual license agreement?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Grants the user ownership of the software source code",
      "B": "Provides unlimited installations across all devices",
      "C": "Allows indefinite software use after a one-time purchase",
      "D": "Requires regular renewal payments for continued access"
    },
    "explanations": {
      "A": "A perpetual license grants usage rights; it does not normally transfer ownership of the program or its source code.",
      "B": "Perpetual describes the duration of use, not an unlimited installation count. Device or seat limits can still apply.",
      "C": "A perpetual license generally allows the licensed version of software to be used indefinitely after the required one-time license purchase, subject to its terms.",
      "D": "Recurring renewal payments describe a subscription license rather than a perpetual license."
    },
    "tip": "Perpetual describes time: buy the license once and keep using the licensed version indefinitely. CompTIA A+ 220-1202 - Software Licensing Concepts Page 7"
  },
  {
    "topic": "Software Licensing Concepts",
    "number": 6,
    "question": "A technician finds that an employee installed a personal-use licensed application for business tasks on a company-owned workstation. This indicates that the software is:",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Exempt from licensing rules",
      "B": "Not licensed for business use",
      "C": "Automatically covered by corporate licensing",
      "D": "Open source and unrestricted"
    },
    "explanations": {
      "A": "All licensed software remains subject to its license terms; personal-use labeling does not remove those restrictions.",
      "B": "A personal-use license restricts the software to non-commercial or personal purposes, so using it for company work falls outside the authorized scope.",
      "C": "A personal license does not automatically become part of an organization's corporate license agreement.",
      "D": "Personal-use licensing does not mean the software is open source, and open-source software can also contain specific license conditions."
    },
    "tip": "A valid license can still be noncompliant if the software is used outside its permitted purpose. CompTIA A+ 220-1202 - Software Licensing Concepts Page 8"
  },
  {
    "topic": "Software Licensing Concepts",
    "number": 7,
    "question": "Which of the statements listed below accurately describe the characteristics of a personal-use software license? (Select 3 answers)",
    "answers": [
      "A",
      "B",
      "E"
    ],
    "options": {
      "A": "Grants usage rights without transferring legal ownership",
      "B": "Prohibits the redistribution or resale of the software",
      "C": "Allows the end user to modify the software",
      "D": "Transfers full legal ownership of the software to the end user",
      "E": "Restricts the software usage to non-commercial purposes"
    },
    "explanations": {
      "A": "A software license normally grants permission to use the program while the publisher retains ownership and intellectual-property rights.",
      "B": "Personal-use licenses commonly restrict copying, redistribution, or resale unless the license specifically permits those activities.",
      "C": "Modification rights are not automatically included with a personal-use license and are more commonly associated with certain open-source licenses.",
      "D": "Licensing grants defined usage rights; it does not normally transfer the software's copyright or full legal ownership.",
      "E": "Personal-use licenses are intended for private, non-business use and therefore commonly prohibit commercial use."
    },
    "tip": "Personal-use licenses grant limited use rights, keep ownership with the publisher, and usually prohibit commercial use and redistribution. CompTIA A+ 220-1202 - Software Licensing Concepts Page 9"
  },
  {
    "topic": "Software Licensing Concepts",
    "number": 8,
    "question": "A technician is tasked with setting up a shared computer in a retail environment. The computer will be used by various employees to process customer orders and manage inventory. Which of the following license types must be assigned to the software to ensure the business remains compliant with legal usage rights?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Shareware license",
      "B": "Corporate-use license",
      "C": "Perpetual license",
      "D": "Concurrent license"
    },
    "explanations": {
      "A": "Shareware is typically evaluation or limited-use software and does not automatically authorize ongoing commercial business use.",
      "B": "A corporate-use license authorizes software to be used for organizational or commercial business activities, matching the retail workstation scenario.",
      "C": "Perpetual describes how long the license remains usable, not whether it authorizes business use by an organization.",
      "D": "A concurrent license limits the number of simultaneous users, but the scenario primarily asks for a license that legally permits business use."
    },
    "tip": "For company work, verify that the license explicitly permits corporate or commercial use. CompTIA A+ 220-1202 - Software Licensing Concepts Page 10"
  },
  {
    "topic": "Software Licensing Concepts",
    "number": 9,
    "question": "Which type of software licensing model grants free access to the application code as well as permission to modify and redistribute the application?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Perpetual license",
      "B": "Freeware license",
      "C": "Open-source license",
      "D": "Shareware license"
    },
    "explanations": {
      "A": "A perpetual license concerns indefinite use after purchase and does not inherently provide access to source code or redistribution rights.",
      "B": "Freeware can be used without a purchase price, but the source code is usually closed and modification or redistribution rights may be restricted.",
      "C": "Open-source licensing provides access to source code and grants rights to study, modify, and redistribute the software according to the specific open-source license terms.",
      "D": "Shareware is commonly distributed for evaluation or with limitations and does not inherently provide source code or modification rights."
    },
    "tip": "Freeware means free to use; open source means the source code is available with modification and redistribution rights under its license."
  },
  {
    "topic": "Threats and Vulnerabilities",
    "number": 1,
    "question": "A more advanced form of DoS attack where multiple compromised systems flood a target with traffic is referred to as:",
    "answers": [
      "C"
    ],
    "options": {
      "A": "SYN flood",
      "B": "Amplification attack",
      "C": "DDoS",
      "D": "MitM attack"
    },
    "explanations": {
      "A": "A SYN flood overwhelms a target with TCP connection requests, but it does not necessarily involve many compromised systems.",
      "B": "An amplification attack magnifies traffic by abusing third-party services, but the defining detail here is that multiple compromised systems attack the target.",
      "C": "A Distributed Denial-of-Service attack uses many compromised devices or systems to overwhelm a target, making the attack distributed and harder to block.",
      "D": "A man-in-the-middle attack intercepts communications between parties instead of primarily overwhelming a service with traffic."
    },
    "tip": "DDoS = DoS launched from many distributed systems. CompTIA A+ 220-1202 - Threats & Vulnerabilities Page 3"
  },
  {
    "topic": "Threats and Vulnerabilities",
    "number": 2,
    "question": "The term \"Evil twin\" refers to a rogue WAP that advertises the same SSID as a legitimate access point to trick devices into connecting.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "This matches the source: an evil twin imitates a legitimate wireless access point so attackers can intercept traffic or steal sensitive information.",
      "B": "The statement accurately describes an evil twin wireless attack."
    },
    "tip": "Evil twin = fake Wi-Fi access point pretending to be the real one. CompTIA A+ 220-1202 - Threats & Vulnerabilities Page 4"
  },
  {
    "topic": "Threats and Vulnerabilities",
    "number": 3,
    "question": "An attack that takes advantage of a previously unknown software vulnerability that the developer has not yet patched is known as:",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Trojan horse",
      "B": "Backdoor exploit",
      "C": "Logic bomb",
      "D": "Zero-day attack"
    },
    "explanations": {
      "A": "A Trojan disguises malicious software as legitimate software; it is not defined by exploiting an unknown vulnerability.",
      "B": "A backdoor bypasses normal access controls, but the question specifically describes a vulnerability unknown or unpatched by the developer.",
      "C": "A logic bomb activates malicious code when a particular condition is met.",
      "D": "A zero-day attack exploits a vulnerability before a vendor has a patch available, leaving defenders with little or no advance remediation time."
    },
    "tip": "Zero-day = vulnerability exploited before a patch is available. CompTIA A+ 220-1202 - Threats & Vulnerabilities Page 5"
  },
  {
    "topic": "Threats and Vulnerabilities",
    "number": 4,
    "question": "Which term describes falsifying an identifier such as an email address, IP address, MAC address, caller ID, or website to appear as a trusted source?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Phishing",
      "B": "Impersonation",
      "C": "Spoofing",
      "D": "Pretexting"
    },
    "explanations": {
      "A": "Phishing uses deceptive messages to trick users, but falsifying the apparent source identifier itself is spoofing.",
      "B": "Impersonation means pretending to be a trusted person or role, while spoofing specifically falsifies technical identifiers or source information.",
      "C": "Spoofing forges identifying information so malicious traffic or communications appear to come from a trusted source.",
      "D": "Pretexting relies on a fabricated story or scenario to persuade a victim rather than specifically falsifying an identifier."
    },
    "tip": "Spoofing = forging the source identity. CompTIA A+ 220-1202 - Threats & Vulnerabilities Page 6"
  },
  {
    "topic": "Threats and Vulnerabilities",
    "number": 5,
    "question": "Which statements describe an on-path attack? (Select 3 answers)",
    "answers": [
      "A",
      "C",
      "E"
    ],
    "options": {
      "A": "Attackers intercept and modify the packets sent between two communicating devices",
      "B": "Attackers must have physical access to the network infrastructure to execute an on-path attack",
      "C": "Attackers can impersonate one of the communicating parties to alter the communication",
      "D": "An on-path attack may succeed only if at least one of the communicating devices has been compromised",
      "E": "Attackers place themselves on the communication route between two devices"
    },
    "explanations": {
      "A": "An on-path attacker can observe, intercept, and potentially alter traffic flowing between the two endpoints.",
      "B": "Physical access is not always required; attackers can position themselves in the communication path through compromised networks, rogue wireless access, or other techniques.",
      "C": "Because the attacker sits between the parties, they can relay traffic while pretending to each endpoint that they are the other party.",
      "D": "Endpoint compromise is not a strict requirement; manipulation of the network path can be enough.",
      "E": "Being positioned in the traffic path is the central characteristic of an on-path attack."
    },
    "tip": "On-path = attacker gets between two endpoints and can intercept, relay, or alter their traffic. CompTIA A+ 220-1202 - Threats & Vulnerabilities Page 7"
  },
  {
    "topic": "Threats and Vulnerabilities",
    "number": 6,
    "question": "Which cyberattack tests every possible combination of letters, numbers, and symbols to gain unauthorized access?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Replay attack",
      "B": "Brute-force attack",
      "C": "Dictionary attack",
      "D": "Birthday attack"
    },
    "explanations": {
      "A": "A replay attack captures valid data and retransmits it later; it does not systematically guess every credential combination.",
      "B": "A brute-force attack repeatedly tries possible character combinations until the correct password or key is found.",
      "C": "A dictionary attack tries entries from a prepared word list rather than every possible character combination.",
      "D": "A birthday attack exploits collision probability in cryptographic hash functions rather than guessing passwords exhaustively."
    },
    "tip": "Brute force = try combinations; dictionary = try words from a list. CompTIA A+ 220-1202 - Threats & Vulnerabilities Page 8"
  },
  {
    "topic": "Threats and Vulnerabilities",
    "number": 7,
    "question": "Which password attack takes advantage of a predefined list of words?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Birthday attack",
      "B": "Replay attack",
      "C": "Dictionary attack",
      "D": "Brute-force attack"
    },
    "explanations": {
      "A": "A birthday attack targets hash collision probability, not password word lists.",
      "B": "A replay attack reuses captured authentication data instead of guessing passwords from a list.",
      "C": "A dictionary attack tries likely passwords from a predefined list of words, phrases, and common variations.",
      "D": "Brute force systematically tries possible character combinations rather than relying mainly on a predefined word list."
    },
    "tip": "Dictionary attack = password guesses pulled from a word list. CompTIA A+ 220-1202 - Threats & Vulnerabilities Page 9"
  },
  {
    "topic": "Threats and Vulnerabilities",
    "number": 8,
    "question": "Which term best describes a disgruntled employee abusing legitimate access to a company's internal resources?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "APT",
      "B": "Insider threat",
      "C": "Gray hat",
      "D": "Threat actor"
    },
    "explanations": {
      "A": "An advanced persistent threat is a long-term, sophisticated intrusion campaign and does not specifically mean an authorized employee misusing access.",
      "B": "An insider threat comes from someone with legitimate organizational access who misuses that access intentionally or unintentionally.",
      "C": "A gray-hat hacker may probe systems without authorization but is not defined as an employee abusing legitimate internal access.",
      "D": "Threat actor is a broad term for anyone responsible for malicious activity; insider threat is the more specific description here."
    },
    "tip": "Insider threat = risk from someone who already has trusted access. CompTIA A+ 220-1202 - Threats & Vulnerabilities Page 10"
  },
  {
    "topic": "Threats and Vulnerabilities",
    "number": 9,
    "question": "Which vulnerability allows an attacker to inject malicious code into input fields to execute unauthorized commands on a database?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Format string exploit",
      "B": "Buffer overflow",
      "C": "SQL injection",
      "D": "Cross-site scripting"
    },
    "explanations": {
      "A": "A format string exploit abuses unsafe formatting functions in software memory handling, not database query input.",
      "B": "A buffer overflow writes beyond allocated memory and can alter program execution, but it is not specifically database command injection.",
      "C": "SQL injection occurs when untrusted input is incorporated into database queries, allowing attackers to manipulate or execute unintended SQL commands.",
      "D": "XSS injects scripts that execute in a user's web browser rather than issuing unauthorized database commands."
    },
    "tip": "SQL injection attacks the database query; XSS attacks the user's browser. CompTIA A+ 220-1202 - Threats & Vulnerabilities Page 11"
  },
  {
    "topic": "Threats and Vulnerabilities",
    "number": 10,
    "question": "Which statements describe an XSS attack? (Select 3 answers)",
    "answers": [
      "D",
      "E",
      "F"
    ],
    "options": {
      "A": "A user unknowingly submits a forged request to a trusted website",
      "B": "An attack that exploits the trust a website has in the user's web browser",
      "C": "The trusted website executes an action on behalf of the user without their consent",
      "D": "An attacker injects a malicious script into a trusted website",
      "E": "An attack that exploits the trust a user's web browser has in a website",
      "F": "The attacker's script is executed in the user's browser"
    },
    "explanations": {
      "A": "That behavior describes cross-site request forgery, where a victim's browser is tricked into sending an unwanted request.",
      "B": "This is characteristic of CSRF, which abuses a site's trust in an authenticated browser session.",
      "C": "This also describes CSRF rather than XSS.",
      "D": "XSS involves malicious script content being inserted into a trusted web context.",
      "E": "The browser trusts content delivered by the legitimate site, allowing injected script to execute in that trusted context.",
      "F": "XSS payloads execute client-side in the victim's browser, where they may access page data or perform actions in the user's session."
    },
    "tip": "XSS = malicious script from a trusted site executes inside the victim's browser. CompTIA A+ 220-1202 - Threats & Vulnerabilities Page 12"
  },
  {
    "topic": "Threats and Vulnerabilities",
    "number": 11,
    "question": "A BEC attack is a targeted subtype of which broader social engineering attack category?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Smishing",
      "B": "Phishing",
      "C": "Vishing",
      "D": "Pharming"
    },
    "explanations": {
      "A": "Smishing is phishing through SMS or text messages, while BEC primarily uses business email.",
      "B": "Business Email Compromise is a targeted form of phishing that uses deceptive business email to manipulate employees into payments, data disclosure, or other harmful actions.",
      "C": "Vishing uses voice calls or voice messages rather than email.",
      "D": "Pharming redirects users to fraudulent websites through technical manipulation rather than targeted business email deception."
    },
    "tip": "BEC is targeted phishing built around trusted business email relationships. CompTIA A+ 220-1202 - Threats & Vulnerabilities Page 13"
  },
  {
    "topic": "Threats and Vulnerabilities",
    "number": 12,
    "question": "Which cyberattack impersonates executives, vendors, or trusted partners via email to trick organizations into wire transfers or disclosure of sensitive data?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "APT",
      "B": "BEC",
      "C": "TTP",
      "D": "ATO"
    },
    "explanations": {
      "A": "An APT is a prolonged sophisticated intrusion campaign and is not specifically the fraudulent business-email technique described.",
      "B": "Business Email Compromise uses impersonated or compromised business identities to persuade employees to transfer money or disclose sensitive information.",
      "C": "TTP means tactics, techniques, and procedures; it describes how threat actors operate rather than one specific attack.",
      "D": "Account takeover is unauthorized control of an account; although it can support BEC, it is not the attack category described by the scenario."
    },
    "tip": "BEC = trusted-looking business email used to trigger fraudulent actions. CompTIA A+ 220-1202 - Threats & Vulnerabilities Page 14"
  },
  {
    "topic": "Threats and Vulnerabilities",
    "number": 13,
    "question": "Which cybersecurity threat compromises a trusted third-party vendor, software provider, or service in the distribution pipeline to insert malicious code, hardware, or updates?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "On-path attack",
      "B": "Man-in-the-middle attack",
      "C": "Supply chain attack",
      "D": "Insider threat"
    },
    "explanations": {
      "A": "An on-path attack intercepts communication between endpoints rather than compromising a trusted supplier or distribution process.",
      "B": "A man-in-the-middle attack is another name for intercepting communications between parties, not poisoning a supplier's products or updates.",
      "C": "A supply chain attack compromises a trusted vendor, product, service, or update process so malicious components reach downstream customers.",
      "D": "An insider threat originates from someone with trusted access inside an organization, not necessarily from a third-party supply pipeline."
    },
    "tip": "Supply chain attack = compromise the trusted supplier to reach the customer. CompTIA A+ 220-1202 - Threats & Vulnerabilities Page 15"
  },
  {
    "topic": "Threats and Vulnerabilities",
    "number": 14,
    "question": "Network Access Control (NAC) can enforce policies before or after a device gains network access, including checking whether it is patched or virus-free.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "This matches the source: pre-admission NAC can check device health before connection, while post-admission NAC can adjust permissions based on behavior after access.",
      "B": "The statement accurately describes both pre-admission and post-admission NAC."
    },
    "tip": "NAC checks whether a device meets network access rules before or after admission. CompTIA A+ 220-1202 - Threats & Vulnerabilities Page 16"
  },
  {
    "topic": "Threats and Vulnerabilities",
    "number": 15,
    "question": "An asset inventory report is used to identify systems running web server software with recently disclosed critical security flaws. Which vulnerability type is being managed?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Unpatched systems",
      "B": "Zero-day exploits",
      "C": "Non-compliant systems",
      "D": "Configuration drift"
    },
    "explanations": {
      "A": "The inventory helps locate systems running software that requires security fixes, making missing or pending patches the vulnerability being managed.",
      "B": "A zero-day has no vendor patch available yet, while the scenario focuses on identifying systems affected by disclosed flaws that need remediation.",
      "C": "Non-compliance means a device violates a required standard or policy, which is broader than the specific patch-related problem described.",
      "D": "Configuration drift occurs when systems gradually deviate from an approved baseline; it is not the same as missing security patches."
    },
    "tip": "Inventory plus disclosed flaws helps find systems that need patching. CompTIA A+ 220-1202 - Threats & Vulnerabilities Page 17"
  },
  {
    "topic": "Threats and Vulnerabilities",
    "number": 16,
    "question": "Which controls are basic first-line, active defenses that reduce risk from common endpoint vulnerabilities? (Select 2 answers)",
    "answers": [
      "B",
      "E"
    ],
    "options": {
      "A": "Strong passwords",
      "B": "Host-based firewall",
      "C": "Security awareness training",
      "D": "Encryption",
      "E": "Antivirus software"
    },
    "explanations": {
      "A": "Strong passwords are important access controls, but the source identifies active endpoint defenses that directly filter traffic and detect malicious software.",
      "B": "A host-based firewall actively controls inbound and outbound network traffic on the endpoint, reducing exposure to unwanted connections.",
      "C": "Training reduces human error and social-engineering risk, but it is an administrative control rather than an active endpoint defense.",
      "D": "Encryption protects data confidentiality but does not actively detect malware or block network connections.",
      "E": "Antivirus actively scans for, detects, blocks, and removes known or suspicious malicious software on an endpoint."
    },
    "tip": "Endpoint first line: firewall controls traffic; antivirus controls malware. CompTIA A+ 220-1202 - Threats & Vulnerabilities Page 18"
  },
  {
    "topic": "Threats and Vulnerabilities",
    "number": 17,
    "question": "The most critical security risk posed by an EOL system is that newly discovered vulnerabilities will remain permanently unpatched.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "When a product reaches end of life, the vendor generally stops providing security fixes, so newly discovered flaws can remain exposed indefinitely.",
      "B": "The statement correctly identifies the major security danger of continuing to use unsupported EOL systems."
    },
    "tip": "EOL means security updates stop, so future flaws may never receive a patch. CompTIA A+ 220-1202 - Threats & Vulnerabilities Page 19"
  },
  {
    "topic": "Threats and Vulnerabilities",
    "number": 18,
    "question": "Which mobile device deployment model allows employees to use their personal mobile devices to access a company's restricted data and applications?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "COPE",
      "B": "CYOD",
      "C": "BYOD",
      "D": "COBO"
    },
    "explanations": {
      "A": "Corporate-Owned, Personally Enabled devices belong to the organization even though employees may use them for some personal activities.",
      "B": "Choose Your Own Device lets employees select from an approved set of organization-supported devices rather than using any personally owned device.",
      "C": "Bring Your Own Device allows employees to use personally owned phones, tablets, or other devices for approved access to organizational resources.",
      "D": "Corporate-Owned, Business-Only devices are owned by the organization and restricted to business use."
    },
    "tip": "BYOD = the employee owns the device; COPE and COBO = the company owns it."
  },
  {
    "topic": "Ticketing Systems",
    "number": 1,
    "question": "When creating a new help desk ticket in a ticketing system, which basic information is typically required during the initial data collection phase? (Select 3 answers)",
    "answers": [
      "A",
      "C",
      "E"
    ],
    "options": {
      "A": "User information",
      "B": "Expected resolution date",
      "C": "Device information",
      "D": "Escalation levels required",
      "E": "Problem description"
    },
    "explanations": {
      "A": "The ticket needs identifying and contact information for the affected user so support staff know who reported the problem and can follow up.",
      "B": "An expected resolution date is normally determined after the issue is reviewed, prioritized, and assigned. It is not basic information collected at the very beginning.",
      "C": "Hardware or device details help the technician identify the affected system and understand its configuration, location, or asset identity.",
      "D": "Escalation is decided after the issue is assessed. The technician does not normally know the required escalation level during the initial data collection phase.",
      "E": "A clear description records the user's symptoms and the reason for the ticket, giving technicians the information needed to begin troubleshooting."
    },
    "tip": "A new ticket starts with who has the problem, which device is affected, and what the problem is. CompTIA A+ 220-1202 - Ticketing Systems Page 3"
  },
  {
    "topic": "Ticketing Systems",
    "number": 2,
    "question": "A technician is logging a new support ticket. Which item is primarily used to ensure that future reporting can track the frequency of specific, recurring problems?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Issue description",
      "B": "Category",
      "C": "Severity level of the issue",
      "D": "Escalation level"
    },
    "explanations": {
      "A": "The issue description explains the individual problem in free-form text, but descriptions can vary and are harder to group consistently for statistical reporting.",
      "B": "A category places similar tickets into a standardized group. Reports can then count how often each type of issue occurs and reveal recurring problem trends.",
      "C": "Severity records how serious or impactful an issue is. It does not primarily identify the type of recurring problem for frequency reporting.",
      "D": "Escalation level shows which support tier is handling the ticket, not the recurring issue type."
    },
    "tip": "Ticket categories make similar incidents easy to group, count, and report. CompTIA A+ 220-1202 - Ticketing Systems Page 4"
  },
  {
    "topic": "Ticketing Systems",
    "number": 3,
    "question": "A support ticket regarding a system memory failure has been moved from Level 1 to a Level 2 hardware specialist. This action is documented using which specific ticketing system field?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Issue description",
      "B": "Ticket status",
      "C": "Resolution summary",
      "D": "Escalation level"
    },
    "explanations": {
      "A": "The issue description records the symptoms or problem being reported, not the support tier to which the ticket has been transferred.",
      "B": "Ticket status shows the ticket's current state, such as open, pending, or resolved. It does not specifically document movement between support levels.",
      "C": "A resolution summary records how the problem was ultimately fixed or closed. The ticket has only been transferred for additional support.",
      "D": "The escalation level records that the ticket has moved from one support tier to another, such as from Level 1 to a Level 2 specialist."
    },
    "tip": "Moving a ticket to a higher support tier changes its escalation level. CompTIA A+ 220-1202 - Ticketing Systems Page 5"
  },
  {
    "topic": "Ticketing Systems",
    "number": 4,
    "question": "A desktop technician is updating a support ticket with the steps performed to troubleshoot a network printer. Which field should contain a factual, concise summary of these steps?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Issue description",
      "B": "Progress notes",
      "C": "Resolution summary",
      "D": "Escalation level"
    },
    "explanations": {
      "A": "The issue description captures the original problem or symptoms reported by the user. It should not be used as the main running record of troubleshooting work.",
      "B": "Progress notes document the technician's troubleshooting actions, observations, tests, and intermediate results while the ticket is still being worked.",
      "C": "The resolution summary is normally completed when the issue is resolved and describes the final fix, rather than every troubleshooting step taken along the way.",
      "D": "Escalation level identifies the support tier handling the issue and does not contain the technician's troubleshooting history."
    },
    "tip": "Progress notes record what the technician tried; the resolution summary records the final fix."
  },
  {
    "topic": "Web Browser Security",
    "number": 1,
    "question": "Hashing can verify the integrity and authenticity of a downloaded file by comparing its calculated hash with a trusted hash supplied by the software vendor.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "A matching cryptographic hash shows that the downloaded file has the same contents as the trusted reference file and was not altered or corrupted in transit.",
      "B": "The statement correctly describes the file-integrity use of cryptographic hashes given in the quiz."
    },
    "tip": "Matching hashes mean the downloaded file matches the trusted original. CompTIA A+ 220-1202 - Web Browser Security Page 3"
  },
  {
    "topic": "Web Browser Security",
    "number": 2,
    "question": "Browser patching means keeping a browser updated with vendor security patches, bug fixes, and performance improvements; automatic updates from official sources are a security best practice.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The source explains that browser updates close vulnerabilities that malicious websites, scripts, or extensions could exploit.",
      "B": "The statement accurately describes browser patching and why regular updates improve browser security."
    },
    "tip": "Browser updates close known security holes before attackers can keep exploiting them. CompTIA A+ 220-1202 - Web Browser Security Page 4"
  },
  {
    "topic": "Web Browser Security",
    "number": 3,
    "question": "Browser extensions and plug-ins add browser functionality, and security best practices include installing them only from trusted sources, updating them, and removing unnecessary or unsafe components.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The source specifically recommends trusted sources, regular updates, and disabling or removing components that are unnecessary or potentially unsafe.",
      "B": "The statement correctly reflects the security guidance in the quiz."
    },
    "tip": "Every extension increases browser attack surface, so keep only trusted and needed ones. CompTIA A+ 220-1202 - Web Browser Security Page 5"
  },
  {
    "topic": "Web Browser Security",
    "number": 4,
    "question": "A technician is reviewing web browser security configuration. Which setting should be modified to enable secure password storage?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Disable saving form data",
      "B": "Enable password manager",
      "C": "Disable autofill",
      "D": "Clear saved credentials on exit"
    },
    "explanations": {
      "A": "Form-data settings control information entered into forms but do not enable secure storage of login passwords.",
      "B": "The browser password manager is the feature designed to save and manage login credentials securely.",
      "C": "Disabling autofill stops automatic completion of stored information; it does not enable password storage.",
      "D": "Clearing credentials removes stored passwords rather than enabling secure password storage."
    },
    "tip": "Password manager = browser feature for storing and managing login credentials. CompTIA A+ 220-1202 - Web Browser Security Page 6"
  },
  {
    "topic": "Web Browser Security",
    "number": 5,
    "question": "Which network protocol ensures that data exchanged between a web browser and a server is encrypted and protected from interception?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "SFTP",
      "B": "IPsec",
      "C": "SSH",
      "D": "HTTPS"
    },
    "explanations": {
      "A": "SFTP securely transfers files over SSH, but it is not the standard protocol used for normal secure web browsing.",
      "B": "IPsec protects IP network traffic at the network layer and is commonly associated with VPNs, not ordinary browser-to-website sessions.",
      "C": "SSH provides secure remote command-line access and tunneling, not standard web-page delivery.",
      "D": "HTTPS protects web traffic by using HTTP over TLS, encrypting data between the browser and web server."
    },
    "tip": "HTTPS = encrypted HTTP for secure browser-to-server communication. CompTIA A+ 220-1202 - Web Browser Security Page 7"
  },
  {
    "topic": "Web Browser Security",
    "number": 6,
    "question": "What is the standard method for viewing a website's certificate details in most modern browsers?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Right-clicking the web page and selecting the \"Inspect\" option",
      "B": "Hovering over the website's favicon in the tab header",
      "C": "Finding the relevant section in the browser's settings menu",
      "D": "Clicking the padlock or security icon in the browser's address bar"
    },
    "explanations": {
      "A": "Developer inspection tools can show page and network information, but they are not the standard direct method identified by the quiz for certificate details.",
      "B": "The favicon identifies the site visually but does not normally open certificate information.",
      "C": "Certificate settings exist, but they are not the normal site-specific shortcut while visiting a webpage.",
      "D": "The address-bar security indicator provides site connection information and access to the site's certificate details in most modern browsers."
    },
    "tip": "Site certificate details are normally reached from the security icon beside the address. CompTIA A+ 220-1202 - Web Browser Security Page 8"
  },
  {
    "topic": "Web Browser Security",
    "number": 7,
    "question": "A user complains that multiple advertising windows open automatically when visiting websites. Which browser feature should be enabled?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Tracking prevention",
      "B": "Pop-up blocker",
      "C": "Ad blocker",
      "D": "Private-browsing mode"
    },
    "explanations": {
      "A": "Tracking prevention limits cross-site tracking but does not primarily stop new advertising windows from opening.",
      "B": "A pop-up blocker prevents websites from automatically opening unwanted pop-up windows or tabs.",
      "C": "An ad blocker removes or hides advertising content, but the specific problem described is automatically opening windows.",
      "D": "Private mode limits local history and session storage; it does not inherently stop pop-up windows."
    },
    "tip": "New unwanted windows = pop-up blocker; embedded ads = ad blocker. CompTIA A+ 220-1202 - Web Browser Security Page 9"
  },
  {
    "topic": "Web Browser Security",
    "number": 8,
    "question": "A trusted e-commerce site needs a third-party payment gateway window, but the window is blocked. Which browser setting should be adjusted?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Add the site to the pop-up blocker's allowed list",
      "B": "Use private/incognito mode",
      "C": "Disable the browser's ad blocker extension",
      "D": "Enable compatibility view"
    },
    "explanations": {
      "A": "Allowlisting the trusted site permits its required payment pop-up while keeping the blocker active for other sites.",
      "B": "Private mode changes local browsing-data behavior and does not directly solve a pop-up permission problem.",
      "C": "An ad blocker targets advertising content; the source identifies the pop-up blocker as the setting preventing the payment window.",
      "D": "Compatibility view addresses rendering of older sites and is unrelated to permission for a blocked payment pop-up."
    },
    "tip": "If a trusted site needs a legitimate pop-up, allowlist that site instead of disabling protection everywhere. CompTIA A+ 220-1202 - Web Browser Security Page 10"
  },
  {
    "topic": "Web Browser Security",
    "number": 9,
    "question": "A shared workstation automatically signs in to a website under a previous user's account. Which browser maintenance task will prevent this from recurring?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Clear autofill form data",
      "B": "Clear browsing data",
      "C": "Clear saved passwords",
      "D": "Clear the browser cache"
    },
    "explanations": {
      "A": "Autofill data can fill names and form fields, but an existing authenticated session is usually maintained by browsing data such as cookies.",
      "B": "Clearing browsing data removes stored session information such as cookies that can keep the previous user signed in.",
      "C": "Removing saved passwords prevents automatic credential filling, but an existing website session can persist without re-entering a password.",
      "D": "The cache stores website resources such as images and scripts; clearing it does not specifically remove all authentication session data."
    },
    "tip": "Shared PC sign-in problems often involve cookies/session data, so clear browsing data. CompTIA A+ 220-1202 - Web Browser Security Page 11"
  },
  {
    "topic": "Web Browser Security",
    "number": 10,
    "question": "A support technician suspects a web application is loading outdated scripts stored locally. What is the most appropriate step?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Update the application",
      "B": "Reset the browser to default settings",
      "C": "Clear the browser cache",
      "D": "Reinstall the browser"
    },
    "explanations": {
      "A": "The problem described is stale browser-stored content rather than an outdated installed application.",
      "B": "A full reset is unnecessarily broad when the suspected problem is cached scripts.",
      "C": "Clearing the cache forces the browser to retrieve fresh copies of website scripts and other cached resources.",
      "D": "Reinstallation is excessive and does not target the local cached web content described."
    },
    "tip": "Old website files or scripts loading locally = clear the browser cache. CompTIA A+ 220-1202 - Web Browser Security Page 12"
  },
  {
    "topic": "Web Browser Security",
    "number": 11,
    "question": "By default, private-browsing mode:",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Blocks ads or third-party trackers",
      "B": "Encrypts network traffic",
      "C": "Prevents the local storage of browsing history and session data",
      "D": "Hides user activity from websites or ISPs"
    },
    "explanations": {
      "A": "Some browsers add tracking protections, but blocking all ads or trackers is not the defining default behavior of private mode.",
      "B": "Private mode does not replace HTTPS or a VPN and does not automatically encrypt all network traffic.",
      "C": "Private browsing is designed to avoid retaining normal local browsing history and session information after the private session ends.",
      "D": "Websites and network providers can still observe relevant network activity; private mode mainly affects local browser storage."
    },
    "tip": "Private mode hides activity from later users of the device, not from websites or the ISP. CompTIA A+ 220-1202 - Web Browser Security Page 13"
  },
  {
    "topic": "Web Browser Security",
    "number": 12,
    "question": "Which feature allows a user to maintain consistent browser preferences, extensions, and login credentials across multiple devices?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Domain-based login",
      "B": "Sign-in/browser data synchronization",
      "C": "Roaming user profile",
      "D": "Single sign-on authentication"
    },
    "explanations": {
      "A": "A domain login authenticates a user to an organizational domain but is not the browser feature that synchronizes browser data.",
      "B": "Signing into the browser and enabling synchronization can copy supported preferences, extensions, bookmarks, and credentials between the user's devices.",
      "C": "A roaming profile can synchronize operating-system profile data in managed Windows environments, but it is not the browser-specific feature asked here.",
      "D": "SSO reduces repeated authentication across services but does not itself synchronize browser settings and extensions."
    },
    "tip": "Browser sync keeps supported browser data consistent across signed-in devices. CompTIA A+ 220-1202 - Web Browser Security Page 14"
  },
  {
    "topic": "Web Browser Security",
    "number": 13,
    "question": "Which browser feature reduces bandwidth usage and improves page-load performance by stopping embedded advertising media content?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Pop-up blocker",
      "B": "Ad blocker",
      "C": "Private-browsing mode",
      "D": "Proxy server"
    },
    "explanations": {
      "A": "A pop-up blocker stops separate pop-up windows, not the embedded advertising media contained inside webpages.",
      "B": "An ad blocker prevents many embedded advertisements and related resources from loading, reducing transferred content and potentially improving page speed.",
      "C": "Private mode changes local data retention and does not primarily block embedded advertisements.",
      "D": "A proxy routes requests through an intermediary and does not inherently remove advertising content."
    },
    "tip": "Ad blocker stops embedded ad resources; pop-up blocker stops separate windows. CompTIA A+ 220-1202 - Web Browser Security Page 15"
  },
  {
    "topic": "Web Browser Security",
    "number": 14,
    "question": "A technician needs to route a user's browser traffic through a corporate content filter. Which feature should be used?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "VPN connection",
      "B": "Proxy server",
      "C": "Web content filter extension",
      "D": "Firewall rule"
    },
    "explanations": {
      "A": "A VPN can route and encrypt network traffic, but the browser-specific intermediary setting identified in the quiz is a proxy.",
      "B": "A proxy server acts as an intermediary for browser requests and can direct web traffic through a corporate filtering service.",
      "C": "An extension can filter content locally, but the scenario specifically requires routing traffic through the corporate filter.",
      "D": "Firewall rules permit or deny network traffic but do not provide the browser intermediary routing function described."
    },
    "tip": "Proxy settings tell the browser to send web requests through an intermediary server. CompTIA A+ 220-1202 - Web Browser Security Page 16"
  },
  {
    "topic": "Web Browser Security",
    "number": 15,
    "question": "Which protocols are used by Secure DNS implementations to encrypt and protect DNS queries? (Select 2 answers)",
    "answers": [
      "B",
      "E"
    ],
    "options": {
      "A": "IPsec",
      "B": "TLS",
      "C": "SFTP",
      "D": "VPN",
      "E": "HTTPS"
    },
    "explanations": {
      "A": "IPsec can encrypt IP traffic generally, but it is not one of the Secure DNS protocols selected by the source.",
      "B": "DNS over TLS protects DNS queries by carrying them through an encrypted TLS connection.",
      "C": "SFTP securely transfers files and is unrelated to DNS query protection.",
      "D": "A VPN can encrypt traffic through a tunnel, but it is not itself a Secure DNS protocol.",
      "E": "DNS over HTTPS sends DNS requests through encrypted HTTPS connections, protecting the queries from ordinary plaintext observation."
    },
    "tip": "Secure DNS commonly uses DoT (TLS) or DoH (HTTPS). CompTIA A+ 220-1202 - Web Browser Security Page 17"
  },
  {
    "topic": "Web Browser Security",
    "number": 16,
    "question": "Which web browser feature helps prevent ISPs and other intermediaries from viewing which websites are being accessed through DNS lookups?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Proxy settings",
      "B": "Private-browsing mode",
      "C": "Do Not Track setting",
      "D": "Secure DNS"
    },
    "explanations": {
      "A": "A proxy changes where browser requests are sent, but the source specifically identifies encrypted DNS as the feature protecting DNS queries.",
      "B": "Private mode does not hide DNS queries from the network provider.",
      "C": "Do Not Track is a browser privacy preference sent to websites; it does not encrypt DNS lookups.",
      "D": "Secure DNS encrypts DNS queries, reducing the ability of intermediaries to read the domain names requested through ordinary plaintext DNS."
    },
    "tip": "Secure DNS protects the domain-name lookup; HTTPS protects the web session after the lookup. CompTIA A+ 220-1202 - Web Browser Security Page 18"
  },
  {
    "topic": "Web Browser Security",
    "number": 17,
    "question": "Web browser feature management includes enabling, disabling, installing, or removing plug-ins, extensions, and built-in features to enforce security policies and reduce attack surface.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "This matches the source definition: feature management controls browser components to improve security, resource use, policy compliance, and consistency.",
      "B": "The statement accurately describes browser feature management in the supplied quiz."
    },
    "tip": "Fewer unnecessary browser features mean fewer components attackers can target."
  },
  {
    "topic": "Windows Additional Admin Tools",
    "number": 1,
    "question": "A Microsoft Windows application utility used for displaying details about a computer's hardware resources, components, and software environment is known as:",
    "answers": [
      "C"
    ],
    "options": {
      "A": "msconfig.exe",
      "B": "winver.exe",
      "C": "msinfo32.exe",
      "D": "control.exe"
    },
    "explanations": {
      "A": "System Configuration is mainly used to troubleshoot Windows startup and boot behavior; it is not the detailed system-information viewer.",
      "B": "winver displays basic Windows version and build information, not detailed hardware resources, components, and the software environment.",
      "C": "System Information (msinfo32.exe) provides a detailed summary of hardware resources, system components, drivers, and the Windows software environment.",
      "D": "control.exe opens Control Panel, which provides configuration applets rather than one consolidated detailed system-information report."
    },
    "tip": "msinfo32 = detailed System Information; winver = quick Windows version information. CompTIA A+ 220-1202 - Windows Additional Admin Tools Page 3"
  },
  {
    "topic": "Windows Additional Admin Tools",
    "number": 2,
    "question": "Which administrative tool in MS Windows provides detailed graphs of hardware activity (CPU, Memory, Disk, and Network) along with real-time, per-process breakdowns of system resource usage?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "resmon.exe",
      "B": "compmgmt.msc",
      "C": "perfmon.exe",
      "D": "eventvwr.msc"
    },
    "explanations": {
      "A": "Resource Monitor shows detailed live CPU, memory, disk, and network activity and breaks usage down by processes, services, files, and connections.",
      "B": "Computer Management is a multi-tool administrative console and does not provide the detailed real-time resource graphs described.",
      "C": "Performance Monitor is designed around performance counters, graphs, and logged measurements, but the source selects Resource Monitor for detailed per-process CPU, memory, disk, and network activity.",
      "D": "Event Viewer displays Windows event logs for troubleshooting; it does not provide live per-process hardware activity graphs."
    },
    "tip": "resmon = live resource details by process; perfmon = performance counters and longer-term measurements. CompTIA A+ 220-1202 - Windows Additional Admin Tools Page 4"
  },
  {
    "topic": "Windows Additional Admin Tools",
    "number": 3,
    "question": "Which of the following refers to a Microsoft Windows tool designed for troubleshooting system startup problems?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "eventvwr.msc",
      "B": "sysdm.cpl",
      "C": "compmgmt.msc",
      "D": "msconfig.exe"
    },
    "explanations": {
      "A": "Event Viewer can help investigate startup errors after they are logged, but it is not the dedicated startup-configuration troubleshooting utility selected here.",
      "B": "System Properties provides computer name, hardware, performance, restore, and advanced settings rather than startup-mode troubleshooting.",
      "C": "Computer Management combines several administrative utilities but is not specifically designed for controlling troubleshooting startup modes.",
      "D": "System Configuration (msconfig.exe) provides diagnostic startup, selective startup, boot options, and service controls useful for isolating startup problems."
    },
    "tip": "msconfig = System Configuration; use it to isolate Windows boot and startup problems. CompTIA A+ 220-1202 - Windows Additional Admin Tools Page 5"
  },
  {
    "topic": "Windows Additional Admin Tools",
    "number": 4,
    "question": "Which tab of the System Configuration utility in MS Windows includes the option for normal, diagnostic, and selective system startup modes?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "General",
      "B": "Boot",
      "C": "Services",
      "D": "Startup",
      "E": "Tools"
    },
    "explanations": {
      "A": "The General tab contains Normal startup, Diagnostic startup, and Selective startup choices used to control how Windows loads during troubleshooting.",
      "B": "The Boot tab contains operating-system and boot troubleshooting settings such as Safe boot and boot logging, not the three overall startup modes.",
      "C": "The Services tab lists services and lets a technician enable or disable them for troubleshooting.",
      "D": "Startup relates to programs configured to run when Windows starts or the user signs in; it does not contain the Normal/Diagnostic/Selective choices.",
      "E": "The Tools tab provides shortcuts to other Windows administrative utilities."
    },
    "tip": "msconfig General tab = Normal, Diagnostic, and Selective startup. CompTIA A+ 220-1202 - Windows Additional Admin Tools Page 6"
  },
  {
    "topic": "Windows Additional Admin Tools",
    "number": 5,
    "question": "Which of the settings listed below can be managed through the Boot tab of the System Configuration utility in Windows? (Select all that apply)",
    "answers": [
      "A",
      "B",
      "C",
      "D"
    ],
    "options": {
      "A": "Safe boot, including an option to load minimal drivers and services for troubleshooting during system startup",
      "B": "Boot logging, which collects detailed information about the startup process for diagnostic purposes",
      "C": "Selecting the default operating system to load in a multiboot environment",
      "D": "Limits on hardware resources, such as maximum RAM, allocated to the selected OS in a multiboot environment",
      "E": "Startup items, including programs and services set to launch automatically during system boot"
    },
    "explanations": {
      "A": "The Boot tab provides Safe boot choices that can start Windows with a reduced set of drivers and services for troubleshooting.",
      "B": "Boot logging is a Boot-tab troubleshooting option that records driver-loading information during startup.",
      "C": "The Boot tab lists installed boot entries and allows the default operating system to be selected.",
      "D": "Advanced boot options can limit values such as maximum memory for diagnostic or testing purposes.",
      "E": "Startup applications and services are handled through other startup/service management areas, not as a Boot-tab setting in this question."
    },
    "tip": "msconfig Boot tab = Safe boot, boot log, multiboot selection, and advanced boot resource limits. CompTIA A+ 220-1202 - Windows Additional Admin Tools Page 7"
  },
  {
    "topic": "Windows Additional Admin Tools",
    "number": 6,
    "question": "Which of the Microsoft Windows utilities helps recover storage space by deleting unnecessary files and temporary data?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "cleanmgr.exe",
      "B": "dfrgui.exe",
      "C": "compmgmt.msc",
      "D": "diskmgmt.msc"
    },
    "explanations": {
      "A": "Disk Cleanup (cleanmgr.exe) scans for removable temporary and unnecessary files so storage space can be reclaimed.",
      "B": "dfrgui.exe opens Optimize Drives, which optimizes storage performance rather than deleting temporary files.",
      "C": "Computer Management is a general administration console and is not the dedicated disk-cleanup utility.",
      "D": "Disk Management creates and manages partitions and volumes; it does not clean temporary files to free space."
    },
    "tip": "cleanmgr = clean files; dfrgui = optimize drives. CompTIA A+ 220-1202 - Windows Additional Admin Tools Page 8"
  },
  {
    "topic": "Windows Additional Admin Tools",
    "number": 7,
    "question": "Which of the following tools can be used to optimize drive performance in Windows?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "diskmgmt.msc",
      "B": "cleanmgr.exe",
      "C": "dfrgui.exe",
      "D": "compmgmt.msc"
    },
    "explanations": {
      "A": "Disk Management manages disks, partitions, volumes, and drive letters rather than performing drive optimization.",
      "B": "Disk Cleanup frees storage by removing unnecessary files; it does not perform the drive optimization task selected here.",
      "C": "dfrgui.exe opens Optimize Drives, which can optimize storage devices and perform defragmentation where appropriate.",
      "D": "Computer Management contains several administrative tools but is not the dedicated Optimize Drives utility."
    },
    "tip": "dfrgui = Defragment and Optimize Drives. CompTIA A+ 220-1202 - Windows Additional Admin Tools Page 9"
  },
  {
    "topic": "Windows Additional Admin Tools",
    "number": 8,
    "question": "Which of the system utilities in Windows provides access to a hierarchical database that stores low-level system configuration data?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "msconfig.exe",
      "B": "sysdm.cpl",
      "C": "regedit.exe",
      "D": "msinfo32.exe"
    },
    "explanations": {
      "A": "System Configuration changes selected startup and boot settings but is not the editor for Windows' hierarchical configuration database.",
      "B": "System Properties exposes selected Windows system settings rather than direct access to the configuration database.",
      "C": "Registry Editor (regedit.exe) provides access to the Windows Registry, a hierarchical database containing low-level operating-system and application configuration settings.",
      "D": "System Information displays system details in a read-oriented report; it does not provide direct editing access to the Registry."
    },
    "tip": "regedit = Registry Editor; the Registry stores low-level Windows configuration in keys and values."
  },
  {
    "topic": "Windows MMC Snap-ins",
    "number": 1,
    "question": "Event Viewer (eventvwr.msc) is a Windows administrative utility for monitoring system health and troubleshooting problems with applications, the OS, and hardware. It allows browsing Application, System, and Security logs. Application and System events can be Information, Warning, or Error, while Security logs record successful or failed security audit events.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The statement correctly describes Event Viewer. It records and displays Windows event logs that technicians use to investigate application failures, system problems, driver or service issues, and security auditing.",
      "B": "The description matches the purpose of Event Viewer and the common event logs and event types listed in the source."
    },
    "tip": "Event Viewer = eventvwr.msc; check Application and System logs when troubleshooting Windows errors. CompTIA A+ 220-1202 - Windows MMC Snap-ins Page 3"
  },
  {
    "topic": "Windows MMC Snap-ins",
    "number": 2,
    "question": "Which of the following commands in Windows launches the standalone graphical utility used specifically for managing storage devices?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "devmgmt.msc",
      "B": "diskpart.exe",
      "C": "compmgmt.msc",
      "D": "diskmgmt.msc",
      "E": "taskmgr.exe",
      "F": "resmon.exe"
    },
    "explanations": {
      "A": "devmgmt.msc opens Device Manager, which manages hardware devices and drivers rather than disk partitions and volumes.",
      "B": "diskpart.exe is a command-line disk partitioning utility, not the standalone graphical storage-management console requested.",
      "C": "compmgmt.msc opens Computer Management, a larger console that contains several administrative tools, including Disk Management, but it is not the standalone Disk Management command.",
      "D": "diskmgmt.msc opens the graphical Disk Management utility used to initialize disks, create and format volumes, assign drive letters, and manage partitions.",
      "E": "taskmgr.exe opens Task Manager for processes, performance, startup applications, services, and user sessions.",
      "F": "resmon.exe opens Resource Monitor for detailed CPU, memory, disk, and network activity monitoring."
    },
    "tip": "diskmgmt.msc = graphical disk management; diskpart = command-line disk management. CompTIA A+ 220-1202 - Windows MMC Snap-ins Page 4"
  },
  {
    "topic": "Windows MMC Snap-ins",
    "number": 3,
    "question": "Which of the answers listed below refers to a Windows administrative tool used to schedule the launch of programs or scripts at pre-defined times or after specified time intervals?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "taskschd.msc",
      "B": "perfmon.msc",
      "C": "msconfig.exe"
    },
    "explanations": {
      "A": "taskschd.msc opens Task Scheduler, which creates scheduled tasks that run programs, scripts, or actions based on times, intervals, startup, logon, or other triggers.",
      "B": "perfmon.msc opens Performance Monitor, which measures and logs performance counters rather than scheduling programs.",
      "C": "msconfig.exe opens System Configuration for startup and boot troubleshooting; it is not the Windows task-scheduling utility."
    },
    "tip": "taskschd.msc = Task Scheduler; use it when an action must run later or on a recurring trigger. CompTIA A+ 220-1202 - Windows MMC Snap-ins Page 5"
  },
  {
    "topic": "Windows MMC Snap-ins",
    "number": 4,
    "question": "Which Microsoft Windows OS feature allows users to view and manage installed hardware and device drivers?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "devmgmt.msc",
      "B": "appwiz.cpl",
      "C": "compmgmt.msc",
      "D": "lusrmgr.msc",
      "E": "secpol.msc",
      "F": "msconfig.exe"
    },
    "explanations": {
      "A": "devmgmt.msc opens Device Manager, where users can view hardware, inspect device status, update or roll back drivers, disable devices, and troubleshoot hardware.",
      "B": "appwiz.cpl opens Programs and Features for uninstalling or changing installed software, not managing hardware drivers.",
      "C": "Computer Management contains access to multiple administrative tools, but Device Manager is the specific feature used for installed hardware and drivers.",
      "D": "lusrmgr.msc manages local user and group accounts rather than physical devices.",
      "E": "secpol.msc opens Local Security Policy for security settings and policies, not hardware management.",
      "F": "System Configuration is mainly used for boot and startup troubleshooting rather than managing installed device drivers."
    },
    "tip": "devmgmt.msc = Device Manager; think devices, drivers, disable, update, and troubleshoot. CompTIA A+ 220-1202 - Windows MMC Snap-ins Page 6"
  },
  {
    "topic": "Windows MMC Snap-ins",
    "number": 5,
    "question": "A Windows snap-in used to view, export, import, and delete digital certificates for the current user is called:",
    "answers": [
      "A"
    ],
    "options": {
      "A": "certmgr.msc",
      "B": "secpol.msc",
      "C": "lusrmgr.msc",
      "D": "compmgmt.msc"
    },
    "explanations": {
      "A": "certmgr.msc opens Certificate Manager for the current user, allowing certificates to be viewed and certificate stores to be managed.",
      "B": "secpol.msc manages local security policies such as audit and account policies, not the current user certificate stores.",
      "C": "lusrmgr.msc manages local users and groups rather than digital certificates.",
      "D": "Computer Management combines several administrative tools, but it is not the dedicated current-user certificate manager."
    },
    "tip": "certmgr.msc = certificates for the current user. CompTIA A+ 220-1202 - Windows MMC Snap-ins Page 7"
  },
  {
    "topic": "Windows MMC Snap-ins",
    "number": 6,
    "question": "In Microsoft Windows, Local Users and Groups (lusrmgr.msc) is an MMC snap-in for adding or removing users and managing group membership for users who have specific rights and permissions on a Windows system. The Local Users and Groups utility is not included in Home editions of Windows 10 and Windows 11.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The statement correctly describes lusrmgr.msc. It manages local user and group accounts and is associated with professional/business Windows editions rather than Home.",
      "B": "The source specifically states that Local Users and Groups is not included in Windows 10 and Windows 11 Home editions."
    },
    "tip": "lusrmgr.msc = Local Users and Groups; remember that Windows Home does not include this MMC snap-in. CompTIA A+ 220-1202 - Windows MMC Snap-ins Page 8"
  },
  {
    "topic": "Windows MMC Snap-ins",
    "number": 7,
    "question": "Which of the following administrative tools in MS Windows is used to monitor (both in real time and through logged data) how running programs affect a computer’s performance?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "resmon.exe",
      "B": "compmgmt.msc",
      "C": "perfmon.exe",
      "D": "taskmgr.exe"
    },
    "explanations": {
      "A": "Resource Monitor provides detailed real-time resource usage, but the question also emphasizes collecting and reviewing logged performance data.",
      "B": "Computer Management is a general administrative console and is not the dedicated performance counter and logging tool.",
      "C": "Performance Monitor can display performance counters in real time and collect counter data over time, making it useful for analyzing system performance and trends.",
      "D": "Task Manager provides real-time process and resource information but is not the primary tool for creating long-term performance counter logs."
    },
    "tip": "perfmon = performance counters now and over time; Task Manager is mainly a quick live view. CompTIA A+ 220-1202 - Windows MMC Snap-ins Page 9"
  },
  {
    "topic": "Windows MMC Snap-ins",
    "number": 8,
    "question": "Which of the tools listed below allows administrators to configure policies that control system and user settings on a Windows computer?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "msconfig.exe",
      "B": "gpedit.msc",
      "C": "lusrmgr.msc",
      "D": "compmgmt.msc"
    },
    "explanations": {
      "A": "System Configuration controls boot and selected startup troubleshooting options rather than administrative user and computer policies.",
      "B": "gpedit.msc opens Local Group Policy Editor, where administrators configure Computer Configuration and User Configuration policy settings.",
      "C": "Local Users and Groups manages local accounts and group membership, not the broad system and user policy settings described.",
      "D": "Computer Management provides access to several administrative utilities, but Local Group Policy Editor is the specific tool for configuring these policies."
    },
    "tip": "gpedit.msc = Group Policy Editor; use it to enforce local computer and user policy settings."
  },
  {
    "topic": "Windows Networking Features",
    "number": 1,
    "question": "Which answers best describe resource sharing in a Windows domain environment? (Select 3)",
    "answers": [
      "A",
      "C",
      "E"
    ],
    "options": {
      "A": "Centralized access control",
      "B": "Local user-based access control",
      "C": "Active Directory integration",
      "D": "Manual configuration per device",
      "E": "Scalable across many users/devices",
      "F": "Limited to small networks"
    },
    "explanations": {
      "A": "A domain can centrally manage permissions and authentication for shared resources.",
      "B": "This is characteristic of workgroups, where each PC maintains its own local accounts.",
      "C": "Windows domains use Active Directory to centrally manage users, computers, and access.",
      "D": "Domains reduce per-device administration through centralized policies and directory services.",
      "E": "Central management makes domains suitable for larger environments.",
      "F": "That limitation is associated more closely with peer-to-peer workgroups."
    },
    "tip": "Domain = centralized, Active Directory, and scalable. CompTIA A+ 220-1202 - Windows Networking Features Page 3"
  },
  {
    "topic": "Windows Networking Features",
    "number": 2,
    "question": "Which statements are true regarding resource sharing in Windows workgroups? (Select 3)",
    "answers": [
      "A",
      "C",
      "E"
    ],
    "options": {
      "A": "Limited to small networks",
      "B": "Scalable across many users/devices",
      "C": "Manual configuration per device",
      "D": "Active Directory integration",
      "E": "Local user-based access control",
      "F": "Centralized access control"
    },
    "explanations": {
      "A": "Workgroups are peer-to-peer and are best suited to smaller environments.",
      "B": "Without centralized directory management, workgroups become difficult to administer at scale.",
      "C": "Accounts and sharing settings generally must be managed separately on each computer.",
      "D": "Active Directory is a domain feature, not a normal workgroup feature.",
      "E": "Workgroup access commonly relies on local user accounts on individual PCs.",
      "F": "Workgroups do not provide the centralized authentication model of a domain."
    },
    "tip": "Workgroup = local accounts, manual setup, small network. CompTIA A+ 220-1202 - Windows Networking Features Page 4"
  },
  {
    "topic": "Windows Networking Features",
    "number": 3,
    "question": "Which Control Panel paths provide access to resource sharing options? (Select 2)",
    "answers": [
      "C",
      "E"
    ],
    "options": {
      "A": "Network and Internet > Sharing options",
      "B": "Internet Options > Connections > LAN settings",
      "C": "Network and Internet > Network and Sharing Center > Change advanced sharing settings",
      "D": "Devices and Printers > Manage network devices > Sharing options",
      "E": "Network and Sharing Center > Change advanced sharing settings"
    },
    "explanations": {
      "A": "The source does not list this shortened path as the correct Control Panel route.",
      "B": "LAN settings are for proxy/LAN configuration, not Windows resource sharing.",
      "C": "Advanced sharing settings controls discovery and file/printer sharing.",
      "D": "This is not the source-listed sharing path.",
      "E": "Icon view can open Network and Sharing Center directly, then advanced sharing settings."
    },
    "tip": "Sharing controls live behind Network and Sharing Center. CompTIA A+ 220-1202 - Windows Networking Features Page 5"
  },
  {
    "topic": "Windows Networking Features",
    "number": 4,
    "question": "Where are resource sharing options in the Windows 11 Settings app?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Update & Security > Windows Security > Firewall & network protection > Advanced settings",
      "B": "Network & Internet > Status > Network and Sharing Center > Change advanced sharing settings",
      "C": "Devices > Printers & scanners > Manage",
      "D": "Network & internet > Advanced network settings > Advanced sharing settings"
    },
    "explanations": {
      "A": "That path manages firewall security, not general sharing settings.",
      "B": "This reflects an older Windows 10-style route, not the Windows 11 path selected by the source.",
      "C": "This is for printer management.",
      "D": "Windows 11 places advanced sharing controls under Advanced network settings."
    },
    "tip": "Windows 11 sharing = Network & internet > Advanced network settings. CompTIA A+ 220-1202 - Windows Networking Features Page 6"
  },
  {
    "topic": "Windows Networking Features",
    "number": 5,
    "question": "Which advanced sharing feature lets a Windows PC find and be found by other devices on a trusted LAN?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Remote access",
      "B": "SSID broadcast",
      "C": "Network discovery",
      "D": "Guest account"
    },
    "explanations": {
      "A": "Remote access is for connecting to a system remotely, not LAN discovery.",
      "B": "SSID broadcast is a wireless access point feature.",
      "C": "Network discovery controls whether the PC can discover and be visible to other network devices.",
      "D": "A guest account affects user access, not device discovery."
    },
    "tip": "Discovery controls visibility; sharing controls access to resources. CompTIA A+ 220-1202 - Windows Networking Features Page 7"
  },
  {
    "topic": "Windows Networking Features",
    "number": 6,
    "question": "Others can see the PC but cannot access its shared printer. Which advanced sharing feature is most likely disabled?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Network discovery",
      "B": "File and printer sharing",
      "C": "Remote access",
      "D": "Network profile type"
    },
    "explanations": {
      "A": "Discovery is already working because other users can see the PC.",
      "B": "This setting must be enabled to allow network access to shared files and printers.",
      "C": "Remote access is unrelated to ordinary printer sharing.",
      "D": "The profile affects defaults, but the specific sharing switch described is File and printer sharing."
    },
    "tip": "Visible PC but inaccessible printer = check File and printer sharing. CompTIA A+ 220-1202 - Windows Networking Features Page 8"
  },
  {
    "topic": "Windows Networking Features",
    "number": 7,
    "question": "Which advanced sharing feature should be turned off to allow unauthenticated access in a trusted environment?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Administrative access",
      "B": "NTFS permissions",
      "C": "Password-protected sharing",
      "D": "Inbound firewall rules"
    },
    "explanations": {
      "A": "This is not the source-listed advanced sharing control for credential requirements.",
      "B": "NTFS permissions control file-system access but do not disable the network credential prompt by themselves.",
      "C": "Turning it off allows users without a local account/password on the host to access eligible shared resources.",
      "D": "Firewall rules control traffic, not whether Windows requires user credentials for shares."
    },
    "tip": "Password-protected sharing determines whether share access requires credentials. CompTIA A+ 220-1202 - Windows Networking Features Page 9"
  },
  {
    "topic": "Windows Networking Features",
    "number": 8,
    "question": "Which character at the end of a Windows share name marks it as hidden/administrative?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "#",
      "B": "$",
      "C": "?",
      "D": "&"
    },
    "explanations": {
      "A": "A number sign does not create a hidden Windows share.",
      "B": "A trailing dollar sign hides the share from normal network browsing and is used by administrative shares such as C$.",
      "C": "A question mark is not the Windows hidden-share suffix.",
      "D": "An ampersand does not mark a share as administrative."
    },
    "tip": "Dollar sign at the end = hidden share, such as C$ or ADMIN$. CompTIA A+ 220-1202 - Windows Networking Features Page 10"
  },
  {
    "topic": "Windows Networking Features",
    "number": 9,
    "question": "Which option provides access to shared folders in Windows?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Computer Management > System Tools > Shared Folders > Shares",
      "B": "Command line > net share",
      "C": "Windows Tools > Computer Management > System Tools > Shared Folders > Shares",
      "D": "All of the above"
    },
    "explanations": {
      "A": "This is valid, but the question includes several valid methods and therefore expects the combined answer.",
      "B": "This command displays/manages shares, but it is only one of several correct methods.",
      "C": "This Windows 11 route is valid, but not the complete answer.",
      "D": "All three listed methods can be used to view or manage Windows shares."
    },
    "tip": "Shares can be managed graphically in Computer Management or from the command line with net share. CompTIA A+ 220-1202 - Windows Networking Features Page 11"
  },
  {
    "topic": "Windows Networking Features",
    "number": 10,
    "question": "Which Control Panel paths can enable local printer sharing? (Select all that apply)",
    "answers": [
      "A",
      "B",
      "D"
    ],
    "options": {
      "A": "Icon view > Devices and Printers > right-click printer > Printer properties > Sharing",
      "B": "Category view > Hardware and Sound > Devices and Printers > right-click printer > Printer properties > Sharing",
      "C": "Icon view > Devices and Printers > right-click printer > Properties > Sharing",
      "D": "Category view > View devices and printers > right-click printer > Printer properties > Sharing"
    },
    "explanations": {
      "A": "Printer properties contains the Sharing tab used to share the printer.",
      "B": "This is a valid category-view route.",
      "C": "The source requires Printer properties; ordinary device Properties is not the listed route.",
      "D": "This is another valid category-view path to the same Sharing tab."
    },
    "tip": "For printer sharing, open Printer properties—not just generic Properties. CompTIA A+ 220-1202 - Windows Networking Features Page 12"
  },
  {
    "topic": "Windows Networking Features",
    "number": 11,
    "question": "Which Windows 10 Settings path accesses printer sharing configuration?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Devices > Printers & scanners > select printer > Manage > Printer properties > Sharing",
      "B": "Hardware and Sound > Devices and Printers > right-click printer > Printer properties > Sharing",
      "C": "Devices and Printers > right-click printer > Printer properties > Sharing"
    },
    "explanations": {
      "A": "Windows 10 uses Devices > Printers & scanners, then Printer properties and its Sharing tab.",
      "B": "That is a Control Panel path, not a Windows 10 Settings path.",
      "C": "This is also a Control Panel-style route."
    },
    "tip": "Windows 10 printer settings start under Settings > Devices. CompTIA A+ 220-1202 - Windows Networking Features Page 13"
  },
  {
    "topic": "Windows Networking Features",
    "number": 12,
    "question": "Which Windows 11 Settings path accesses printer sharing?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Bluetooth & devices > Printers & scanners > select printer > Printer properties > Sharing",
      "B": "Devices and Printers > right-click printer > Printer properties > Sharing",
      "C": "Hardware and Sound > Devices and Printers > right-click printer > Printer properties > Sharing",
      "D": "Devices > Printers & scanners > Manage > Printer properties > Sharing"
    },
    "explanations": {
      "A": "Windows 11 places printers under Bluetooth & devices.",
      "B": "That is a classic Control Panel route.",
      "C": "This is also Control Panel, not Windows 11 Settings.",
      "D": "Devices is the Windows 10 Settings category; Windows 11 uses Bluetooth & devices."
    },
    "tip": "Windows 11 = Bluetooth & devices; Windows 10 = Devices. CompTIA A+ 220-1202 - Windows Networking Features Page 14"
  },
  {
    "topic": "Windows Networking Features",
    "number": 13,
    "question": "Which protocol is commonly used by Windows servers to share files, printers, and other network resources?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "FTP",
      "B": "SMB",
      "C": "NetBIOS",
      "D": "LDAP"
    },
    "explanations": {
      "A": "FTP transfers files but is not the standard Windows file/printer sharing protocol.",
      "B": "Server Message Block is the primary protocol used for Windows file and printer sharing.",
      "C": "NetBIOS historically supports naming/session services but is not the modern file-sharing protocol itself.",
      "D": "LDAP is used for directory queries, such as with Active Directory."
    },
    "tip": "SMB = Windows shared folders and printers. CompTIA A+ 220-1202 - Windows Networking Features Page 15"
  },
  {
    "topic": "Windows Networking Features",
    "number": 14,
    "question": "What UNC path connects to the Projects share on server FS1?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "//FS1\\Projects",
      "B": ":\\FS1\\Projects",
      "C": "\\\\FS1\\Projects",
      "D": "FS1:\\\\Projects"
    },
    "explanations": {
      "A": "UNC paths use backslashes, not forward slashes, at the beginning.",
      "B": "A colon is used with drive letters, not to begin a UNC path.",
      "C": "UNC syntax begins with two backslashes, followed by server and share names.",
      "D": "A server name is not written as a drive letter with a colon."
    },
    "tip": "UNC format = \\\\Server\\Share. CompTIA A+ 220-1202 - Windows Networking Features Page 16"
  },
  {
    "topic": "Windows Networking Features",
    "number": 15,
    "question": "Mapping a network drive assigns a local drive letter to a remote shared folder and can reconnect it at sign-in.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "That is the purpose and behavior of Windows drive mapping described in the source.",
      "B": "Mapping does create a local drive-letter reference to a remote share."
    },
    "tip": "Mapping turns a UNC share into an easy drive letter such as X:. CompTIA A+ 220-1202 - Windows Networking Features Page 17"
  },
  {
    "topic": "Windows Networking Features",
    "number": 16,
    "question": "What is the correct command-line syntax for mapping a network drive?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "net map Z: \\\\Server\\Share",
      "B": "map drive Z: \\\\Server\\Share",
      "C": "net use Z: \\\\Server\\Share",
      "D": "drive map Z: \\\\Server\\Share"
    },
    "explanations": {
      "A": "net map is not the Windows command used for drive mapping.",
      "B": "This is not valid Windows command syntax.",
      "C": "net use connects a drive letter to a UNC network share.",
      "D": "This is not a valid built-in command."
    },
    "tip": "net use = connect to a network share from Command Prompt. CompTIA A+ 220-1202 - Windows Networking Features Page 18"
  },
  {
    "topic": "Windows Networking Features",
    "number": 17,
    "question": "How should a technician map \\\\Server1\\Documents to drive X?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "File Explorer > right-click \"This PC\" > Map network drive > choose X > enter \\\\Server1\\Documents",
      "B": "Command line > \"map drive X: \\\\Server1\\Documents\"",
      "C": "Right-click shared folder > Pin to Quick access > choose X",
      "D": "Command line > \"net map X: \\\\Server1\\Documents\""
    },
    "explanations": {
      "A": "The Map network drive wizard assigns the chosen drive letter to the UNC share.",
      "B": "map drive is not a valid mapping command.",
      "C": "Pinning to Quick access creates a shortcut, not a mapped drive letter.",
      "D": "The correct command would use net use, not net map."
    },
    "tip": "GUI mapping starts by right-clicking This PC and choosing Map network drive. CompTIA A+ 220-1202 - Windows Networking Features Page 19"
  },
  {
    "topic": "Windows Networking Features",
    "number": 18,
    "question": "Which paths open the interface for allowing apps through Windows Defender Firewall? (Select all that apply)",
    "answers": [
      "A",
      "B",
      "D"
    ],
    "options": {
      "A": "Control Panel category view > System and Security > Allow an app through Windows Firewall",
      "B": "Control Panel icon view > Network and Sharing Center > Windows Defender Firewall > Allow an app or feature",
      "C": "Control Panel category view > Network and Internet > Windows Defender Firewall > Allow an app",
      "D": "Control Panel icon view > Windows Defender Firewall > Allow an app or feature"
    },
    "explanations": {
      "A": "This route opens the allowed-apps interface.",
      "B": "This source-listed path reaches the same allowed-apps screen.",
      "C": "Windows Defender Firewall is under System and Security, not Network and Internet in category view.",
      "D": "Directly opening the firewall applet provides the allowed-apps link."
    },
    "tip": "Allowed apps is for application exceptions; Advanced settings is for detailed firewall rules. CompTIA A+ 220-1202 - Windows Networking Features Page 20"
  },
  {
    "topic": "Windows Networking Features",
    "number": 19,
    "question": "Which paths open Windows Defender Firewall with Advanced Security? (Select 2)",
    "answers": [
      "B",
      "C"
    ],
    "options": {
      "A": "Internet Options > Security > Windows Defender Firewall with Advanced Security",
      "B": "Control Panel category view > System and Security > Windows Defender Firewall > Advanced settings",
      "C": "Control Panel icon view > Windows Defender Firewall > Advanced settings",
      "D": "System and Security > Windows Defender Firewall with Advanced Security",
      "E": "Security and Maintenance > Windows Defender Firewall with Advanced Security"
    },
    "explanations": {
      "A": "Internet Options security zones are separate from the Windows firewall console.",
      "B": "Advanced settings opens the advanced firewall management console.",
      "C": "Icon view provides the same Advanced settings link.",
      "D": "The source requires opening Windows Defender Firewall and then Advanced settings.",
      "E": "Security and Maintenance is not the source-listed path."
    },
    "tip": "Need inbound/outbound rules? Open Windows Defender Firewall > Advanced settings. CompTIA A+ 220-1202 - Windows Networking Features Page 21"
  },
  {
    "topic": "Windows Networking Features",
    "number": 20,
    "question": "What information is required for manual TCP/IP configuration? (Select all that apply)",
    "answers": [
      "A",
      "B",
      "C",
      "F"
    ],
    "options": {
      "A": "IP address",
      "B": "Subnet mask",
      "C": "Default gateway",
      "D": "SSID",
      "E": "MAC address",
      "F": "DNS server address"
    },
    "explanations": {
      "A": "A static host address identifies the device on the IP network.",
      "B": "The mask determines the local network and host portions of the address.",
      "C": "The gateway routes traffic to destinations outside the local subnet.",
      "D": "SSID identifies a Wi-Fi network but is not an IPv4 addressing parameter.",
      "E": "The adapter already has a hardware MAC address; it is not normally entered as part of static TCP/IP configuration.",
      "F": "DNS server addresses are needed for name resolution when configured manually."
    },
    "tip": "Static IPv4 basics = IP, mask, gateway, and DNS. CompTIA A+ 220-1202 - Windows Networking Features Page 22"
  },
  {
    "topic": "Windows Networking Features",
    "number": 21,
    "question": "Which methods open the Network Connections applet showing network adapters? (Select all that apply)",
    "answers": [
      "C",
      "D",
      "E"
    ],
    "options": {
      "A": "Hardware and Sound > Devices and Printers > Network adapters",
      "B": "Device Manager > Network adapters",
      "C": "Run > type \"ncpa.cpl\" > Enter",
      "D": "Network and Internet > Network and Sharing Center > Change adapter settings",
      "E": "Network and Sharing Center > Change adapter settings"
    },
    "explanations": {
      "A": "This is not the Network Connections applet.",
      "B": "Device Manager shows hardware/driver entries, not the Network Connections interface.",
      "C": "ncpa.cpl directly opens Network Connections.",
      "D": "This category-view route opens Network Connections.",
      "E": "Icon view can reach the same adapter list directly."
    },
    "tip": "ncpa.cpl is the quick command for Network Connections. CompTIA A+ 220-1202 - Windows Networking Features Page 23"
  },
  {
    "topic": "Windows Networking Features",
    "number": 22,
    "question": "After opening Network Connections, which path reaches IPv4 settings for a fallback static IP?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Right-click adapter > Properties > Internet Protocol Version 4 (TCP/IPv4) > Properties",
      "B": "Select adapter > Alt > File > Properties",
      "C": "Right-click adapter > Properties > Configure > Advanced",
      "D": "Select adapter > Change settings for this connection > Configure"
    },
    "explanations": {
      "A": "This opens the IPv4 address, gateway, and DNS configuration interface.",
      "B": "This is not the source-selected route to IPv4 configuration.",
      "C": "Configure > Advanced changes adapter hardware/driver properties, not TCP/IP addressing.",
      "D": "Configure opens device properties rather than IPv4 protocol settings."
    },
    "tip": "IP settings are under adapter Properties > TCP/IPv4 > Properties. CompTIA A+ 220-1202 - Windows Networking Features Page 24"
  },
  {
    "topic": "Windows Networking Features",
    "number": 23,
    "question": "Which paths provide an interface for creating network connections? (Select 2)",
    "answers": [
      "B",
      "C"
    ],
    "options": {
      "A": "Control Panel category view > Internet Options > Set up a new connection or network",
      "B": "Control Panel icon view > Network and Sharing Center > Set up a new connection or network",
      "C": "Control Panel category view > View network status and tasks > Set up a new connection or network",
      "D": "Internet Options > General > Set up a new connection or network",
      "E": "Network and Internet > Set up a new connection or network"
    },
    "explanations": {
      "A": "Internet Options is not the source-listed interface for creating Windows network connections.",
      "B": "Network and Sharing Center includes the connection setup wizard.",
      "C": "View network status and tasks opens Network and Sharing Center, where the setup wizard is available.",
      "D": "The General tab does not provide this Windows network setup wizard.",
      "E": "The source requires entering Network and Sharing Center/View network status and tasks."
    },
    "tip": "New Windows connections are created from Network and Sharing Center. CompTIA A+ 220-1202 - Windows Networking Features Page 25"
  },
  {
    "topic": "Windows Networking Features",
    "number": 24,
    "question": "Where can Windows proxy settings be accessed?",
    "answers": [
      "F"
    ],
    "options": {
      "A": "Control Panel > Internet Options > Connections > LAN settings > Proxy server",
      "B": "Windows 10 Settings > Network & Internet > Proxy",
      "C": "Control Panel icon view > Internet Options > Connections > LAN settings > Proxy server",
      "D": "Run > \"inetcpl.cpl\" > Connections > LAN settings > Proxy server",
      "E": "Windows 11 Settings > Network & internet > Proxy",
      "F": "All of the above"
    },
    "explanations": {
      "A": "This is valid, but the question includes multiple valid routes and therefore expects the combined answer.",
      "B": "This is a valid Windows 10 route, but not the complete answer.",
      "C": "This is also valid.",
      "D": "This command opens Internet Properties and is another valid route.",
      "E": "This is a valid Windows 11 route.",
      "F": "Every listed path can reach proxy configuration according to the source."
    },
    "tip": "Proxy settings can be reached through Settings or Internet Properties > Connections. CompTIA A+ 220-1202 - Windows Networking Features Page 26"
  },
  {
    "topic": "Windows Networking Features",
    "number": 25,
    "question": "Which statements describe a private network profile by default? (Select 3)",
    "answers": [
      "B",
      "D",
      "F"
    ],
    "options": {
      "A": "PC remains hidden from other devices",
      "B": "Used for trusted networks such as home/work",
      "C": "PC can't be used for file and printer sharing",
      "D": "PC becomes discoverable to other devices",
      "E": "Used for untrusted networks such as coffee-shop Wi-Fi",
      "F": "PC can be used for file and printer sharing"
    },
    "explanations": {
      "A": "Private profiles are intended to permit discovery on trusted networks.",
      "B": "Private is intended for networks you trust.",
      "C": "Private profiles support file and printer sharing.",
      "D": "Discovery is enabled/appropriate for trusted private networks.",
      "E": "That scenario should use a public profile.",
      "F": "Private networking permits resource sharing when enabled."
    },
    "tip": "Private = trusted, discoverable, sharing-friendly. CompTIA A+ 220-1202 - Windows Networking Features Page 27"
  },
  {
    "topic": "Windows Networking Features",
    "number": 26,
    "question": "Which statements describe a public network profile by default? (Select 3)",
    "answers": [
      "C",
      "E",
      "F"
    ],
    "options": {
      "A": "Used for trusted home/work networks",
      "B": "PC becomes discoverable",
      "C": "PC can't be used for file and printer sharing",
      "D": "PC can be used for file and printer sharing",
      "E": "Used for untrusted networks such as coffee-shop Wi-Fi",
      "F": "PC remains hidden from other devices"
    },
    "explanations": {
      "A": "Trusted networks are normally configured as Private.",
      "B": "Public profiles reduce visibility to protect the system on untrusted networks.",
      "C": "Public defaults restrict sharing to reduce exposure.",
      "D": "That behavior is associated with Private networking.",
      "E": "Public is designed for networks you do not trust.",
      "F": "Network discovery is restricted so the PC is less visible."
    },
    "tip": "Public = untrusted, hidden, sharing restricted. CompTIA A+ 220-1202 - Windows Networking Features Page 28"
  },
  {
    "topic": "Windows Networking Features",
    "number": 27,
    "question": "Which Control Panel paths modify public/private network profile sharing settings? (Select 2)",
    "answers": [
      "B",
      "E"
    ],
    "options": {
      "A": "Internet Options > Connections > LAN settings > Change advanced sharing settings",
      "B": "Category view > View network status and tasks > Change advanced sharing settings",
      "C": "Windows Defender Firewall > expand Private/Public networks > modify network profile settings",
      "D": "System and Security > Check firewall status > expand Private/Public networks",
      "E": "Icon view > Network and Sharing Center > Change advanced sharing settings"
    },
    "explanations": {
      "A": "Internet Options does not host Windows advanced sharing profile controls.",
      "B": "This opens Network and Sharing Center and its profile-specific sharing settings.",
      "C": "Firewall status sections do not replace Advanced sharing settings.",
      "D": "This is a firewall route, not the source-listed sharing-profile interface.",
      "E": "This is the direct icon-view route."
    },
    "tip": "Private/Public sharing behavior is configured in Advanced sharing settings. CompTIA A+ 220-1202 - Windows Networking Features Page 29"
  },
  {
    "topic": "Windows Networking Features",
    "number": 28,
    "question": "File Explorer can browse network resources using a UNC path such as \\\\ComputerName\\SharedFolder.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The source describes File Explorer network navigation and UNC paths beginning with two backslashes.",
      "B": "UNC paths are a standard way to open shared Windows resources in File Explorer."
    },
    "tip": "Type \\\\Computer\\Share into File Explorer to go directly to a network share. CompTIA A+ 220-1202 - Windows Networking Features Page 30"
  },
  {
    "topic": "Windows Networking Features",
    "number": 29,
    "question": "A laptop on a mobile hotspot with a data limit is not downloading a large Windows update. What is the most likely cause?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Firewall is blocking all update traffic",
      "B": "Public profile blocks Windows Update traffic",
      "C": "Connection is set to metered, which pauses large downloads",
      "D": "User manually disabled all Windows updates"
    },
    "explanations": {
      "A": "A firewall block is not the source-indicated reason tied to the data-limited hotspot.",
      "B": "A public profile does not inherently block all Windows Update traffic.",
      "C": "Windows can limit or postpone large downloads on metered connections to conserve data.",
      "D": "The scenario points to the hotspot/data-limit behavior rather than a manual update shutdown."
    },
    "tip": "Metered connection = Windows tries to reduce large data transfers. CompTIA A+ 220-1202 - Windows Networking Features Page 31"
  },
  {
    "topic": "Windows Networking Features",
    "number": 30,
    "question": "Which Windows utility is used to enable or disable a metered connection?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Computer Management",
      "B": "Settings app",
      "C": "Network and Sharing Center",
      "D": "Internet Options"
    },
    "explanations": {
      "A": "Computer Management contains administrative consoles but not the normal metered-network toggle.",
      "B": "Metered connection controls are configured through Windows Settings for the network connection.",
      "C": "This classic applet handles network status/sharing but is not the source answer for the metered toggle.",
      "D": "Internet Options controls browser/proxy-related settings, not the metered connection flag."
    },
    "tip": "Metered connection is a modern network option in the Settings app."
  },
  {
    "topic": "Windows OS Security",
    "number": 1,
    "question": "In Windows 10 and 11, which section of the Windows Security app is used to turn Microsoft Defender Antivirus on or off?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Firewall & network protection",
      "B": "App & browser control",
      "C": "Device security",
      "D": "Virus & threat protection"
    },
    "explanations": {
      "A": "This section manages Microsoft Defender Firewall and network profiles, not antivirus real-time protection.",
      "B": "This section contains reputation-based protection and exploit-related controls, not the main antivirus switch.",
      "C": "Device security focuses on hardware-backed protections such as core isolation and security processors.",
      "D": "Virus & threat protection contains Microsoft Defender Antivirus controls, including protection settings used to enable or disable antivirus features."
    },
    "tip": "Defender Antivirus settings live under Virus & threat protection. CompTIA A+ 220-1202 - Windows OS Security Page 3"
  },
  {
    "topic": "Windows OS Security",
    "number": 2,
    "question": "Which Windows 10/11 feature enables automatic installation of Microsoft Defender Antivirus definitions?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Task Scheduler",
      "B": "Virus & threat protection settings",
      "C": "Windows Update",
      "D": "System Configuration"
    },
    "explanations": {
      "A": "Task Scheduler can automate tasks, but the quiz identifies Windows Update as the normal built-in delivery mechanism for Defender definition updates.",
      "B": "This area configures Defender protection behavior but is not the update service named by the source.",
      "C": "Windows Update automatically obtains and installs Microsoft security intelligence/definition updates along with other supported updates.",
      "D": "System Configuration manages startup and boot troubleshooting settings, not antivirus definition delivery."
    },
    "tip": "Windows Update keeps Defender security intelligence current automatically. CompTIA A+ 220-1202 - Windows OS Security Page 4"
  },
  {
    "topic": "Windows OS Security",
    "number": 3,
    "question": "Which Windows Security section provides the option to manually update Microsoft Defender Antivirus definitions?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Virus & threat protection",
      "B": "Firewall & network protection",
      "C": "App & browser control",
      "D": "Device performance & health"
    },
    "explanations": {
      "A": "The Virus & threat protection area provides protection-update information and a way to check for updated security intelligence manually.",
      "B": "This area configures firewall status, network profiles, and firewall-related settings.",
      "C": "This section manages reputation-based protection and related browser/application security features.",
      "D": "This area reports device health information rather than antivirus definition updates."
    },
    "tip": "Manual Defender definition checks are under Virus & threat protection. CompTIA A+ 220-1202 - Windows OS Security Page 5"
  },
  {
    "topic": "Windows OS Security",
    "number": 4,
    "question": "Which Control Panel paths provide access to turn Windows Defender Firewall on or off? (Select 2)",
    "answers": [
      "D",
      "E"
    ],
    "options": {
      "A": "Control Panel (category view) > Network and Internet > Windows Defender Firewall",
      "B": "Control Panel (icon view) > System and Security > Windows Defender Firewall",
      "C": "Control Panel (category view) > Security and Maintenance > Windows Defender Firewall",
      "D": "Control Panel (icon view) > Windows Defender Firewall",
      "E": "Control Panel (category view) > System and Security > Windows Defender Firewall"
    },
    "explanations": {
      "A": "The source does not identify Network and Internet as the category-view path for this firewall control.",
      "B": "In icon view, Windows Defender Firewall is selected directly rather than through the System and Security category.",
      "C": "Security and Maintenance is not the source-listed path to the firewall control.",
      "D": "In icon view, Windows Defender Firewall appears as a direct Control Panel item.",
      "E": "In category view, Windows Defender Firewall is reached through System and Security."
    },
    "tip": "Icon view goes straight to Windows Defender Firewall; category view goes through System and Security. CompTIA A+ 220-1202 - Windows OS Security Page 6"
  },
  {
    "topic": "Windows OS Security",
    "number": 5,
    "question": "Which Windows Security section contains the option to turn the firewall on or off?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Windows Defender Firewall",
      "B": "Virus & threat protection settings",
      "C": "Device security",
      "D": "Firewall & network protection"
    },
    "explanations": {
      "A": "That is the firewall product/control name, but the Windows Security app section named by the quiz is Firewall & network protection.",
      "B": "This area controls antivirus and malware protection settings.",
      "C": "Device security covers hardware-backed protections.",
      "D": "Firewall & network protection shows firewall status for network profiles and provides controls for enabling or disabling the firewall."
    },
    "tip": "Firewall settings in Windows Security = Firewall & network protection. CompTIA A+ 220-1202 - Windows OS Security Page 7"
  },
  {
    "topic": "Windows OS Security",
    "number": 6,
    "question": "In Windows 10 and 11, where can the advanced firewall interface for creating custom application or port exceptions be accessed?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Control Panel (icon view) > Windows Defender Firewall > Advanced settings > Inbound/Outbound Rules > New Rule...",
      "B": "Control Panel (category view) > System and Security > Windows Defender Firewall > Advanced settings > Inbound/Outbound Rules > New Rule...",
      "C": "Windows Security app > Firewall & network protection > Advanced settings > Inbound/Outbound Rules > New Rule...",
      "D": "Any of the above paths"
    },
    "explanations": {
      "A": "This path is valid, but it is not the only valid path listed.",
      "B": "This path is also valid, but the question offers a choice covering all valid paths.",
      "C": "This is another valid route to the advanced firewall rule interface.",
      "D": "All three listed routes can lead to the advanced Windows Defender Firewall interface where inbound or outbound rules can be created."
    },
    "tip": "Advanced firewall exceptions are created as inbound or outbound rules. CompTIA A+ 220-1202 - Windows OS Security Page 8"
  },
  {
    "topic": "Windows OS Security",
    "number": 7,
    "question": "Which path can access the simplified interface for allowing or blocking applications across private or public networks?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Control Panel (icon view) > Windows Defender Firewall > Allow an app or feature through Windows Defender Firewall",
      "B": "Control Panel (category view) > System and Security > Windows Defender Firewall > Allow an app or feature through Windows Defender Firewall",
      "C": "Windows Security app > Firewall & network protection > Allow an app through the firewall",
      "D": "Any of the above"
    },
    "explanations": {
      "A": "This is a valid route, but it is not the only one listed.",
      "B": "This is also a valid Control Panel route.",
      "C": "This route also opens the simplified allowed-apps interface.",
      "D": "Each listed path can reach the interface used to permit applications through the firewall on selected network profiles."
    },
    "tip": "Allow an app is the simple interface; Advanced settings is for detailed rules. CompTIA A+ 220-1202 - Windows OS Security Page 9"
  },
  {
    "topic": "Windows OS Security",
    "number": 8,
    "question": "Which type of Windows account is primarily used for an offline, single-device setup?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Microsoft account",
      "B": "Local account",
      "C": "Domain account",
      "D": "Administrator account"
    },
    "explanations": {
      "A": "A Microsoft account is cloud-connected and can synchronize services and settings across Microsoft products and devices.",
      "B": "A local account is stored on the individual computer and can be used without relying on a Microsoft cloud identity.",
      "C": "A domain account is centrally managed by an organization through a domain environment.",
      "D": "Administrator describes a privilege level and can apply to different account contexts; it does not specifically mean offline single-device identity."
    },
    "tip": "Local account = credentials stored for that PC rather than a cloud identity. CompTIA A+ 220-1202 - Windows OS Security Page 10"
  },
  {
    "topic": "Windows OS Security",
    "number": 9,
    "question": "Which answer refers to an SSO account type in Windows?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Local account",
      "B": "Microsoft account",
      "C": "Administrator account",
      "D": "Standard account"
    },
    "explanations": {
      "A": "A local account is tied to one computer and does not inherently provide cloud single sign-on.",
      "B": "A Microsoft account can provide a shared identity across Microsoft services, supporting single sign-on experiences such as Microsoft 365, OneDrive, and the Store.",
      "C": "Administrator identifies elevated privileges rather than an SSO identity type.",
      "D": "Standard account describes permissions and does not by itself provide SSO across services."
    },
    "tip": "Microsoft account can connect one sign-in to multiple Microsoft services. CompTIA A+ 220-1202 - Windows OS Security Page 11"
  },
  {
    "topic": "Windows OS Security",
    "number": 10,
    "question": "Which Windows group can use most software and change settings that do not affect other users or computer security?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Standard Users",
      "B": "Guests",
      "C": "Power Users",
      "D": "Administrators"
    },
    "explanations": {
      "A": "Standard Users can run most applications and make personal or non-security-sensitive changes without having full administrative control.",
      "B": "Guest accounts have more restricted capabilities and are intended for temporary users.",
      "C": "Power Users is a legacy compatibility group with limited elevated rights, not the normal least-privileged user group.",
      "D": "Administrators have broad system-wide privileges beyond the limits described."
    },
    "tip": "Standard Users handle everyday work without full administrator rights. CompTIA A+ 220-1202 - Windows OS Security Page 12"
  },
  {
    "topic": "Windows OS Security",
    "number": 11,
    "question": "Which built-in Windows account type has complete and unrestricted access to a computer or domain?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Account Operators",
      "B": "Power Users",
      "C": "Network Configuration Operators",
      "D": "Administrators"
    },
    "explanations": {
      "A": "Account Operators can perform certain account-management tasks in applicable domain environments but do not have unrestricted control.",
      "B": "Power Users is a legacy group with limited administrative capabilities.",
      "C": "This group has permissions related mainly to network configuration, not complete system access.",
      "D": "Members of the Administrators group have broad elevated privileges to configure the system and perform protected administrative tasks."
    },
    "tip": "Administrators = full elevated Windows management rights. CompTIA A+ 220-1202 - Windows OS Security Page 13"
  },
  {
    "topic": "Windows OS Security",
    "number": 12,
    "question": "The Windows Guest account is intended for temporary users and should generally remain disabled unless specifically needed.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "This matches the source, which describes the Guest account as limited but still capable of network, Internet, and shutdown access, making unnecessary enablement a security risk.",
      "B": "The source explicitly recommends keeping the Guest account disabled unless temporarily required."
    },
    "tip": "Disable unused accounts, especially shared or guest access. CompTIA A+ 220-1202 - Windows OS Security Page 14"
  },
  {
    "topic": "Windows OS Security",
    "number": 13,
    "question": "Which Windows 10/11 user group is largely a legacy local group with limited administrative rights retained for backward compatibility?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Standard Users",
      "B": "Replicators",
      "C": "Account Operators",
      "D": "Power Users"
    },
    "explanations": {
      "A": "Standard Users is the normal non-administrative group, not the legacy compatibility group.",
      "B": "Replicators is a specialized legacy group related to file replication, not general limited administration.",
      "C": "Account Operators is associated with delegated account-management functions in domain environments.",
      "D": "Power Users is a legacy local group retained mainly for compatibility with older applications and Windows versions."
    },
    "tip": "Power Users is mostly a legacy compatibility group. CompTIA A+ 220-1202 - Windows OS Security Page 15"
  },
  {
    "topic": "Windows OS Security",
    "number": 14,
    "question": "Which Windows authentication method is device-independent, allowing users to log into different systems with the same credentials?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "PIN",
      "B": "Username and password",
      "C": "Windows Hello",
      "D": "Fingerprint"
    },
    "explanations": {
      "A": "A Windows Hello PIN is tied to a specific device and is stored/protected locally.",
      "B": "A username/password credential can be used with the same account across supported systems because it is not inherently bound to one physical device.",
      "C": "Windows Hello credentials are designed around device-specific authentication and can include PIN or biometrics.",
      "D": "A fingerprint sign-in is typically enrolled and protected on a particular device rather than serving as the same portable credential everywhere."
    },
    "tip": "Password credentials can travel with the account; a Windows Hello PIN stays tied to its device. CompTIA A+ 220-1202 - Windows OS Security Page 16"
  },
  {
    "topic": "Windows OS Security",
    "number": 15,
    "question": "Which Windows sign-in method uses a device-specific code stored locally and not transmitted over the network?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Username and password",
      "B": "PIN",
      "C": "Security key",
      "D": "Passwordless authentication"
    },
    "explanations": {
      "A": "A password authenticates the account and may be verified against a remote identity service; it is not the device-bound code described.",
      "B": "A Windows Hello PIN is tied to the specific device and is verified locally using protected device security rather than being sent as a reusable network password.",
      "C": "A security key is a separate hardware authenticator, not the locally stored numeric/alphanumeric device code requested.",
      "D": "Passwordless authentication is a broad category that can include PINs, biometrics, and security keys, not one specific sign-in method."
    },
    "tip": "Windows Hello PIN = device-specific, unlike a reusable account password. CompTIA A+ 220-1202 - Windows OS Security Page 17"
  },
  {
    "topic": "Windows OS Security",
    "number": 16,
    "question": "Which are built-in biometric authentication options in Windows 10 and 11? (Select all that apply)",
    "answers": [
      "A",
      "E"
    ],
    "options": {
      "A": "Fingerprint",
      "B": "Smart card sign-in",
      "C": "Voice recognition",
      "D": "Retina scan",
      "E": "Facial recognition"
    },
    "explanations": {
      "A": "Windows Hello supports fingerprint recognition when compatible fingerprint hardware is present.",
      "B": "A smart card is a possession-based authentication method, not a biometric characteristic.",
      "C": "Voice recognition is not one of the built-in Windows Hello biometric sign-in options identified by the source.",
      "D": "The source does not list retinal scanning as a built-in Windows Hello option.",
      "E": "Windows Hello supports facial recognition using compatible cameras and sensors."
    },
    "tip": "Windows Hello built-in biometrics = face and fingerprint. CompTIA A+ 220-1202 - Windows OS Security Page 18"
  },
  {
    "topic": "Windows OS Security",
    "number": 17,
    "question": "A Windows 11 user wants one login to provide automatic access to Microsoft 365, OneDrive, and Microsoft Store. Which feature enables this?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Domain-based authentication",
      "B": "Biometric authentication",
      "C": "Single sign-on authentication",
      "D": "Passwordless authentication"
    },
    "explanations": {
      "A": "Domain authentication can provide centralized organizational sign-in but does not specifically describe the Microsoft-service experience in the question.",
      "B": "Biometrics can authenticate the user but do not themselves create the one-login/multiple-services relationship.",
      "C": "Single sign-on lets one authenticated identity be reused across connected services so credentials do not need to be entered repeatedly.",
      "D": "Passwordless changes how authentication occurs, but it does not inherently mean one login automatically authenticates multiple services."
    },
    "tip": "SSO = authenticate once and reuse that trusted session across connected services. CompTIA A+ 220-1202 - Windows OS Security Page 19"
  },
  {
    "topic": "Windows OS Security",
    "number": 18,
    "question": "Windows Hello provides which passwordless sign-in options? (Select all that apply)",
    "answers": [
      "A",
      "B",
      "D"
    ],
    "options": {
      "A": "PIN-based sign-in",
      "B": "Fingerprint scan",
      "C": "Voice recognition",
      "D": "Facial recognition"
    },
    "explanations": {
      "A": "Windows Hello supports a device-bound PIN as a passwordless sign-in method.",
      "B": "Windows Hello supports fingerprint biometrics on compatible devices.",
      "C": "Voice recognition is not listed by the source as a Windows Hello sign-in option.",
      "D": "Windows Hello supports facial recognition with compatible camera hardware."
    },
    "tip": "Windows Hello commonly uses PIN, fingerprint, or face. CompTIA A+ 220-1202 - Windows OS Security Page 20"
  },
  {
    "topic": "Windows OS Security",
    "number": 19,
    "question": "\"Run as administrator\" launches a program with elevated privileges and may require administrator approval or credentials.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "This matches the source description: elevation allows protected tasks such as software installation or system changes that standard privileges cannot perform.",
      "B": "The statement correctly describes the purpose and behavior of Run as administrator."
    },
    "tip": "Run as administrator elevates one program rather than changing the user into an administrator permanently. CompTIA A+ 220-1202 - Windows OS Security Page 21"
  },
  {
    "topic": "Windows OS Security",
    "number": 20,
    "question": "Which Windows security feature prompts for administrator approval or credentials when a task requires elevated permissions?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "ACL",
      "B": "UAC",
      "C": "AppLocker",
      "D": "SmartScreen Filter"
    },
    "explanations": {
      "A": "An ACL defines permissions on objects such as files and folders; it does not generate elevation prompts.",
      "B": "User Account Control limits routine administrative privilege use and displays consent or credential prompts when an action requires elevation.",
      "C": "AppLocker controls which applications, scripts, and installers are allowed to run.",
      "D": "SmartScreen helps protect users from malicious or untrusted applications and websites through reputation checks."
    },
    "tip": "UAC = the elevation prompt that appears before protected system changes. CompTIA A+ 220-1202 - Windows OS Security Page 22"
  },
  {
    "topic": "Windows OS Security",
    "number": 21,
    "question": "Which Windows feature enables encryption of entire drives?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "FileVault",
      "B": "DriveCrypt",
      "C": "BitLocker",
      "D": "TrueCrypt"
    },
    "explanations": {
      "A": "FileVault is Apple macOS full-disk encryption, not the Windows feature requested.",
      "B": "DriveCrypt is not the built-in Windows full-drive encryption feature identified by the source.",
      "C": "BitLocker is Microsoft's built-in Windows technology for encrypting entire supported volumes to protect data at rest.",
      "D": "TrueCrypt was a third-party encryption product and is not the built-in Windows feature."
    },
    "tip": "BitLocker = Windows full-drive encryption. CompTIA A+ 220-1202 - Windows OS Security Page 23"
  },
  {
    "topic": "Windows OS Security",
    "number": 22,
    "question": "Which Microsoft Windows feature is specifically designed to encrypt removable drives?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "BitLocker",
      "B": "TrueCrypt",
      "C": "BitLocker To Go",
      "D": "DriveCrypt"
    },
    "explanations": {
      "A": "BitLocker is the broader drive-encryption technology; the removable-drive implementation has a specific name.",
      "B": "TrueCrypt is not the built-in Microsoft removable-drive feature.",
      "C": "BitLocker To Go extends BitLocker encryption specifically to removable storage such as USB flash drives.",
      "D": "DriveCrypt is not the Microsoft feature identified by the source."
    },
    "tip": "BitLocker To Go = BitLocker for removable storage. CompTIA A+ 220-1202 - Windows OS Security Page 24"
  },
  {
    "topic": "Windows OS Security",
    "number": 23,
    "question": "Which built-in Windows component enables encryption of individual files?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "AES",
      "B": "HSM",
      "C": "EFS",
      "D": "TPM"
    },
    "explanations": {
      "A": "AES is an encryption algorithm, not the Windows file-level encryption component.",
      "B": "A Hardware Security Module protects cryptographic keys and operations; it is not the Windows file encryption feature.",
      "C": "Encrypting File System integrates with NTFS to encrypt individual files and folders rather than an entire volume.",
      "D": "A Trusted Platform Module securely stores cryptographic material and supports features such as BitLocker, but it does not itself provide per-file encryption."
    },
    "tip": "EFS = individual NTFS files/folders; BitLocker = entire drive."
  },
  {
    "topic": "Windows OS Troubleshooting",
    "number": 1,
    "question": "The Blue Screen of Death (BSoD) appears when Windows encounters a critical error it cannot safely recover from, and a restart is required for recovery.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The source explains that a BSoD is a Windows stop error caused by a critical failure. Windows must restart before normal operation can continue.",
      "B": "This contradicts the source description of a BSoD and its required recovery through a system restart."
    },
    "tip": "BSoD = critical Windows stop error; record the stop code before restarting when possible. CompTIA A+ 220-1202 - Windows OS Troubleshooting Page 3"
  },
  {
    "topic": "Windows OS Troubleshooting",
    "number": 2,
    "question": "Which tool can identify resource-intensive applications that cause degraded performance in Windows?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Event Viewer",
      "B": "Windows Memory Diagnostic",
      "C": "System Information",
      "D": "Task Manager"
    },
    "explanations": {
      "A": "Event Viewer records system and application events but is not the primary real-time tool for seeing which applications are consuming the most CPU, memory, disk, or network resources.",
      "B": "Windows Memory Diagnostic tests RAM for faults rather than showing application resource usage.",
      "C": "System Information inventories hardware and software configuration but does not provide the same live per-process resource view.",
      "D": "Task Manager displays running applications and processes with CPU, memory, disk, and network usage, making resource-heavy programs easy to identify."
    },
    "tip": "Slow PC? Task Manager quickly shows which process is using the resources. CompTIA A+ 220-1202 - Windows OS Troubleshooting Page 4"
  },
  {
    "topic": "Windows OS Troubleshooting",
    "number": 3,
    "question": "Which actions are most likely to resolve a Windows boot issue caused by the system attempting to start from an incorrect device? (Select 2 answers)",
    "answers": [
      "B",
      "E"
    ],
    "options": {
      "A": "Disabling Secure Boot in UEFI",
      "B": "Updating the boot order in BIOS",
      "C": "Running Startup Repair from WinRE",
      "D": "Booting into Safe Mode",
      "E": "Disconnecting removable drives"
    },
    "explanations": {
      "A": "Secure Boot validates trusted boot software; disabling it does not correct an incorrect boot-device selection.",
      "B": "Correcting the BIOS/UEFI boot order makes the computer try the intended system drive before other devices.",
      "C": "Startup Repair addresses Windows startup failures, but it is unnecessary when firmware is simply choosing the wrong boot device.",
      "D": "Safe Mode is useful after Windows begins loading; it does not fix firmware selecting another boot device first.",
      "E": "Removing USB or other removable boot media prevents the system from accidentally trying those devices before the Windows drive."
    },
    "tip": "Wrong boot device = check boot order and remove unintended bootable media. CompTIA A+ 220-1202 - Windows OS Troubleshooting Page 5"
  },
  {
    "topic": "Windows OS Troubleshooting",
    "number": 4,
    "question": "Which WinRE tool is specifically designed to automatically recover from operating-system boot failures?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "System Restore",
      "B": "Safe Mode",
      "C": "System Image Recovery",
      "D": "Startup Repair"
    },
    "explanations": {
      "A": "System Restore rolls system files and settings back to a restore point; it is not the dedicated automatic startup-repair tool.",
      "B": "Safe Mode starts Windows with minimal drivers and services for diagnosis but does not automatically repair startup files.",
      "C": "System Image Recovery restores an entire saved image and is much broader than automatic boot repair.",
      "D": "Startup Repair is designed to diagnose and automatically repair common problems that prevent Windows from starting."
    },
    "tip": "WinRE Startup Repair targets Windows boot failures automatically. CompTIA A+ 220-1202 - Windows OS Troubleshooting Page 6"
  },
  {
    "topic": "Windows OS Troubleshooting",
    "number": 5,
    "question": "During boot, Windows reports \"Boot Configuration Data file is missing some required information.\" Which command should be used?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "bootrec /scanos",
      "B": "bootrec /rebuildbcd",
      "C": "bootrec /fixmbr",
      "D": "bootrec /fixboot"
    },
    "explanations": {
      "A": "This scans disks for Windows installations that are not currently listed in the BCD store but does not rebuild the BCD itself.",
      "B": "This scans for Windows installations and rebuilds the Boot Configuration Data store, directly addressing missing or damaged BCD information.",
      "C": "This writes a new master boot record and targets MBR corruption rather than missing BCD entries.",
      "D": "This writes a new boot sector and is used for boot-sector problems, not specifically rebuilding BCD data."
    },
    "tip": "Missing or corrupted BCD = bootrec /rebuildbcd. CompTIA A+ 220-1202 - Windows OS Troubleshooting Page 7"
  },
  {
    "topic": "Windows OS Troubleshooting",
    "number": 6,
    "question": "A Windows system powers off unexpectedly after a GPU driver update. Which utility can manually roll back the specific driver?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "System Restore",
      "B": "Windows Update",
      "C": "Control Panel",
      "D": "Device Manager"
    },
    "explanations": {
      "A": "System Restore can reverse broader system changes, but it is not the direct utility for rolling back one device driver.",
      "B": "Windows Update installs updates and drivers; it is not the primary interface for selecting Roll Back Driver.",
      "C": "Control Panel provides many settings but the driver rollback control is located in the device's properties in Device Manager.",
      "D": "Device Manager lets a technician open the GPU properties and use the Driver tab's Roll Back Driver option."
    },
    "tip": "Individual hardware driver problem = Device Manager. CompTIA A+ 220-1202 - Windows OS Troubleshooting Page 8"
  },
  {
    "topic": "Windows OS Troubleshooting",
    "number": 7,
    "question": "A Windows desktop restarts several times a day without displaying a blue screen. Which utility can review detailed system logs to determine the cause?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Event Viewer",
      "B": "Reliability Monitor",
      "C": "System Information",
      "D": "Windows Registry"
    },
    "explanations": {
      "A": "Event Viewer records detailed Windows system, application, and service events, including errors around unexpected restarts.",
      "B": "Reliability Monitor gives an excellent timeline summary of failures, but the question asks for detailed system logs.",
      "C": "System Information reports configuration details rather than chronological error logs.",
      "D": "The Registry stores configuration settings and is not the standard troubleshooting log viewer."
    },
    "tip": "Detailed Windows error logs = Event Viewer. CompTIA A+ 220-1202 - Windows OS Troubleshooting Page 9"
  },
  {
    "topic": "Windows OS Troubleshooting",
    "number": 8,
    "question": "A Windows 11 computer restarts randomly and corrupted system files are suspected. Which command-line tool should verify and repair them?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "diskpart /rescan",
      "B": "chkdsk /f",
      "C": "sfc /scannow",
      "D": "bootrec /rebuildbcd"
    },
    "explanations": {
      "A": "DiskPart rescan detects storage-disk changes and does not validate protected Windows system files.",
      "B": "CHKDSK repairs filesystem errors on a volume, not corrupted protected Windows system files.",
      "C": "System File Checker scans protected Windows system files and replaces corrupted copies when possible.",
      "D": "Bootrec rebuilds boot configuration data and is intended for boot-record problems."
    },
    "tip": "Corrupt Windows system files = sfc /scannow. CompTIA A+ 220-1202 - Windows OS Troubleshooting Page 10"
  },
  {
    "topic": "Windows OS Troubleshooting",
    "number": 9,
    "question": "A Windows desktop powers off randomly only when non-Microsoft services are loaded, and the issue does not occur in Safe Mode. What should be done to isolate the cause?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Run a full antivirus scan",
      "B": "End background processes in Task Manager",
      "C": "Roll back the latest Windows update",
      "D": "Perform a clean boot"
    },
    "explanations": {
      "A": "Malware is one possible cause, but the symptom specifically points toward a third-party service or startup component.",
      "B": "Ending processes one at a time is less systematic and may not reproduce startup conditions.",
      "C": "The evidence points to non-Microsoft services rather than a Windows update.",
      "D": "A clean boot starts Windows with Microsoft services while disabling nonessential third-party services and startup items, allowing the technician to isolate the conflicting component."
    },
    "tip": "Works in Safe Mode but fails with third-party services = use a clean boot to isolate them. CompTIA A+ 220-1202 - Windows OS Troubleshooting Page 11"
  },
  {
    "topic": "Windows OS Troubleshooting",
    "number": 10,
    "question": "Which Windows diagnostic tool provides a timeline of system events and failures, including unexpected shutdowns?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Reliability Monitor",
      "B": "Event Viewer",
      "C": "Performance Monitor",
      "D": "Resource Monitor"
    },
    "explanations": {
      "A": "Reliability Monitor presents a chronological stability history showing application failures, Windows failures, updates, and unexpected shutdowns.",
      "B": "Event Viewer provides detailed event logs, but the source identifies Reliability Monitor for a visual timeline of reliability events.",
      "C": "Performance Monitor tracks counters and performance data rather than presenting the same failure timeline.",
      "D": "Resource Monitor shows current CPU, memory, disk, and network activity, not a historical reliability timeline."
    },
    "tip": "Reliability Monitor = visual timeline; Event Viewer = detailed logs. CompTIA A+ 220-1202 - Windows OS Troubleshooting Page 12"
  },
  {
    "topic": "Windows OS Troubleshooting",
    "number": 11,
    "question": "The \"Disable automatic restart on system failure\" option prevents an immediate reboot after a blue screen so the stop code can be viewed.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Disabling automatic restart keeps the stop screen visible, giving the technician time to read and record diagnostic information.",
      "B": "The statement accurately describes the purpose of this Windows startup option."
    },
    "tip": "Disable automatic restart when the BSoD disappears too quickly to read. CompTIA A+ 220-1202 - Windows OS Troubleshooting Page 13"
  },
  {
    "topic": "Windows OS Troubleshooting",
    "number": 12,
    "question": "Windows Services (services.msc) can start, stop, pause, and resume services, configure recovery actions, and show service dependencies.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The source describes these controls in a service's Properties window, including General, Recovery, and Dependencies tabs.",
      "B": "The statement accurately describes the management and troubleshooting capabilities of services.msc."
    },
    "tip": "services.msc manages service state, startup behavior, recovery, and dependencies. CompTIA A+ 220-1202 - Windows OS Troubleshooting Page 14"
  },
  {
    "topic": "Windows OS Troubleshooting",
    "number": 13,
    "question": "Which Windows utility is the primary source for reviewing detailed information regarding application crashes?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Resource Monitor",
      "B": "Task Manager",
      "C": "Performance Monitor",
      "D": "Event Viewer"
    },
    "explanations": {
      "A": "Resource Monitor shows live resource usage but is not the primary repository for application crash events.",
      "B": "Task Manager can show or terminate a failed process but does not provide the detailed historical crash records requested.",
      "C": "Performance Monitor collects performance counters and does not serve as the main application-crash log.",
      "D": "Event Viewer stores Application log entries with error details that can identify the crashing program, module, and related event information."
    },
    "tip": "Application crash details are recorded in Event Viewer. CompTIA A+ 220-1202 - Windows OS Troubleshooting Page 15"
  },
  {
    "topic": "Windows OS Troubleshooting",
    "number": 14,
    "question": "A persistent application crash requires the application to be completely reinstalled. Which Windows utility provides access to this procedure?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Windows Troubleshooter",
      "B": "System Configuration",
      "C": "Registry Editor",
      "D": "Programs and Features"
    },
    "explanations": {
      "A": "Troubleshooters diagnose selected problems but are not the normal interface for uninstalling an application before reinstalling it.",
      "B": "System Configuration controls startup and boot troubleshooting settings, not installed-program removal.",
      "C": "Manually editing the Registry is not the recommended application uninstall/reinstall procedure.",
      "D": "Programs and Features provides the interface for uninstalling installed desktop applications so they can be cleanly reinstalled."
    },
    "tip": "Traditional desktop app uninstall/reinstall starts with Programs and Features. CompTIA A+ 220-1202 - Windows OS Troubleshooting Page 16"
  },
  {
    "topic": "Windows OS Troubleshooting",
    "number": 15,
    "question": "In Windows, what is the reserved portion of storage used for data that cannot remain in RAM because memory space is insufficient?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Memory buffer",
      "B": "System cache",
      "C": "Paging file",
      "D": "Swap partition"
    },
    "explanations": {
      "A": "A buffer temporarily holds data during transfers and is not Windows disk-backed virtual memory.",
      "B": "The system cache stores frequently used data to improve performance, not overflow memory pages in the sense asked here.",
      "C": "The paging file is disk space Windows uses as virtual memory when physical RAM cannot hold all active memory pages.",
      "D": "A dedicated swap partition is common in Linux/Unix systems; Windows normally uses a paging file."
    },
    "tip": "Windows virtual-memory overflow goes to the paging file. CompTIA A+ 220-1202 - Windows OS Troubleshooting Page 17"
  },
  {
    "topic": "Windows OS Troubleshooting",
    "number": 16,
    "question": "Which Windows utilities can identify the processes consuming the most memory? (Select 2 answers)",
    "answers": [
      "B",
      "E"
    ],
    "options": {
      "A": "Reliability Monitor",
      "B": "Task Manager",
      "C": "Windows Memory Diagnostic",
      "D": "Event Viewer",
      "E": "Resource Monitor"
    },
    "explanations": {
      "A": "Reliability Monitor shows stability events and failures rather than live per-process memory consumption.",
      "B": "Task Manager lists processes and their current memory usage, making high-memory applications easy to spot.",
      "C": "This tests RAM hardware for faults rather than measuring process memory usage.",
      "D": "Event Viewer records events and errors but does not provide the primary live memory-usage view.",
      "E": "Resource Monitor provides detailed per-process memory statistics and helps analyze how RAM is being used."
    },
    "tip": "Task Manager gives the quick view; Resource Monitor gives deeper memory details. CompTIA A+ 220-1202 - Windows OS Troubleshooting Page 18"
  },
  {
    "topic": "Windows OS Troubleshooting",
    "number": 17,
    "question": "Which methods can resolve or prevent low-memory warnings in Windows? (Select all that apply)",
    "answers": [
      "B",
      "D",
      "E"
    ],
    "options": {
      "A": "Increasing the storage drive's cache size",
      "B": "Upgrading system memory",
      "C": "Defragmenting the main system drive",
      "D": "Closing unnecessary background applications",
      "E": "Increasing the size of the paging file",
      "F": "Enabling hardware virtualization in BIOS/UEFI"
    },
    "explanations": {
      "A": "Drive cache settings do not add usable system RAM or virtual-memory capacity for applications.",
      "B": "Adding physical RAM increases the memory available to applications and directly reduces memory pressure.",
      "C": "Defragmentation reorganizes disk files but does not provide additional RAM.",
      "D": "Closing unused applications frees the RAM they were consuming.",
      "E": "A larger paging file increases virtual-memory capacity when physical RAM is exhausted.",
      "F": "Virtualization support enables virtual-machine features and does not solve ordinary low-memory warnings."
    },
    "tip": "Low memory = free RAM, add RAM, or increase virtual memory. CompTIA A+ 220-1202 - Windows OS Troubleshooting Page 19"
  },
  {
    "topic": "Windows OS Troubleshooting",
    "number": 18,
    "question": "Which actions can resolve USB controller resource warnings caused by endpoint limits or excessive power draw? (Select 2 answers)",
    "answers": [
      "A",
      "C"
    ],
    "options": {
      "A": "Unplugging USB devices that are not in use",
      "B": "Setting the affected USB device to a lower process priority in Task Manager",
      "C": "Moving devices to ports linked to a different USB controller",
      "D": "Changing the Windows power plan to High Performance"
    },
    "explanations": {
      "A": "Removing unnecessary USB devices reduces both endpoint consumption and power demand on the controller.",
      "B": "Process priority affects CPU scheduling and does not change USB endpoints or controller power availability.",
      "C": "Using ports connected to another controller distributes endpoint and power requirements across controllers.",
      "D": "A power plan does not increase the USB controller's endpoint limit and is not the source's recommended fix."
    },
    "tip": "USB resource warning = reduce connected devices or spread them across different controllers. CompTIA A+ 220-1202 - Windows OS Troubleshooting Page 20"
  },
  {
    "topic": "Windows OS Troubleshooting",
    "number": 19,
    "question": "Windows instability can be caused by hardware failures, driver conflicts, corrupted system files, overheating, insufficient power, or incompatible software.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The source lists these as common causes of freezes, crashes, reboots, and hangs and recommends diagnostic tools such as Event Viewer, Safe Mode, memory testing, and SFC.",
      "B": "The statement matches the source's description of common Windows instability causes."
    },
    "tip": "Random instability can come from hardware, drivers, files, heat, power, or software - isolate one category at a time. CompTIA A+ 220-1202 - Windows OS Troubleshooting Page 21"
  },
  {
    "topic": "Windows OS Troubleshooting",
    "number": 20,
    "question": "A PC shows \"Operating system not found\" immediately after POST, and the physical drive works. Which are the most likely causes? (Select 2 answers)",
    "answers": [
      "C",
      "E"
    ],
    "options": {
      "A": "Expired Windows license key",
      "B": "Corrupted user profiles",
      "C": "Incorrect BIOS/UEFI boot order",
      "D": "Missing device drivers",
      "E": "Corrupted boot records/files"
    },
    "explanations": {
      "A": "Windows activation status does not prevent firmware from finding the operating-system boot files.",
      "B": "User profiles load after Windows boots and therefore cannot cause an OS-not-found message immediately after POST.",
      "C": "If firmware searches the wrong device first or omits the system drive, it may report that no operating system was found.",
      "D": "Normal Windows device drivers load later in startup and are not the likely cause of firmware-level OS detection failure.",
      "E": "Damaged boot records or boot files can prevent the system from locating and starting the installed operating system."
    },
    "tip": "OS not found after POST = check firmware boot order and boot records/files. CompTIA A+ 220-1202 - Windows OS Troubleshooting Page 22"
  },
  {
    "topic": "Windows OS Troubleshooting",
    "number": 21,
    "question": "A Windows domain user has long login delays and the profile takes several minutes to load. What is a common solution?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Modifying login script",
      "B": "Disabling SSO authentication",
      "C": "Rebuilding Windows profiles",
      "D": "Applying system updates"
    },
    "explanations": {
      "A": "A slow script can contribute in some cases, but the source identifies profile rebuilding as the common solution for the described profile-loading problem.",
      "B": "Disabling SSO is not a standard fix for a slow or damaged Windows user profile.",
      "C": "A corrupted or oversized user profile can cause slow logons; rebuilding the profile gives the user a clean profile structure.",
      "D": "Updates may fix general issues but do not directly repair a problematic user profile."
    },
    "tip": "Very slow profile loading can point to a damaged profile that needs rebuilding. CompTIA A+ 220-1202 - Windows OS Troubleshooting Page 23"
  },
  {
    "topic": "Windows OS Troubleshooting",
    "number": 22,
    "question": "Which are valid causes of time drift in Windows? (Select 3 answers)",
    "answers": [
      "B",
      "C",
      "D"
    ],
    "options": {
      "A": "Incorrect system time zone settings",
      "B": "Disabled Windows Time (W32Time) service",
      "C": "CMOS battery failure",
      "D": "Unreachable or misconfigured NTP server",
      "E": "Disabled Task Scheduler service"
    },
    "explanations": {
      "A": "An incorrect time zone makes the displayed local time wrong by a consistent offset, but the quiz distinguishes this from clock drift.",
      "B": "If the Windows Time service is disabled, the system may not synchronize regularly with its configured time source.",
      "C": "A failing CMOS battery can cause the hardware clock to lose or reset time, especially while the computer is powered off.",
      "D": "If the configured network time server cannot be reached or is incorrect, Windows cannot reliably correct its clock.",
      "E": "Task Scheduler is not the primary Windows time-synchronization service identified in the source."
    },
    "tip": "Time drift: check W32Time, CMOS battery, and the NTP source. CompTIA A+ 220-1202 - Windows OS Troubleshooting Page 24"
  },
  {
    "topic": "Windows OS Troubleshooting",
    "number": 23,
    "question": "Where can Windows 10/11 time synchronization settings be accessed?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Windows Start > Settings > Time & Language > Date & time",
      "B": "Control Panel (icon view) > Date and Time > Internet Time > Change settings",
      "C": "Control Panel (category view) > Clock and Region > Set the time and date > Internet Time > Change settings",
      "D": "Any of the above navigation paths"
    },
    "explanations": {
      "A": "This is a valid path, but the question's correct choice is the option recognizing that all listed navigation paths can reach time settings.",
      "B": "This is also a valid navigation path, but it is only one of several correct paths listed.",
      "C": "This path is valid as well, so selecting only it would be incomplete.",
      "D": "All three listed paths provide access to Windows date/time or Internet Time synchronization settings."
    },
    "tip": "Windows time sync can be reached through Settings or either Control Panel Date and Time path."
  },
  {
    "topic": "Windows Task Manager",
    "number": 1,
    "question": "Which of the answers listed below describe(s) the function of Task Manager (taskmgr.exe) in Windows 10 and Windows 11? (Select all that apply)",
    "answers": [
      "A",
      "D",
      "F",
      "G"
    ],
    "options": {
      "A": "Displays information on programs, processes, and services that are currently running on the computer",
      "B": "Provides access to administrative tools for managing network traffic",
      "C": "Allows users to schedule the launch of programs or scripts at pre-defined times or after specified time intervals",
      "D": "Provides access to startup applications that can be enabled or disabled to launch automatically at sign-in",
      "E": "Allows system administrators to modify user account permissions for currently logged-in users",
      "F": "Provides real-time reports on how a Windows-based computer is using system resources, such as CPU, RAM, Disk, Network, and GPU",
      "G": "Allows users to close a non-responsive application in Windows"
    },
    "explanations": {
      "A": "Task Manager shows active applications, background processes, and services so a technician can see what is currently running.",
      "B": "Task Manager can display network utilization, but it is not a general administrative console for configuring or managing network traffic.",
      "C": "Scheduling programs and scripts is handled by Task Scheduler, not Task Manager.",
      "D": "Task Manager includes Startup management so users can control which supported applications start automatically when they sign in.",
      "E": "Task Manager can display and manage user sessions, but account permissions are changed through account, security, or administrative management tools.",
      "F": "Task Manager monitors resource utilization in real time, helping identify CPU, memory, disk, network, or GPU bottlenecks.",
      "G": "Task Manager can end a frozen or unresponsive application or process when it cannot be closed normally."
    },
    "tip": "Task Manager is for running tasks, startup apps, resource usage, and ending frozen programs - not scheduling future tasks. CompTIA A+ 220-1202 - Windows Task Manager Page 3"
  },
  {
    "topic": "Windows Task Manager",
    "number": 2,
    "question": "Windows Task Manager can be launched by: (Select all that apply)",
    "answers": [
      "A",
      "C",
      "E",
      "F",
      "G",
      "H"
    ],
    "options": {
      "A": "Using the Ctrl+Shift+Esc key combination",
      "B": "Double-clicking on the applet's icon shortcut in the Administrative Tools folder",
      "C": "Pressing Ctrl+Alt+Delete and selecting the Task Manager option from the menu screen",
      "D": "Selecting the Task Manager applet in Windows Control Panel",
      "E": "Right-clicking on the Windows Taskbar and selecting Task Manager",
      "F": "Typing taskmgr (or taskmgr.exe) in the Command Prompt (cmd.exe) and pressing Enter",
      "G": "Pressing the Windows key + R, typing taskmgr (or taskmgr.exe) in the Run window, and pressing Enter",
      "H": "Right-clicking on the Windows Start button and selecting Task Manager"
    },
    "explanations": {
      "A": "Ctrl+Shift+Esc opens Task Manager directly and is one of the fastest keyboard shortcuts for it.",
      "B": "Task Manager is not normally launched as an Administrative Tools applet in the way described.",
      "C": "The Windows security screen opened by Ctrl+Alt+Delete includes an option to start Task Manager.",
      "D": "Task Manager is not a Control Panel applet.",
      "E": "On supported Windows versions/configurations, the taskbar context menu provides a Task Manager shortcut.",
      "F": "taskmgr.exe is the executable for Task Manager, so launching it from Command Prompt opens the utility.",
      "G": "The Run dialog can execute taskmgr.exe directly.",
      "H": "The Start button's power-user menu provides quick access to Task Manager."
    },
    "tip": "Memorize Ctrl+Shift+Esc and taskmgr.exe; both launch Task Manager directly. CompTIA A+ 220-1202 - Windows Task Manager Page 4"
  },
  {
    "topic": "Windows Task Manager",
    "number": 3,
    "question": "Which tab of the Windows Task Manager provides an interface to manually start, stop, or restart system applications that typically run without a user interface?",
    "answers": [
      "E"
    ],
    "options": {
      "A": "Processes",
      "B": "Performance",
      "C": "Startup",
      "D": "Users",
      "E": "Services"
    },
    "explanations": {
      "A": "Processes shows running apps and background processes and lets users end tasks, but Windows services are managed from the Services tab.",
      "B": "Performance displays hardware and resource graphs rather than controls for starting or stopping services.",
      "C": "Startup controls applications that launch at sign-in; it does not start, stop, or restart Windows services.",
      "D": "Users displays signed-in sessions and their resource usage, not service controls.",
      "E": "The Services tab lists Windows services, which commonly run in the background without a user interface, and provides service-management actions."
    },
    "tip": "Services run quietly in the background; use Task Manager's Services tab to inspect or control them. CompTIA A+ 220-1202 - Windows Task Manager Page 5"
  },
  {
    "topic": "Windows Task Manager",
    "number": 4,
    "question": "Which Task Manager tab in Windows allows users to enable or disable apps that run automatically at sign-in?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Services",
      "B": "Startup",
      "C": "Performance",
      "D": "Processes",
      "E": "Users"
    },
    "explanations": {
      "A": "Services manages background Windows services, which are different from user startup applications.",
      "B": "The Startup tab lists applications configured to launch when a user signs in and allows them to be enabled or disabled.",
      "C": "Performance monitors CPU, memory, disks, network, and GPU rather than startup behavior.",
      "D": "Processes shows currently running programs and background processes; it does not primarily configure automatic sign-in startup.",
      "E": "Users shows signed-in accounts and their active resource usage."
    },
    "tip": "Slow sign-in? Check the Startup tab for unnecessary applications. CompTIA A+ 220-1202 - Windows Task Manager Page 6"
  },
  {
    "topic": "Windows Task Manager",
    "number": 5,
    "question": "Which Task Manager tab in Windows displays real-time graphs of CPU, memory, disk, network, and GPU resource usage?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Services",
      "B": "Startup",
      "C": "Performance",
      "D": "Processes",
      "E": "Users",
      "F": "None of the above"
    },
    "explanations": {
      "A": "Services lists background services and their status, not detailed hardware utilization graphs.",
      "B": "Startup shows apps configured to run at sign-in and their startup impact.",
      "C": "Performance provides real-time graphs and statistics for major hardware resources such as CPU, memory, disks, network adapters, and GPU.",
      "D": "Processes shows resource usage per running task, but the dedicated real-time system graphs are on Performance.",
      "E": "Users groups activity by signed-in account rather than presenting the main hardware performance graphs.",
      "F": "Performance is one of the listed choices and is the correct tab."
    },
    "tip": "Performance = graphs; Processes = which running task is using the resources. CompTIA A+ 220-1202 - Windows Task Manager Page 7"
  },
  {
    "topic": "Windows Task Manager",
    "number": 6,
    "question": "Which Task Manager tab in Windows provides real-time information about system resources used by running applications and background processes?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Processes",
      "B": "Performance",
      "C": "Startup",
      "D": "Users",
      "E": "Services"
    },
    "explanations": {
      "A": "The Processes tab lists applications and background processes and shows their current CPU, memory, disk, network, and other resource usage.",
      "B": "Performance focuses on overall hardware-resource graphs rather than organizing usage by each running application and background process.",
      "C": "Startup focuses on programs configured to launch at sign-in.",
      "D": "Users groups resource usage by signed-in account rather than serving as the primary list of all applications and background processes.",
      "E": "Services focuses on Windows services and their status rather than the complete running-app resource view."
    },
    "tip": "Need to find which app is using CPU or RAM? Start with the Processes tab. CompTIA A+ 220-1202 - Windows Task Manager Page 8"
  },
  {
    "topic": "Windows Task Manager",
    "number": 7,
    "question": "The Task Manager's Users tab in Windows lists all signed-in user accounts along with details on applications and system resources used by each account. This tab also allows system administrators to close user applications, disconnect the user (lock the user session), or sign them off (force the user to log off).",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The Users tab shows active user sessions and their resource consumption. Administrators can expand a user's processes and perform session actions such as disconnecting or signing the user off.",
      "B": "The description matches the purpose and administrative capabilities of the Users tab in Task Manager."
    },
    "tip": "Users tab = who is signed in, what resources they use, and controls for their sessions."
  },
  {
    "topic": "Wireless Security",
    "number": 1,
    "question": "Which of the wireless encryption schemes listed below offers the highest level of protection?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "WEP",
      "B": "WPA3",
      "C": "TKIP",
      "D": "WPS"
    },
    "explanations": {
      "A": "WEP is an obsolete wireless security scheme with serious weaknesses that allow its encryption keys to be recovered relatively easily.",
      "B": "WPA3 is the newest security generation among these choices and improves wireless authentication and encryption protections compared with WEP and earlier WPA standards.",
      "C": "TKIP was introduced as a temporary improvement over WEP and is now considered weak and deprecated.",
      "D": "WPS is a Wi-Fi setup method, not a wireless encryption scheme, and its PIN method has known security weaknesses."
    },
    "tip": "For these choices, WPA3 provides the strongest modern Wi-Fi protection. CompTIA A+ 220-1202 - Wireless Security Quiz Page 3"
  },
  {
    "topic": "Wireless Security",
    "number": 2,
    "question": "Which of the following characteristics apply to the WPA2/WPA3 Personal mode? (Select 3)",
    "answers": [
      "D",
      "E",
      "F"
    ],
    "options": {
      "A": "Provides unique login credentials for each user",
      "B": "Typically deployed in business or enterprise networks",
      "C": "Authentication through 802.1X with a RADIUS server",
      "D": "Simple to set up without requiring extra infrastructure",
      "E": "Commonly used in home or SOHO environments",
      "F": "Authentication via a single, shared password"
    },
    "explanations": {
      "A": "Unique per-user credentials are characteristic of Enterprise mode using centralized authentication, not Personal mode.",
      "B": "Enterprise environments commonly use WPA2/WPA3 Enterprise because it supports centralized, individual authentication.",
      "C": "802.1X and RADIUS are Enterprise-mode authentication technologies.",
      "D": "Personal mode does not require a RADIUS authentication server, making it easier to deploy.",
      "E": "Personal mode is well suited to homes and small offices because it uses a shared wireless credential.",
      "F": "WPA2/WPA3 Personal uses a shared password or passphrase for users of the wireless network."
    },
    "tip": "Personal mode = shared password, simple setup, home/SOHO use. CompTIA A+ 220-1202 - Wireless Security Quiz Page 4"
  },
  {
    "topic": "Wireless Security",
    "number": 3,
    "question": "Which of the answers listed below refer to the characteristic features of the WPA2/WPA3 Enterprise mode? (Select 3 answers)",
    "answers": [
      "C",
      "D",
      "E"
    ],
    "options": {
      "A": "Authentication via a single, shared password",
      "B": "Simple to set up without requiring extra infrastructure",
      "C": "Typically deployed in business or enterprise networks",
      "D": "Authentication through 802.1X with a RADIUS server",
      "E": "Provides unique login credentials for each user",
      "F": "Commonly used in home or SOHO environments"
    },
    "explanations": {
      "A": "A shared password is the defining approach of Personal mode rather than Enterprise mode.",
      "B": "Enterprise mode requires authentication infrastructure, so it is more complex to deploy than Personal mode.",
      "C": "Enterprise mode is designed for organizations that need centrally managed and scalable wireless authentication.",
      "D": "Enterprise Wi-Fi commonly uses 802.1X to authenticate users through a RADIUS server.",
      "E": "Centralized authentication lets individual users have separate credentials rather than sharing one network password.",
      "F": "Home and SOHO networks more commonly use Personal mode because it requires less infrastructure."
    },
    "tip": "Enterprise mode = 802.1X + RADIUS + individual user credentials. CompTIA A+ 220-1202 - Wireless Security Quiz Page 5"
  },
  {
    "topic": "Wireless Security",
    "number": 4,
    "question": "Which of the following answers refers to a stopgap protocol introduced with WPA to replace WEP?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "AES",
      "B": "TKIP",
      "C": "CCMP",
      "D": "RC4"
    },
    "explanations": {
      "A": "AES is a strong encryption algorithm and became associated with newer Wi-Fi protection, but it is not the stopgap protocol introduced with WPA.",
      "B": "TKIP was created as an interim security improvement that could run on much existing WEP-era hardware while addressing several WEP weaknesses.",
      "C": "CCMP is the AES-based security protocol associated with stronger WPA2 protection rather than the temporary WEP replacement described.",
      "D": "RC4 is the stream cipher used by WEP and TKIP; it is an algorithm, not the WPA stopgap protocol itself."
    },
    "tip": "TKIP was the temporary bridge from weak WEP toward stronger AES-based Wi-Fi security. CompTIA A+ 220-1202 - Wireless Security Quiz Page 6"
  },
  {
    "topic": "Wireless Security",
    "number": 5,
    "question": "Which of the cryptographic algorithms listed below is the least vulnerable to attacks?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "AES",
      "B": "DES",
      "C": "RC4",
      "D": "3DES"
    },
    "explanations": {
      "A": "AES is a modern symmetric encryption standard with strong security when implemented correctly and is substantially stronger than the older algorithms listed.",
      "B": "DES uses a 56-bit effective key and is vulnerable to brute-force attacks, making it obsolete.",
      "C": "RC4 has significant statistical and cryptographic weaknesses and has been deprecated in modern security protocols.",
      "D": "3DES improved on DES by applying DES multiple times, but it is slow, uses an older small block size, and has been deprecated for modern use."
    },
    "tip": "Among AES, DES, RC4, and 3DES, AES is the modern strong choice. CompTIA A+ 220-1202 - Wireless Security Quiz Page 7"
  },
  {
    "topic": "Wireless Security",
    "number": 6,
    "question": "For a wireless client to be able to connect to a network, the security type and encryption type settings on the connecting host must match the corresponding wireless security settings on a WAP.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The client and access point must use compatible wireless security and encryption settings so they can authenticate and establish the protected connection.",
      "B": "Mismatched security settings can prevent successful authentication and association with the wireless network."
    },
    "tip": "Client and WAP security settings must agree before a protected Wi-Fi connection can be established. CompTIA A+ 220-1202 - Wireless Security Quiz Page 8"
  },
  {
    "topic": "Wireless Security",
    "number": 7,
    "question": "Which AAA solution uses UDP as its transport protocol, combines authentication and authorization, and is commonly deployed for network access control such as VPNs and Wi-Fi authentication?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "RADIUS",
      "B": "LDAP",
      "C": "TACACS+",
      "D": "Kerberos",
      "E": "OAuth"
    },
    "explanations": {
      "A": "RADIUS commonly uses UDP and provides centralized AAA services for network access, including 802.1X Wi-Fi and VPN authentication. It combines authentication and authorization in its access process.",
      "B": "LDAP is a directory access protocol used to query and manage directory information; it is not the AAA protocol described.",
      "C": "TACACS+ uses TCP and separates authentication, authorization, and accounting, making it different from the protocol described.",
      "D": "Kerberos is a ticket-based network authentication protocol and is not the UDP-based AAA solution requested.",
      "E": "OAuth is an authorization framework commonly used for delegated application access, not network-device AAA in this form."
    },
    "tip": "RADIUS = UDP and network access; TACACS+ = TCP and device administration. CompTIA A+ 220-1202 - Wireless Security Quiz Page 9"
  },
  {
    "topic": "Wireless Security",
    "number": 8,
    "question": "Which of the following AAA solutions relies on TCP, separates authentication, authorization, and accounting, and is commonly used for device administration in enterprise networks?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "TACACS+",
      "B": "SAML",
      "C": "RADIUS",
      "D": "Kerberos"
    },
    "explanations": {
      "A": "TACACS+ uses TCP and treats authentication, authorization, and accounting as separate functions, which is useful for granular administration of routers, switches, and other network devices.",
      "B": "SAML exchanges XML-based identity assertions for federated authentication and SSO rather than providing this network-device AAA model.",
      "C": "RADIUS generally uses UDP and is commonly focused on network access such as Wi-Fi and VPN authentication.",
      "D": "Kerberos provides ticket-based authentication and SSO but is not the TCP-based device-administration AAA solution described."
    },
    "tip": "TACACS+ = TCP, separate AAA functions, and administrator access to network devices. CompTIA A+ 220-1202 - Wireless Security Quiz Page 10"
  },
  {
    "topic": "Wireless Security",
    "number": 9,
    "question": "Which of the answers listed below refers to the primary and default authentication protocol used in Windows Active Directory environments to enable SSO?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "RADIUS",
      "B": "NTLM",
      "C": "Kerberos",
      "D": "MS-CHAP"
    },
    "explanations": {
      "A": "RADIUS provides centralized network access authentication but is not the default Active Directory SSO authentication protocol.",
      "B": "NTLM is an older Windows authentication protocol retained for compatibility and fallback scenarios; Kerberos is preferred in Active Directory domains.",
      "C": "Kerberos is the primary authentication protocol for modern Windows Active Directory domains and uses tickets to support secure single sign-on.",
      "D": "MS-CHAP is a Microsoft challenge-response authentication protocol used in some remote-access scenarios, not the default AD SSO protocol."
    },
    "tip": "Active Directory domain SSO normally uses Kerberos tickets."
  },
  {
    "topic": "Workstation Security",
    "number": 1,
    "question": "Which Microsoft Windows feature(s) provide(s) data-at-rest encryption? (Select all that apply)",
    "answers": [
      "B",
      "D",
      "E"
    ],
    "options": {
      "A": "FDE",
      "B": "BitLocker",
      "C": "SED",
      "D": "BitLocker-To-Go",
      "E": "EFS"
    },
    "explanations": {
      "A": "Full-disk encryption is a general encryption category rather than the specific Microsoft Windows feature requested.",
      "B": "BitLocker is Microsoft's full-volume encryption feature for protecting data stored on Windows drives.",
      "C": "A self-encrypting drive performs hardware-based encryption, but SED is a drive technology rather than a Microsoft Windows feature.",
      "D": "BitLocker To Go extends BitLocker encryption to removable storage such as USB flash drives.",
      "E": "Encrypting File System encrypts individual files and folders on supported NTFS volumes."
    },
    "tip": "BitLocker protects drives, BitLocker To Go protects removable drives, and EFS protects selected NTFS files and folders. CompTIA A+ 220-1202 - Workstation Security Page 3"
  },
  {
    "topic": "Workstation Security",
    "number": 2,
    "question": "The two factors that are considered important for creating strong passwords are: (Select 2 answers)",
    "answers": [
      "A",
      "E"
    ],
    "options": {
      "A": "Password length",
      "B": "Minimum password age",
      "C": "Password history",
      "D": "Maximum password age",
      "E": "Password complexity"
    },
    "explanations": {
      "A": "Longer passwords increase the number of possible combinations an attacker must try, making guessing and brute-force attacks harder.",
      "B": "Minimum age controls how soon a password may be changed; it does not directly make the password itself stronger.",
      "C": "Password history prevents reuse of recent passwords but does not determine the strength of a newly created password.",
      "D": "Maximum age controls how long a password may be used before expiration.",
      "E": "Complexity requires varied character types, increasing the password's resistance to simple guessing attacks."
    },
    "tip": "Strong password creation focuses on length plus complexity. CompTIA A+ 220-1202 - Workstation Security Page 4"
  },
  {
    "topic": "Workstation Security",
    "number": 3,
    "question": "A technician is configuring a new Windows image for an organization. A primary security requirement is to maximize protection against brute-force attacks on user accounts. Which password policy setting should be set to the highest practical value to meet this requirement?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Minimum password age",
      "B": "Password history",
      "C": "Minimum password length",
      "D": "Account lockout duration"
    },
    "explanations": {
      "A": "This prevents rapid password changes and helps enforce password history, but it does not directly increase the number of guesses required.",
      "B": "History prevents users from cycling back to old passwords, but it does not directly make the current password harder to brute force.",
      "C": "Increasing minimum password length dramatically expands the possible password space, making exhaustive brute-force guessing more difficult.",
      "D": "Lockout duration controls how long a locked account remains unavailable; it does not strengthen the password itself."
    },
    "tip": "More password characters create far more possible combinations for an attacker to test. CompTIA A+ 220-1202 - Workstation Security Page 5"
  },
  {
    "topic": "Workstation Security",
    "number": 4,
    "question": "A strong password that meets the password complexity requirement should contain: (Select the best answer)",
    "answers": [
      "E"
    ],
    "options": {
      "A": "Uppercase letters (A-Z)",
      "B": "Digits (0-9)",
      "C": "Non-alphanumeric characters if permitted (e.g., !, @, #, $)",
      "D": "Lowercase letters (a-z)",
      "E": "A combination of characters from at least 3 character groups"
    },
    "explanations": {
      "A": "Uppercase letters are one useful character group, but using only uppercase letters does not satisfy a broad complexity requirement.",
      "B": "Numbers improve variety but are only one character group.",
      "C": "Symbols can strengthen a password, but symbols alone do not represent the complete complexity requirement.",
      "D": "Lowercase letters are only one of the available character groups.",
      "E": "Using multiple character categories creates greater variation and satisfies the quiz's stated password-complexity requirement."
    },
    "tip": "Complexity means mixing character groups, not relying on only one type. CompTIA A+ 220-1202 - Workstation Security Page 6"
  },
  {
    "topic": "Workstation Security",
    "number": 5,
    "question": "A password history policy is typically configured to a high value (e.g., 24 passwords) to enforce which primary security consideration?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Complexity",
      "B": "Expiration",
      "C": "Length",
      "D": "Uniqueness"
    },
    "explanations": {
      "A": "Complexity controls the types of characters used in a password, not whether an old password can be reused.",
      "B": "Expiration determines when a password must be changed.",
      "C": "Length specifies the minimum number of characters.",
      "D": "Password history remembers previous passwords so users cannot immediately reuse them, enforcing uniqueness across password changes."
    },
    "tip": "Password history stops password recycling and encourages unique replacements. CompTIA A+ 220-1202 - Workstation Security Page 7"
  },
  {
    "topic": "Workstation Security",
    "number": 6,
    "question": "Which of the following passwords is the most complex?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "T$7C52WL4#SA",
      "B": "GdL3tUa8wxYz",
      "C": "@TxB*L$nW@Xt",
      "D": "G$L3tU8KwY@m"
    },
    "explanations": {
      "A": "This password uses several character types, but the quiz identifies another option as having the strongest combination of varied character classes.",
      "B": "This mixes upper/lowercase letters and digits but contains no special characters.",
      "C": "This uses letters and symbols but lacks digits.",
      "D": "This option combines uppercase letters, lowercase letters, numbers, and special characters, giving it the broadest character-class variety among the choices."
    },
    "tip": "For complexity questions, look for a strong mix of uppercase, lowercase, numbers, and symbols. CompTIA A+ 220-1202 - Workstation Security Page 8"
  },
  {
    "topic": "Workstation Security",
    "number": 7,
    "question": "Which password policy enforces a mandatory password change after a specific time?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Password history policy",
      "B": "Minimum password age policy",
      "C": "Password expiration policy",
      "D": "Password reuse policy"
    },
    "explanations": {
      "A": "History prevents reuse of previous passwords rather than setting a time limit.",
      "B": "Minimum age prevents a password from being changed too soon.",
      "C": "Password expiration requires the user to replace the password after the configured period has elapsed.",
      "D": "Password reuse restrictions control whether old passwords can be selected again."
    },
    "tip": "Expiration answers 'when must I change it?' while history answers 'can I reuse an old one?'. CompTIA A+ 220-1202 - Workstation Security Page 9"
  },
  {
    "topic": "Workstation Security",
    "number": 8,
    "question": "The minimum password age policy setting determines the period of time that a password can be used before the system requires the user to change it.",
    "answers": [
      "B"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "That description refers to maximum password age, which determines when a password expires.",
      "B": "Minimum password age specifies how long a password must be kept before the user is allowed to change it again."
    },
    "tip": "Minimum age = wait before changing; maximum age = deadline to change. CompTIA A+ 220-1202 - Workstation Security Page 10"
  },
  {
    "topic": "Workstation Security",
    "number": 9,
    "question": "The maximum password age policy setting determines the period of time that a password must be used before the user can change it.",
    "answers": [
      "B"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The statement reverses the two settings. Maximum age determines when a password expires.",
      "B": "Minimum age controls how soon a password may be changed; maximum age controls how long it can remain in use before a required change."
    },
    "tip": "Maximum password age is the password's expiration timer. CompTIA A+ 220-1202 - Workstation Security Page 11"
  },
  {
    "topic": "Workstation Security",
    "number": 10,
    "question": "BIOS/UEFI passwords can prevent unauthorized startup access or restrict changes to firmware settings.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "A user/power-on password can block unauthorized startup, while a supervisor or administrator password can restrict changes inside BIOS/UEFI setup.",
      "B": "The statement correctly describes common security purposes of firmware-level passwords."
    },
    "tip": "BIOS/UEFI user password protects startup; supervisor/admin password protects firmware settings. CompTIA A+ 220-1202 - Workstation Security Page 12"
  },
  {
    "topic": "Workstation Security",
    "number": 11,
    "question": "A user needs to step away from a workstation for a few minutes while keeping open work immediately available upon return. Which security best practice should be used?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Apply a privacy filter",
      "B": "Set the system to standby mode",
      "C": "Use a screensaver lock",
      "D": "Log off the system"
    },
    "explanations": {
      "A": "A privacy filter limits viewing angles but does not stop another person from using the unattended session.",
      "B": "Standby saves power but is not the specific access-control practice identified by the quiz.",
      "C": "A locked screen protects the active session with authentication while preserving open applications and documents for quick return.",
      "D": "Logging off protects the account but closes the active session and may close applications, which conflicts with keeping work immediately available."
    },
    "tip": "Short absence with work still open = lock the screen. CompTIA A+ 220-1202 - Workstation Security Page 13"
  },
  {
    "topic": "Workstation Security",
    "number": 12,
    "question": "Which security best practice most effectively reduces unauthorized access when a workstation in use must be left unattended for an extended period?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Log off when not in use",
      "B": "Use a screensaver lock",
      "C": "Set the system to standby mode",
      "D": "Apply a privacy filter"
    },
    "explanations": {
      "A": "Logging off ends the authenticated session, preventing another person from accessing the user's open account during a long absence.",
      "B": "A screen lock is useful for temporary absences, but the quiz selects logging off for an extended period.",
      "C": "Standby is mainly a power-management state and does not replace properly ending an unattended user session.",
      "D": "A privacy filter prevents side viewing but does not prevent direct interaction with the computer."
    },
    "tip": "Brief absence = lock; extended absence = log off. CompTIA A+ 220-1202 - Workstation Security Page 14"
  },
  {
    "topic": "Workstation Security",
    "number": 13,
    "question": "Which answer refers to a physical security measure against laptop theft?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Geolocation",
      "B": "Tracking software",
      "C": "Cable lock",
      "D": "Remote wipe"
    },
    "explanations": {
      "A": "Geolocation may help locate a device after loss or theft but does not physically prevent removal.",
      "B": "Tracking software can assist recovery but is a logical control, not a physical restraint.",
      "C": "A cable lock physically secures a laptop to a fixed object, making unauthorized removal more difficult.",
      "D": "Remote wipe protects data after loss or theft but does not physically secure the laptop."
    },
    "tip": "Cable lock is a physical theft deterrent; tracking and remote wipe are post-theft protections. CompTIA A+ 220-1202 - Workstation Security Page 15"
  },
  {
    "topic": "Workstation Security",
    "number": 14,
    "question": "A sticky note with a password kept in sight in a user's cubicle would be a violation of:",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Data labeling policy",
      "B": "Physical security policy",
      "C": "Clean desk policy",
      "D": "Acceptable use policy"
    },
    "explanations": {
      "A": "Data labeling classifies information by sensitivity but does not specifically address exposed passwords on a desk.",
      "B": "Physical security is broadly relevant, but the quiz identifies the workstation-area housekeeping rule more specifically.",
      "C": "A clean desk policy requires sensitive information such as passwords and confidential documents to be secured rather than left visible.",
      "D": "An acceptable use policy governs appropriate use of organizational systems and resources rather than desk-clearing practices."
    },
    "tip": "Clean desk means sensitive information should not be left visible or unattended. CompTIA A+ 220-1202 - Workstation Security Page 16"
  },
  {
    "topic": "Workstation Security",
    "number": 15,
    "question": "Which answer refers to an end-user software tool specifically designed to store and manage login credentials?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Credential Guard",
      "B": "Authenticator app",
      "C": "SSO service",
      "D": "Password manager"
    },
    "explanations": {
      "A": "Windows Credential Guard protects certain authentication secrets using virtualization-based security; it is not an end-user password vault.",
      "B": "An authenticator app generates or approves authentication factors, but it is not primarily designed to store all login passwords.",
      "C": "Single sign-on reduces repeated logins by using one authenticated identity across services, but it is not a credential-storage tool.",
      "D": "A password manager securely stores and organizes credentials and can generate strong unique passwords for different accounts."
    },
    "tip": "Password manager = secure vault for many unique login credentials. CompTIA A+ 220-1202 - Workstation Security Page 17"
  },
  {
    "topic": "Workstation Security",
    "number": 16,
    "question": "Restricting administrative privileges according to job duties and managing permissions through user groups is an account-management security best practice.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "This reflects least privilege and role/group-based permission management, allowing users only the access needed for their duties.",
      "B": "The statement accurately describes a standard account-management security practice."
    },
    "tip": "Give users only the privileges their job requires, then manage common permissions through groups. CompTIA A+ 220-1202 - Workstation Security Page 18"
  },
  {
    "topic": "Workstation Security",
    "number": 17,
    "question": "Which account management security measure narrows a user's computer access to specified hours?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Account lockout policy",
      "B": "Session timeout configuration",
      "C": "Login time restrictions",
      "D": "Just-in-time permissions"
    },
    "explanations": {
      "A": "Lockout policy responds to repeated failed authentication attempts rather than controlling allowed hours.",
      "B": "Session timeout ends or locks inactive sessions but does not define permitted login hours.",
      "C": "Login time restrictions specify the days or hours during which an account is permitted to sign in.",
      "D": "Just-in-time access grants elevated permissions temporarily when needed, rather than setting routine login hours."
    },
    "tip": "Login time restrictions answer 'when is this account allowed to sign in?'. CompTIA A+ 220-1202 - Workstation Security Page 19"
  },
  {
    "topic": "Workstation Security",
    "number": 18,
    "question": "An auditor reports that several PCs allow anonymous users to log in. What should the administrator do first to correct this issue?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Enable account lockout",
      "B": "Require multifactor authentication",
      "C": "Configure login time restrictions",
      "D": "Disable the guest account"
    },
    "explanations": {
      "A": "Account lockout protects named accounts from repeated password guesses but does not remove anonymous guest access.",
      "B": "MFA strengthens authentication for supported accounts, but anonymous guest access should first be disabled.",
      "C": "Restricting hours would still leave the unwanted account available during permitted times.",
      "D": "Disabling the guest account removes the built-in avenue for unauthenticated or loosely authenticated guest access."
    },
    "tip": "If anonymous/guest access is not required, disable the guest account. CompTIA A+ 220-1202 - Workstation Security Page 20"
  },
  {
    "topic": "Workstation Security",
    "number": 19,
    "question": "An account lockout policy is primarily applied to reduce the risk of:",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Credential stuffing",
      "B": "Password reuse",
      "C": "Unauthorized physical access",
      "D": "Brute-force attacks"
    },
    "explanations": {
      "A": "Lockout can slow credential stuffing, but the quiz's primary purpose is protection against repeated password guessing.",
      "B": "Password history and password-management practices address reuse.",
      "C": "Physical controls protect against direct physical access to devices.",
      "D": "Locking an account after repeated failed attempts prevents an attacker from making unlimited rapid password guesses."
    },
    "tip": "Account lockout puts a limit on repeated failed guesses. CompTIA A+ 220-1202 - Workstation Security Page 21"
  },
  {
    "topic": "Workstation Security",
    "number": 20,
    "question": "Which is a recommended best practice for securing sensitive information on a workstation when temporarily unattended?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Login time restriction",
      "B": "Privacy filter",
      "C": "Screen timeout lock",
      "D": "Account lockout policy"
    },
    "explanations": {
      "A": "Login time restrictions control when an account may sign in, not what happens during a temporary absence.",
      "B": "A privacy filter reduces side viewing but still leaves an unlocked session accessible.",
      "C": "An automatic screen timeout lock secures the session after inactivity and requires authentication to regain access.",
      "D": "Account lockout responds to failed logins rather than automatically protecting an unattended active session."
    },
    "tip": "Automatic screen locking protects a session if the user forgets to lock it manually. CompTIA A+ 220-1202 - Workstation Security Page 22"
  },
  {
    "topic": "Workstation Security",
    "number": 21,
    "question": "Setting account expiration dates is a security control primarily used for:",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Guest accounts",
      "B": "Shared user accounts",
      "C": "Temporary accounts",
      "D": "Service accounts"
    },
    "explanations": {
      "A": "Guest accounts are normally disabled when not needed rather than simply treated as the primary use case for expiration.",
      "B": "Shared accounts reduce accountability and should generally be avoided; expiration does not solve that issue.",
      "C": "Expiration is ideal for contractors, interns, visitors, or other temporary users because access can automatically end on a known date.",
      "D": "Service accounts often support ongoing automated processes and require carefully managed credentials rather than routine short-term expiration."
    },
    "tip": "Temporary user = set an expiration date so access ends automatically. CompTIA A+ 220-1202 - Workstation Security Page 23"
  },
  {
    "topic": "Workstation Security",
    "number": 22,
    "question": "Changing the default administrator account name/password from factory-set credentials helps prevent unauthorized access using well-known defaults.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "Replacing documented default credentials with unique secure values prevents attackers from simply trying vendor-supplied usernames and passwords.",
      "B": "The statement correctly describes why default administrative credentials should be changed."
    },
    "tip": "Default credentials are predictable; replace them with unique administrative credentials. CompTIA A+ 220-1202 - Workstation Security Page 24"
  },
  {
    "topic": "Workstation Security",
    "number": 23,
    "question": "A USB stick containing a malicious script is inserted into a Windows workstation. Which security measure would prevent the automatic execution of malicious code from the newly inserted storage media?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Disable AutoPlay",
      "B": "Enable SmartScreen",
      "C": "Disable AutoRun",
      "D": "Enable AppLocker"
    },
    "explanations": {
      "A": "AutoPlay controls the user-facing action offered for inserted media, but AutoRun is the feature associated with automatic execution.",
      "B": "SmartScreen can warn about suspicious applications or downloads but is not the direct control for preventing automatic execution from removable media.",
      "C": "Disabling AutoRun prevents instructions on newly inserted media from automatically launching programs or malicious scripts.",
      "D": "AppLocker can restrict which applications may run, but the source specifically identifies disabling AutoRun for this removable-media scenario."
    },
    "tip": "AutoRun can launch content automatically; disabling it removes that automatic execution path. CompTIA A+ 220-1202 - Workstation Security Page 25"
  },
  {
    "topic": "Workstation Security",
    "number": 24,
    "question": "A workstation automatically starts Remote Desktop and Print Spooler services even though neither is needed. Which best practice should be applied?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Block service ports in Windows Firewall",
      "B": "Set both services to Manual startup",
      "C": "Disable unused services",
      "D": "Stop unneeded processes in Task Manager"
    },
    "explanations": {
      "A": "Firewall rules can reduce network exposure, but the unnecessary services would still be running and consuming resources.",
      "B": "Manual startup reduces automatic loading, but truly unnecessary services should be disabled so they cannot start unexpectedly.",
      "C": "Disabling services that are not required reduces the attack surface, removes unnecessary listening components, and can improve system performance.",
      "D": "Stopping processes is temporary; the services may restart later or after reboot unless their service configuration is changed."
    },
    "tip": "If a service is not needed, disable it rather than merely stopping it once."
  },
  {
    "topic": "macOS",
    "number": 1,
    "question": "What does a macOS file with the .dmg extension primarily represent?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "Compressed archive format similar to a .zip file",
      "B": "Virtual disk image that can be mounted as a volume",
      "C": "Application package file that installs directly from the App Store",
      "D": "Executable installer file similar to a Windows .exe"
    },
    "explanations": {
      "A": "A .dmg can contain compressed data, but its defining role is a mountable disk image rather than a normal ZIP archive.",
      "B": "A DMG is a macOS disk image. Opening it mounts the image as a volume so its files, often an application installer, can be accessed.",
      "C": "App Store distribution is handled by the App Store, not by a .dmg package.",
      "D": "A DMG is a container/disk image; it is not itself the macOS equivalent of a Windows executable installer."
    },
    "tip": "DMG means disk image - open it and macOS mounts it like a temporary drive. CompTIA A+ 220-1202 - macOS Quiz Page 3"
  },
  {
    "topic": "macOS",
    "number": 2,
    "question": "Which file format is processed by the macOS Installer utility?",
    "answers": [
      "B"
    ],
    "options": {
      "A": ".app",
      "B": ".pkg",
      "C": ".exe",
      "D": ".dmg"
    },
    "explanations": {
      "A": "An .app is an application bundle that normally launches the application itself.",
      "B": "A .pkg is an installer package designed to be processed by the macOS Installer utility.",
      "C": ".exe is primarily a Windows executable format and is not the standard macOS Installer package.",
      "D": "A .dmg is a mountable disk image that may contain a .pkg or .app, but it is not the package format processed as the installer package."
    },
    "tip": "PKG = installer package; DMG = disk image container. CompTIA A+ 220-1202 - macOS Quiz Page 4"
  },
  {
    "topic": "macOS",
    "number": 3,
    "question": "An .app file is a self-contained macOS application bundle that can be launched, moved, or copied as a single item.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The source describes .app as a specialized folder containing the executable, resources, and configuration data, presented as one item in Finder.",
      "B": "This contradicts the source's description of the .app bundle and its ability to be moved or copied."
    },
    "tip": "An .app looks like one file in Finder, but internally it is an application bundle. CompTIA A+ 220-1202 - macOS Quiz Page 5"
  },
  {
    "topic": "macOS",
    "number": 4,
    "question": "Which built-in macOS feature is Apple's official digital distribution platform for applications?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Spotlight",
      "B": "AirDrop",
      "C": "Launchpad",
      "D": "App Store"
    },
    "explanations": {
      "A": "Spotlight searches files, applications, and other content on the Mac.",
      "B": "AirDrop transfers files wirelessly between nearby Apple devices.",
      "C": "Launchpad displays and launches installed applications but is not the distribution store.",
      "D": "The App Store is Apple's official platform for finding, downloading, purchasing, and updating distributed applications."
    },
    "tip": "App Store gets apps; Launchpad organizes and opens apps. CompTIA A+ 220-1202 - macOS Quiz Page 6"
  },
  {
    "topic": "macOS",
    "number": 5,
    "question": "Most macOS apps can be removed by dragging the .app to Trash; App Store apps can also be removed from Launchpad, while some .pkg-installed apps need a developer uninstaller.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "This matches the uninstall methods described in the source.",
      "B": "The source explicitly states these are common macOS application removal methods."
    },
    "tip": "Simple .app installs are often drag-to-Trash; complex PKG installs may need an uninstaller. CompTIA A+ 220-1202 - macOS Quiz Page 7"
  },
  {
    "topic": "macOS",
    "number": 6,
    "question": "Which macOS folder is the default location for Apple-supplied and user-installed software?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "/Users",
      "B": "/Applications",
      "C": "/Library",
      "D": "/System"
    },
    "explanations": {
      "A": "/Users contains user home directories and personal files.",
      "B": "/Applications is the standard system-wide location for installed macOS applications.",
      "C": "/Library stores system-wide support files, resources, and settings rather than the application bundles themselves.",
      "D": "/System contains core operating-system files."
    },
    "tip": "Applications live in /Applications. CompTIA A+ 220-1202 - macOS Quiz Page 8"
  },
  {
    "topic": "macOS",
    "number": 7,
    "question": "Where should a user navigate to access their personal files in macOS?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "/Users/[username]",
      "B": "/Applications/[username]",
      "C": "/Library/[username]",
      "D": "/System/[username]"
    },
    "explanations": {
      "A": "A user's home directory stores that account's personal files and folders.",
      "B": "/Applications is for software, not per-user home directories.",
      "C": "The system-wide /Library directory is not the user's home folder.",
      "D": "/System contains operating-system components and does not hold user home directories."
    },
    "tip": "A Mac user's home folder is /Users/username. CompTIA A+ 220-1202 - macOS Quiz Page 9"
  },
  {
    "topic": "macOS",
    "number": 8,
    "question": "Which macOS folder contains system-wide resources and settings used by applications and the operating system?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "/Users",
      "B": "/Applications",
      "C": "/Library",
      "D": "/System"
    },
    "explanations": {
      "A": "/Users contains individual user home folders.",
      "B": "/Applications contains application bundles.",
      "C": "/Library contains system-wide application support files, preferences, fonts, and other shared resources.",
      "D": "/System contains core operating-system files rather than the broader system-wide support resources described."
    },
    "tip": "/Library = shared support resources; ~/Library = one user's support data. CompTIA A+ 220-1202 - macOS Quiz Page 10"
  },
  {
    "topic": "macOS",
    "number": 9,
    "question": "Which macOS folder contains the core OS files necessary for the system to run?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "/Library",
      "B": "/Config",
      "C": "/Applications",
      "D": "/System"
    },
    "explanations": {
      "A": "/Library stores shared support resources but is not the main core OS directory.",
      "B": "/Config is not the standard macOS core system folder in this quiz.",
      "C": "/Applications stores application bundles.",
      "D": "/System contains protected core macOS operating-system components."
    },
    "tip": "Core macOS files belong under /System. CompTIA A+ 220-1202 - macOS Quiz Page 11"
  },
  {
    "topic": "macOS",
    "number": 10,
    "question": "Which folder stores application data and settings specific to an individual macOS user?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "/System/Library/[username]",
      "B": "/Library/[username]/Preferences",
      "C": "/System/[username]/Library",
      "D": "/Users/[username]/Library"
    },
    "explanations": {
      "A": "The system Library is for operating-system resources, not a user's personal application data.",
      "B": "The system-wide /Library is not organized as each user's home Library in this way.",
      "C": "User-specific Library data is not stored under /System.",
      "D": "Each user's Library folder stores preferences, caches, application support, and other account-specific data."
    },
    "tip": "User-specific app settings live in /Users/username/Library. CompTIA A+ 220-1202 - macOS Quiz Page 12"
  },
  {
    "topic": "macOS",
    "number": 11,
    "question": "Which option provides SSO access exclusive to Apple's own ecosystem of products and services?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Apple Passkey",
      "B": "Gatekeeper",
      "C": "Apple ID",
      "D": "Sign in with Apple"
    },
    "explanations": {
      "A": "Passkeys are a passwordless authentication technology, not the account identity used across Apple's services.",
      "B": "Gatekeeper checks application trust and signing before software runs.",
      "C": "An Apple ID provides one account identity for Apple services and devices, enabling sign-in across the Apple ecosystem.",
      "D": "Sign in with Apple is an authentication service for signing into third-party apps and websites, rather than the Apple ecosystem account itself."
    },
    "tip": "Apple ID is the identity that ties Apple services and devices together. CompTIA A+ 220-1202 - macOS Quiz Page 13"
  },
  {
    "topic": "macOS",
    "number": 12,
    "question": "What is a common method for enforcing corporate restrictions on macOS devices?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "RSR",
      "B": "MDM",
      "C": "UAC",
      "D": "MFA"
    },
    "explanations": {
      "A": "Rapid Security Response delivers urgent Apple security fixes; it is not a device-management framework.",
      "B": "Mobile Device Management lets organizations deploy configuration profiles, restrictions, applications, and security policies to managed Macs.",
      "C": "User Account Control is a Windows privilege-elevation feature.",
      "D": "Multi-factor authentication strengthens sign-in security but does not centrally enforce device configuration restrictions."
    },
    "tip": "MDM = centrally manage company Macs and enforce policy. CompTIA A+ 220-1202 - macOS Quiz Page 14"
  },
  {
    "topic": "macOS",
    "number": 13,
    "question": "A reliable backup strategy includes multiple copies, different media, an offsite copy, encryption, version history, automation, and restore testing.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "These practices reduce the risk of a single failure destroying every backup and help verify that recovery will actually work.",
      "B": "The source explicitly identifies these as components of a reliable backup strategy."
    },
    "tip": "A backup is only trustworthy when you can successfully restore it. CompTIA A+ 220-1202 - macOS Quiz Page 15"
  },
  {
    "topic": "macOS",
    "number": 14,
    "question": "Organizations may use third-party antivirus on macOS even though macOS includes XProtect and Gatekeeper.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The source states that business and regulated environments may add third-party antivirus to strengthen protection against known and emerging threats.",
      "B": "This contradicts the source's description of layered protection in organizational environments."
    },
    "tip": "Built-in protection can be supplemented with endpoint security in managed environments. CompTIA A+ 220-1202 - macOS Quiz Page 16"
  },
  {
    "topic": "macOS",
    "number": 15,
    "question": "Where can automatic macOS software updates be enabled in System Settings?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Control Center > Updates",
      "B": "Admin Tools > Updates",
      "C": "Maintenance > Update Options",
      "D": "General > Software Update"
    },
    "explanations": {
      "A": "Control Center is not the source-listed software update location.",
      "B": "macOS does not use a Windows-style Admin Tools section for software updates.",
      "C": "This is not the source-listed System Settings path.",
      "D": "Modern macOS places Software Update under General, where update and automatic-update settings can be configured."
    },
    "tip": "Modern macOS updates are under System Settings > General > Software Update. CompTIA A+ 220-1202 - macOS Quiz Page 17"
  },
  {
    "topic": "macOS",
    "number": 16,
    "question": "Which Apple-exclusive mechanism deploys time-sensitive security patches independently of major OS updates?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "YUM",
      "B": "RSR",
      "C": "APT",
      "D": "RPM"
    },
    "explanations": {
      "A": "YUM is a Linux package-management tool.",
      "B": "Rapid Security Response delivers important security improvements separately from full operating-system updates.",
      "C": "APT is a package-management system commonly associated with Debian-based Linux.",
      "D": "RPM is a Linux package format/package-management technology."
    },
    "tip": "RSR = Rapid Security Response for urgent Apple security fixes. CompTIA A+ 220-1202 - macOS Quiz Page 18"
  },
  {
    "topic": "macOS",
    "number": 17,
    "question": "System Settings is a centralized macOS location for hardware, networking, privacy, accessibility, and backup-related configuration.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "This matches the source's description of System Settings and the types of configuration available there.",
      "B": "The source explicitly describes System Settings as the centralized configuration interface."
    },
    "tip": "System Settings is the Mac's main configuration hub. CompTIA A+ 220-1202 - macOS Quiz Page 19"
  },
  {
    "topic": "macOS",
    "number": 18,
    "question": "Which is the built-in backup utility in macOS?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Time Machine",
      "B": "ChronoSync",
      "C": "iDrive",
      "D": "Retrospect"
    },
    "explanations": {
      "A": "Time Machine is Apple's integrated backup utility for automatic, versioned backups and restoration.",
      "B": "ChronoSync is third-party synchronization/backup software.",
      "C": "IDrive is a third-party cloud backup service.",
      "D": "Retrospect is third-party backup software."
    },
    "tip": "Time Machine = built-in Mac backup and file-version recovery. CompTIA A+ 220-1202 - macOS Quiz Page 20"
  },
  {
    "topic": "macOS",
    "number": 19,
    "question": "Which macOS feature groups full-screen applications and windows into multiple virtual desktop environments?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Dashboard",
      "B": "Control Center",
      "C": "Desktop Window Manager",
      "D": "Spaces"
    },
    "explanations": {
      "A": "Dashboard was an older widget feature, not the virtual desktop system.",
      "B": "Control Center provides quick access to settings such as Wi-Fi and sound.",
      "C": "Desktop Window Manager is a Windows component.",
      "D": "Spaces is macOS's virtual desktop feature for organizing windows and full-screen apps into separate workspaces."
    },
    "tip": "Spaces = multiple Mac desktops/workspaces. CompTIA A+ 220-1202 - macOS Quiz Page 21"
  },
  {
    "topic": "macOS",
    "number": 20,
    "question": "Which macOS feature provides a single-screen thumbnail overview of open windows and applications?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Quick Look",
      "B": "Spotlight",
      "C": "Mission Control",
      "D": "Stage Manager"
    },
    "explanations": {
      "A": "Quick Look previews a selected file without opening its full application.",
      "B": "Spotlight is the macOS search utility.",
      "C": "Mission Control displays an overview of open windows, full-screen apps, and Spaces.",
      "D": "Stage Manager organizes windows into groups along the side of the screen but is not the source answer for the all-windows overview."
    },
    "tip": "Mission Control gives you the big-picture view of open Mac windows. CompTIA A+ 220-1202 - macOS Quiz Page 22"
  },
  {
    "topic": "macOS",
    "number": 21,
    "question": "Which built-in macOS utility securely stores passwords, encryption keys, certificates, and other credentials?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "Keychain",
      "B": "Credential Manager",
      "C": "Apple ID",
      "D": "FileVault"
    },
    "explanations": {
      "A": "Keychain securely stores passwords, certificates, cryptographic keys, and related credentials for macOS and applications.",
      "B": "Credential Manager is the comparable Windows feature.",
      "C": "An Apple ID is an account identity, not the local credential-storage utility.",
      "D": "FileVault encrypts the startup disk rather than acting as a credential vault."
    },
    "tip": "Keychain = password and certificate vault; FileVault = disk encryption. CompTIA A+ 220-1202 - macOS Quiz Page 23"
  },
  {
    "topic": "macOS",
    "number": 22,
    "question": "Which option is the macOS system search utility?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Explorer",
      "B": "File explorer",
      "C": "Spotlight",
      "D": "Finder"
    },
    "explanations": {
      "A": "Explorer is associated with Windows file management.",
      "B": "File Explorer is the Windows file manager.",
      "C": "Spotlight searches applications, files, settings, and other indexed content in macOS.",
      "D": "Finder manages files and folders; Spotlight is the dedicated system search feature."
    },
    "tip": "Spotlight searches; Finder browses files. CompTIA A+ 220-1202 - macOS Quiz Page 24"
  },
  {
    "topic": "macOS",
    "number": 23,
    "question": "What is Apple's cloud service for storing and syncing data across devices?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "iDrive",
      "B": "AirDrop",
      "C": "OneDrive",
      "D": "iCloud"
    },
    "explanations": {
      "A": "IDrive is a third-party backup/cloud service.",
      "B": "AirDrop transfers files directly between nearby devices rather than maintaining cloud synchronization.",
      "C": "OneDrive is Microsoft's cloud storage service.",
      "D": "iCloud is Apple's cloud platform for synchronizing data and services across Apple devices."
    },
    "tip": "iCloud = Apple's cloud; AirDrop = nearby direct transfer. CompTIA A+ 220-1202 - macOS Quiz Page 25"
  },
  {
    "topic": "macOS",
    "number": 24,
    "question": "Apple's iMessage is designed for secure exchange of email messages between Apple devices.",
    "answers": [
      "B"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "iMessage is not an email service; it is Apple's instant messaging service.",
      "B": "The statement is false because iMessage exchanges instant messages and related media, not email."
    },
    "tip": "iMessage is messaging; Mail handles email. CompTIA A+ 220-1202 - macOS Quiz Page 26"
  },
  {
    "topic": "macOS",
    "number": 25,
    "question": "Which macOS app provides real-time audio and video calling between Apple devices?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "iChat",
      "B": "FaceTime",
      "C": "Signal",
      "D": "Zoom"
    },
    "explanations": {
      "A": "iChat was an older Apple messaging application and is not the current source answer.",
      "B": "FaceTime is Apple's built-in audio and video calling service.",
      "C": "Signal is a third-party messaging and calling application.",
      "D": "Zoom is a third-party conferencing platform rather than Apple's built-in calling app."
    },
    "tip": "FaceTime = Apple audio/video calls. CompTIA A+ 220-1202 - macOS Quiz Page 27"
  },
  {
    "topic": "macOS",
    "number": 26,
    "question": "Which feature should a user use so files stay synced between a MacBook and iPad through the cloud?",
    "answers": [
      "A"
    ],
    "options": {
      "A": "iCloud Drive",
      "B": "AirDrop",
      "C": "iDrive",
      "D": "Continuity"
    },
    "explanations": {
      "A": "iCloud Drive stores files in iCloud and keeps them available and synchronized across signed-in Apple devices.",
      "B": "AirDrop transfers a file directly at one moment; it does not maintain continuous cloud synchronization.",
      "C": "IDrive is a third-party service and is not the Apple feature requested.",
      "D": "Continuity is a broader collection of cross-device features; iCloud Drive is the specific cloud file-sync solution."
    },
    "tip": "iCloud Drive keeps the same files available across Apple devices. CompTIA A+ 220-1202 - macOS Quiz Page 28"
  },
  {
    "topic": "macOS",
    "number": 27,
    "question": "In modern macOS, trackpad gestures can be customized in System Settings under Trackpad.",
    "answers": [
      "A"
    ],
    "options": {
      "A": "True",
      "B": "False"
    },
    "explanations": {
      "A": "The source identifies Trackpad preferences in System Settings as the place to customize gestures.",
      "B": "This contradicts the source's stated location for gesture settings."
    },
    "tip": "Trackpad gestures are configured in System Settings > Trackpad. CompTIA A+ 220-1202 - macOS Quiz Page 29"
  },
  {
    "topic": "macOS",
    "number": 28,
    "question": "Which is the default file-management application for macOS?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Dock",
      "B": "Explorer",
      "C": "Spotlight",
      "D": "Finder"
    },
    "explanations": {
      "A": "The Dock launches and switches applications; it is not the file manager.",
      "B": "Explorer is associated with Windows.",
      "C": "Spotlight is a search utility.",
      "D": "Finder is the standard macOS interface for browsing, organizing, copying, and managing files and folders."
    },
    "tip": "Finder on macOS plays the role File Explorer plays on Windows. CompTIA A+ 220-1202 - macOS Quiz Page 30"
  },
  {
    "topic": "macOS",
    "number": 29,
    "question": "Which macOS feature is similar to the Windows taskbar and gives quick access to apps and minimized windows?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "Menu Bar",
      "B": "Quick Look",
      "C": "Dock",
      "D": "Preview"
    },
    "explanations": {
      "A": "The menu bar contains application menus and status items rather than serving as the main app launcher/switcher.",
      "B": "Quick Look previews files.",
      "C": "The Dock holds favorite and running applications and can contain minimized windows.",
      "D": "Preview is an application for viewing PDFs and images."
    },
    "tip": "Dock = app launcher and running-app area at the edge of the Mac desktop. CompTIA A+ 220-1202 - macOS Quiz Page 31"
  },
  {
    "topic": "macOS",
    "number": 30,
    "question": "What is the set of Apple features that lets users transition tasks and data seamlessly between devices?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "iMessages",
      "B": "Continuity",
      "C": "Universal Clipboard",
      "D": "iCloud Drive"
    },
    "explanations": {
      "A": "Messages is one communication service, not the umbrella cross-device feature set.",
      "B": "Continuity is Apple's collection of features designed to let Macs, iPhones, iPads, and other Apple devices work together.",
      "C": "Universal Clipboard is one feature within the broader Continuity family.",
      "D": "iCloud Drive synchronizes files but is not the umbrella term for cross-device task transitions."
    },
    "tip": "Continuity is the umbrella; features such as Universal Clipboard work under it. CompTIA A+ 220-1202 - macOS Quiz Page 32"
  },
  {
    "topic": "macOS",
    "number": 31,
    "question": "Which macOS tool can create .dmg files?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Disk Management",
      "B": "iDrive",
      "C": "GParted",
      "D": "Disk Utility"
    },
    "explanations": {
      "A": "Disk Management is a Windows storage utility.",
      "B": "IDrive is a third-party cloud/backup service.",
      "C": "GParted is a Linux-oriented partition editor.",
      "D": "Disk Utility can create and manage disk images, including .dmg files, as well as disks and volumes."
    },
    "tip": "Disk Utility manages Mac disks, volumes, and disk images. CompTIA A+ 220-1202 - macOS Quiz Page 33"
  },
  {
    "topic": "macOS",
    "number": 32,
    "question": "Which macOS feature encrypts the startup disk to protect data from unauthorized access?",
    "answers": [
      "B"
    ],
    "options": {
      "A": "TrueCrypt",
      "B": "FileVault",
      "C": "Keychain",
      "D": "Gatekeeper"
    },
    "explanations": {
      "A": "TrueCrypt is not the built-in macOS startup-disk encryption feature.",
      "B": "FileVault provides full-disk encryption for the Mac startup volume.",
      "C": "Keychain stores credentials and cryptographic material but does not encrypt the entire startup disk.",
      "D": "Gatekeeper checks whether applications are trusted before allowing them to run."
    },
    "tip": "FileVault protects the disk; Keychain protects credentials; Gatekeeper checks apps. CompTIA A+ 220-1202 - macOS Quiz Page 34"
  },
  {
    "topic": "macOS",
    "number": 33,
    "question": "Which macOS tool provides access to different command-line shells?",
    "answers": [
      "C"
    ],
    "options": {
      "A": "PowerShell",
      "B": "Command Prompt",
      "C": "Terminal",
      "D": "Console"
    },
    "explanations": {
      "A": "PowerShell is primarily associated with Microsoft, though it can be installed on macOS; it is not the built-in shell access tool requested.",
      "B": "Command Prompt is a Windows command-line interface.",
      "C": "Terminal is the built-in macOS application used to open command-line shells such as zsh.",
      "D": "Console displays system logs and diagnostic messages rather than serving as the standard interactive shell application."
    },
    "tip": "Terminal = command line; Console = logs. CompTIA A+ 220-1202 - macOS Quiz Page 35"
  },
  {
    "topic": "macOS",
    "number": 34,
    "question": "Which macOS feature lets a user terminate an unresponsive application?",
    "answers": [
      "D"
    ],
    "options": {
      "A": "Safe Quit",
      "B": "Force Stop",
      "C": "End Task",
      "D": "Force Quit"
    },
    "explanations": {
      "A": "Safe Quit is not the macOS feature named in the source.",
      "B": "Force Stop is not the standard macOS command for closing a frozen application.",
      "C": "End Task is Windows terminology commonly associated with Task Manager.",
      "D": "Force Quit is the macOS function used to close an application that is no longer responding."
    },
    "tip": "Frozen Mac app? Use Force Quit."
  }
];
