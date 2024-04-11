import axiosInstance from './axiosInstance';

export const getUserByAddress = (address) => {
  return axiosInstance.get(`/users/${address}`);
};

export const createUser = (address, referral = '') => {
  return axiosInstance.post(`/users`, {
    address,
    referral,
  });
};

export const updateUser = (address, data) => {
  return axiosInstance.patch(`/users/${address}`, data);
};
