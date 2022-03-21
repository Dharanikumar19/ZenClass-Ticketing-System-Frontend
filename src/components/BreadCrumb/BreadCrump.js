import React from "react";
import { Breadcrumb } from "react-bootstrap"; 

export const BreadcrumbPage = ({ page }) => {
  return (
    <Breadcrumb>
      <h5><Breadcrumb.Item active>{page}</Breadcrumb.Item></h5>
    </Breadcrumb>
  );
};