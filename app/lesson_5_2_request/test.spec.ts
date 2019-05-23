import {RequestManager} from "./request_manager";

fdescribe("Test of request manager", () => {
    it("should get list of users", async () => {
        await new RequestManager().getListUsersFromReqest();
    });
});
