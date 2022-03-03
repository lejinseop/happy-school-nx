import React from "react";
import type { FC } from "react";

import PageLayout from "~/components/layouts/PageLayout";
import Widget from "~/components/Widget/";
import HighSchoolNotice from "~/components/HighSchoolNotice/HighSchoolNotice";

const ScheduleWidget = React.lazy(() => import("schedule_widget/ScheduleWidget"));
// const Cafeteria = React.lazy(() => import("cra_cafeteria/Cafeteria"));

const DashboardPage: FC = () => {
  return (
    <PageLayout title="Dashboard">
      <Widget type="host">
        <HighSchoolNotice />
      </Widget>
      <Widget type="remote">
        <ScheduleWidget />
      </Widget>
      <Widget type="remote">
        {/* <Cafeteria /> */}
      </Widget>
    </PageLayout>
  );
};

export default DashboardPage;
