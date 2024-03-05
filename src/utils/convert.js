import { getParsedEthersError } from '@enzoferey/ethers-error-parser';

export const parseMetamaskError = (error) => {
  if (error?.response?.status) {
    const context = error?.response?.data?.message || error?.response?.statusText;
    return { context };
  } else {
    const txError = getParsedEthersError(error);
    if (!txError.context) {
      txError.context = 'An error has occurred!';
    } else if (txError.errorCode === 'REJECTED_TRANSACTION' || txError.context === 'ACTION_REJECTED') {
      txError.context = 'User rejected to sign transaction!';
    }
    return txError;
  }
};
