import java.util.ArrayList;
import java.util.List;

public class RestoreIpAddress {
    public List<String> restoreIpAddresses(String s) {
        List<String> possibleList = new ArrayList<String>();
        cutAndCheck(possibleList, "", s, 4);
        return possibleList;
    }

    void cutAndCheck(List<String> possibleList, String concat, String s, int count) {
        if(count == 0 && s.isEmpty()) {
            possibleList.add(concat);
            return;
        }

        count--;
        for(int i=1; i<4;i++) {
            if(s.length() > count*3+i || s.length() < count+i)
                continue;
            String cut = s.substring(0, i);
            int v = Integer.parseInt(cut);
            if(v>=0 && v<256)
                cutAndCheck(possibleList, concat.isEmpty()?cut: concat + "." + cut, s.substring(i), count);
        }
    }

}
