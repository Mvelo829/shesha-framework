﻿using FluentMigrator;
using Shesha.FluentMigrator;
using System;

namespace Shesha.Migrations
{
    [Migration(20240902170200)]
    public class M20240902170200 : OneWayMigration
    {
        public override void Up()
        {
            Create.Table("Frwk_UserRegistration")
                .WithIdAsGuid()
                .WithTenantIdAsNullable()
                .WithColumn("GoToUrlAfterRegistration").AsString().Nullable()
                .WithColumn("AdditionalRegistrationInfoFormModule").AsString().Nullable()
                .WithColumn("AdditionalRegistrationInfoFormName").AsString().Nullable()
                .WithColumn("CreationTime").AsDateTime()
                .WithColumn("UserId").AsInt64().Nullable()
                .WithColumn("IsComplete").AsBoolean().WithDefaultValue(false).Nullable()
                .WithColumn("UserNameOrEmailAddress").AsString(255).Nullable();

            IfDatabase("PostgreSql").Execute.Sql(@"
                INSERT INTO ""Frwk_UserRegistration"" (""Id"", ""UserId"", ""UserNameOrEmailAddress"", ""CreationTime"", ""IsComplete"")
                    SELECT 
                        gen_random_uuid() AS ""Id"", 
                        p.""UserId"" AS ""UserId"", 
                        u.""UserName"" AS ""UserNameOrEmailAddress"", 
                        p.""CreationTime"" AS ""CreationTime"", 
                        true AS ""IsComplete""
                    FROM 
                        ""Core_Persons"" p
                    INNER JOIN 
                        ""AbpUsers"" u ON p.""UserId"" = u.""Id""
                    WHERE 
                        p.""UserId"" IS NOT NULL;

            ");

            // Insert UserRegistration for existing Persons
            IfDatabase("SqlServer").Execute.Sql(@"
                INSERT INTO Frwk_UserRegistration (Id, UserId, UserNameOrEmailAddress, CreationTime, IsComplete)
                SELECT 
                    NEWID() AS Id, 
                    p.UserId, 
                    u.UserName AS UserNameOrEmailAddress, 
                    p.CreationTime, 
                    1 AS IsComplete
                FROM 
                    Core_Persons p
                INNER JOIN 
                    AbpUsers u ON p.UserId = u.Id
                WHERE 
                    p.UserId IS NOT NULL;
            ");

            IfDatabase("PostgreSql").Execute.Sql(@"
                INSERT INTO ""Frwk_UserRegistration"" (""Id"", ""UserId"", ""UserNameOrEmailAddress"", ""CreationTime"", ""IsComplete"")
                SELECT 
                    uuid_generate_v4(), 
                    p.""UserId"", 
                    u.""UserName"", 
                    p.""CreationTime"", 
                    true AS IsComplete
                FROM 
                    ""Core_Persons"" p
                INNER JOIN 
                    ""AbpUsers"" u ON p.""UserId"" = u.""Id""
                WHERE 
                    p.""UserId"" IS NOT NULL;
            ");
        }
    }
}