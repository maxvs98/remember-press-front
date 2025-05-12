import Image from "next/image";
import React from "react";
import horizontal_image from "../public/images/horizontal_image.png";
import full_image from "../public/images/full.png";
import simple_image from "../public/images/simple_image.png";
import vertical_image from "../public/images/vertical_iamge.png";
import sample_text_image from "../public/images/sample-text.jpg";
import { PageBlockType } from "@prisma/client";

export interface ModalItemData {
  label: string;
  additionalInfo: React.ReactNode;
}

export const getModalItemDataForId = (
  type?: string,
  pageNumber?: number
): ModalItemData => {
  switch (type) {
    case PageBlockType.plaintext:
      return {
        label: "Text Only",
        additionalInfo: (
          <div className="border-2 w-full h-full ui-checked:border-sea-green flex flex-col justify-between items-center rounded-lg px-2 py-2 aspect-square cursor-pointer ">
            <p>Chapter title</p>
            <Image
              width={84}
              height={120}
              src={sample_text_image}
              alt="sample_text_image-image"
            />
            <p className="text-[8px]">{pageNumber || "23"}</p>
          </div>
        ),
      };
    case PageBlockType.landscape2:
      return {
        label: "2 Landscape",
        additionalInfo: (
          <div className="border-2 w-full h-full ui-checked:border-sea-green flex flex-col justify-between items-center rounded-lg px-2 py-2 aspect-square cursor-pointer  ">
            <p>Chapter title</p>
            <Image
              width={128}
              height={64}
              src={horizontal_image}
              alt="horizontal-image"
            />
            <Image
              width={128}
              height={64}
              src={horizontal_image}
              alt="horizontal-image"
            />
            <p className="text-[8px]">{pageNumber || "23"}</p>
          </div>
        ),
      };
    case PageBlockType.portrait2:
      return {
        label: "2 Portrait",
        additionalInfo: (
          <div className="border-2 w-full h-full ui-checked:border-sea-green flex flex-col justify-between items-center rounded-lg px-2 py-2 aspect-square cursor-pointer  ">
            <p>Chapter title</p>
            <div className="flex gap-1">
              <Image
                width={64}
                height={128}
                src={vertical_image}
                alt="vertical-image"
              />
              <Image
                width={64}
                height={128}
                src={vertical_image}
                alt="vertical-image"
              />
            </div>
            <p className="text-[8px]">{pageNumber || "23"}</p>
          </div>
        ),
      };
    case PageBlockType.square4:
      return {
        label: "4 Square",
        additionalInfo: (
          <div className="border-2 w-full h-full ui-checked:border-sea-green flex flex-col justify-between items-center rounded-lg px-2 py-2 aspect-square cursor-pointer  ">
            <p>Chapter title</p>
            <div className="flex gap-2">
              <Image
                width={64}
                height={64}
                src={simple_image}
                alt="simple_image-image"
              />
              <Image
                width={64}
                height={64}
                src={simple_image}
                alt="simple_image-image"
              />
            </div>
            <div className="flex gap-2">
              <Image
                width={64}
                height={64}
                src={simple_image}
                alt="simple_image-image"
              />
              <Image
                width={64}
                height={64}
                src={simple_image}
                alt="simple_image-image"
              />
            </div>

            <p className="text-[8px]">{pageNumber || "23"}</p>
          </div>
        ),
      };
    case PageBlockType.square2portrait1:
      return {
        label: "2 Square + 1 Portrait",
        additionalInfo: (
          <div className="border-2 w-full h-full ui-checked:border-sea-green flex flex-col justify-between items-center rounded-lg px-2 py-2 aspect-square cursor-pointer  ">
            <p>Chapter title</p>
            <div className="flex gap-2">
              <Image
                width={64}
                height={136}
                src={vertical_image}
                alt="simple_image-image"
              />
              <div className="flex flex-col justify-between">
                <Image
                  width={64}
                  height={64}
                  src={simple_image}
                  alt="simple_image-image"
                />
                <Image
                  width={64}
                  height={64}
                  src={simple_image}
                  alt="simple_image-image"
                />
              </div>
            </div>
            <p className="text-[8px]">{pageNumber || "23"}</p>
          </div>
        ),
      };
    case PageBlockType.square2landscape1:
      return {
        label: "2 Square + 1 Landscape",
        additionalInfo: (
          <div className="border-2 w-full h-full ui-checked:border-sea-green flex flex-col justify-between items-center rounded-lg px-2 py-2 aspect-square cursor-pointer  ">
            <p>Chapter title</p>
            <div className="flex gap-2">
              <Image
                width={64}
                height={64}
                src={simple_image}
                alt="simple_image-image"
              />
              <Image
                width={64}
                height={64}
                src={simple_image}
                alt="simple_image-image"
              />
            </div>
            <Image
              width={136}
              height={64}
              src={horizontal_image}
              alt="simple_image-image"
            />
            <p className="text-[8px]">{pageNumber || "23"}</p>
          </div>
        ),
      };
    case PageBlockType.fullbleed:
      return {
        label: "Full Bleed",
        additionalInfo: (
          <div className="border-2 w-full h-full ui-checked:border-sea-green flex flex-col justify-between items-center rounded-lg px-2 py-2 aspect-square cursor-pointer  ">
            <Image
              width={148}
              height={148}
              src={full_image}
              alt="full_image-image"
            />
          </div>
        ),
      };
    default:
      return { label: "", additionalInfo: null };
  }
};
