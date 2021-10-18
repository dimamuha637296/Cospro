<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
$this->setFrameMode(true);
?>

<?if($arParams["DISPLAY_TOP_PAGER"]):?>
    <?=$arResult["NAV_STRING"]?>
<?endif;?>
<div class="catalog-line js-width">
    <?$i=1;foreach($arResult["ITEMS"] as $arItem):
        $this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
        $this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
        if($arResult["URL"][$arItem["ID"]] && $arResult["URL"][$arItem["ID"]] != $arItem["DETAIL_PAGE_URL"]){
        	$arItem["DETAIL_PAGE_URL"] = $arResult["URL"][$arItem["ID"]];
        }
        ?>
        <div class="item" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
            <div class="media-old">

                <div class="media-left-old">
                    <div class="element-sale">
                        <?if($arItem["PROPERTIES"]["FLG_SALE"]["VALUE_XML_ID"] == "Y"):?>
                            <div class="icon percent"></div>
                        <?endif;?>
                        <?if($arItem["PROPERTIES"]["FLG_NEW"]["VALUE_XML_ID"] == "Y"):?>
                            <div class="icon new"></div>
                        <?endif;?>
                        <?if($arItem["PROPERTIES"]["FLG_HIT"]["VALUE_XML_ID"] == "Y"):?>
                            <div class="icon sale"></div>
                        <?endif;?>
                    </div>
                    <div class="pic js-width-trg">
                        <a href="<?=$arItem["DETAIL_PAGE_URL"]?>">
                            <?if($arItem["PREVIEW_IMG"]):?>
                                <img src="<?=$arItem["PREVIEW_IMG"]["SRC"]?>" alt="<?=$arItem["PREVIEW_IMG"]["ALT"]?>" title="<?=$arItem["PREVIEW_IMG"]["ALT"]?>"/>
                            <?else:?>
                                <img src="<?=$arParams["DEFAULT_IMG"]?>" alt="no picture">
                            <?endif;?>
                        </a>
                    </div>
                </div>
                <div class="media-body-old">
                    <div class="wrap">
                        <div class="title">
                            <a href="<?=$arItem["DETAIL_PAGE_URL"]?>">
                                <?=$arItem["~NAME"]?>
                            </a>
                            <?if($arItem["PROPERTIES"]["ARTICLE"]["VALUE"]):?>
                                <div class="title-help">
                                    <?=$arItem["PROPERTIES"]["ARTICLE"]["NAME"]?> <?=$arItem["PROPERTIES"]["ARTICLE"]["~VALUE"]?>
                                </div>
                            <?endif;?>
                        </div>
                        <?if($arItem["PREVIEW_TEXT"]):?>
                            <div class="text">
                                <?=$arItem["~PREVIEW_TEXT"]?>
                            </div>
                        <?endif;?>
                        <?if($arItem["PROPERTIES"]["OLD_PRICE"]["VALUE"]):?>
                            <div class="price-old">
                                <?=number_format($arItem["PROPERTIES"]["OLD_PRICE"]["VALUE"], 0, '', '.')?> <?=$arParams["CATALOG_CURRENCY"]?>
                            </div>
                        <?endif;?>
                        <?if($arItem["PROPERTIES"]["PRICE"]["VALUE"]):?>
                            <div class="price">
                                <?=number_format($arItem["PROPERTIES"]["PRICE"]["VALUE"], 0, '', ' ')?> <?=$arParams["CATALOG_CURRENCY"]?>
                            </div>
                        <?endif;?>
                        <div class="buy">
                            <button class="btn btn-default css_submit_catalog" type="button" data-toggle="modal" data-target="#FRM_catalog" data-name="<?=$arItem["NAME"]?>">
                                <?=(strlen($arParams["BTN_NAME"])>0 ? $arParams["BTN_NAME"] : GetMessage("DB_DEFAULT_NAME_BTN"))?>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <?$i++;endforeach;?>
</div>
<?if($arParams["DISPLAY_BOTTOM_PAGER"]):?>
    <?=$arResult["NAV_STRING"]?>
<?endif;?>
