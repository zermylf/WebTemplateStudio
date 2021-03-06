export const setCosmosModalButtonStatus = (
  selections: any,
  isValidatingName: boolean,
  accountNameAvailability: any,
  setFormIsSendable: (status: boolean) => void
): boolean => {
  let isSubscriptionEmpty = false;
  let isAccountNameEmpty = false;
  let isApiEmpty = false;
  let isAnyEmpty = false;

  isSubscriptionEmpty = selections.subscription.value === "";
  isAccountNameEmpty = selections.accountName.value === "";
  isApiEmpty = selections.api.value === "";

  isAnyEmpty = isSubscriptionEmpty || isAccountNameEmpty || isApiEmpty;

  const { isAccountNameAvailable } = accountNameAvailability;

  const isDisabled = isAnyEmpty || isValidatingName || !isAccountNameAvailable;

  setFormIsSendable(!isDisabled);

  return isDisabled;
};
