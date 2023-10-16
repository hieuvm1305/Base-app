"use client";
import { Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

function TestLang() {
  const { t, i18n } = useTranslation('product');
  const framework = "nextjs";

  return (
    <div>
      <h1>{t("description", { framework })}</h1>
      <span>{t("price")}</span>
      <br />
      <span>{t("product")}</span>
      <div>
        <Button
          onClick={() => {
            i18n.changeLanguage("vi");
          }}
        >
          Change to Vi
        </Button>
        <Button
          onClick={() => {
            i18n.changeLanguage("en");
          }} 
        >
          Change to Eng
        </Button>
      </div>
    </div>
  );
}

export default TestLang;
