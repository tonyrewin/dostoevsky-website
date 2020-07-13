import React, { PureComponent } from "react";
import ClausePageLayout from "src/components/ClausePageLayout";
import Typography from "src/components/ui-kit/Typography";

interface ClauseMainPageProps {
  clauseNumber: number;
  year: number;
}

class ClauseMainPage extends PureComponent<ClauseMainPageProps> {
  render(): React.ReactNode {
    const { clauseNumber, year } = this.props;

    return (
      <ClausePageLayout clauseNumber={clauseNumber} year={year}>
        <Typography component="h3" variant="h1" font="serif">
          Основной и дополнительный составы
        </Typography>
      </ClausePageLayout>
    );
  }
}

export default ClauseMainPage;