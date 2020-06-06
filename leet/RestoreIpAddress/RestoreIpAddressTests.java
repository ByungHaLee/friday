import org.junit.jupiter.api.Test;

import java.util.List;

public class RestoreIpAddressTests {
    @Test
    public void test1() {
        RestoreIpAddress restoreIpAddress = new RestoreIpAddress();
        List<String> results = restoreIpAddress.restoreIpAddresses("25525511135");
        System.out.println(results);
    }
}
